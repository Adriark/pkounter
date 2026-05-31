-- Optional Supabase SQL migration for cleaner usernames on new sign-ups.
-- Run this manually in the Supabase SQL editor if your profiles table uses:
--   profiles.id uuid primary key references auth.users(id)
-- It does not touch RLS policies or existing users.

create or replace function public.pkounter_clean_username(raw_name text)
returns text
language plpgsql
immutable
as $$
declare
  cleaned text;
begin
  cleaned := lower(coalesce(raw_name, ''));
  cleaned := translate(
    cleaned,
    'áàäâãåéèëêíìïîóòöôõúùüûñçÁÀÄÂÃÅÉÈËÊÍÌÏÎÓÒÖÔÕÚÙÜÛÑÇ',
    'aaaaaaeeeeiiiiooooouuuuncaaaaaaeeeeiiiiooooouuuunc'
  );
  cleaned := regexp_replace(cleaned, '[^a-z0-9]+', '', 'g');
  cleaned := left(cleaned, 24);

  if length(cleaned) < 3 then
    cleaned := 'trainer';
  end if;

  return cleaned;
end;
$$;

create or replace function public.pkounter_clean_display_name(metadata jsonb)
returns text
language plpgsql
immutable
as $$
declare
  display_name text;
begin
  display_name := nullif(trim(coalesce(
    metadata->>'display_name',
    metadata->>'full_name',
    metadata->>'name',
    metadata->>'global_name',
    ''
  )), '');

  if display_name is null or display_name like '%@%' then
    return null;
  end if;

  return left(display_name, 80);
end;
$$;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  base_username text;
  candidate_username text;
  suffix integer := 2;
  pretty_display_name text;
begin
  pretty_display_name := public.pkounter_clean_display_name(new.raw_user_meta_data);

  base_username := public.pkounter_clean_username(coalesce(
    new.raw_user_meta_data->>'username',
    new.raw_user_meta_data->>'preferred_username',
    new.raw_user_meta_data->>'name',
    new.raw_user_meta_data->>'full_name',
    split_part(new.email, '@', 1),
    'trainer'
  ));

  candidate_username := base_username;

  while exists (
    select 1
    from public.profiles
    where username = candidate_username
      and id <> new.id
  ) loop
    candidate_username := left(base_username, greatest(3, 24 - length(suffix::text))) || suffix::text;
    suffix := suffix + 1;
  end loop;

  insert into public.profiles (id, username, display_name)
  values (new.id, candidate_username, pretty_display_name)
  on conflict (id) do update
    set display_name = coalesce(public.profiles.display_name, excluded.display_name);

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();
