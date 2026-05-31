(function () {
  const SUPABASE_URL = "https://kjcyhauosltrdorpihoi.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_8sJaZqS9C7I9JU7GcPFRRw_zCqEq-44";

  const sdk = window.supabase;
  if (!sdk?.createClient) {
    window.PKOUNTER_SUPABASE = { available: false, error: "Supabase SDK is not available." };
    return;
  }

  const client = sdk.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  });

  const USERNAME_RE = /^[a-z0-9_]{3,24}$/;
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function cleanEmail(email) {
    return String(email || "").trim().toLowerCase();
  }

  function cleanUsername(username) {
    return String(username || "")
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9_]+/g, "")
      .replace(/_+/g, "_")
      .replace(/^_+|_+$/g, "")
      .slice(0, 24);
  }

  function validateUsername(username) {
    const value = cleanUsername(username);
    return USERNAME_RE.test(value) ? "" : "Username must be 3-24 chars using lowercase letters, numbers, and underscore.";
  }

  function validateEmail(email) {
    return EMAIL_RE.test(cleanEmail(email)) ? "" : "Use a valid email address.";
  }

  function validatePassword(password) {
    return String(password || "").length >= 8 ? "" : "Password must be at least 8 characters.";
  }

  function authRedirectTo() {
    return `${window.location.origin}/building/`;
  }

  function formatError(error) {
    if (!error) return "";
    return error.message || String(error);
  }

  async function signUp({ username, email, password }) {
    const safeUsername = cleanUsername(username);
    const usernameError = validateUsername(username);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    if (usernameError || emailError || passwordError) throw new Error(usernameError || emailError || passwordError);

    const { data, error } = await client.auth.signUp({
      email: cleanEmail(email),
      password,
      options: {
        data: { username: safeUsername, display_name: safeUsername },
        emailRedirectTo: authRedirectTo(),
      },
    });
    if (error) throw error;
    return data;
  }

  async function signIn({ email, password }) {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    if (emailError || passwordError) throw new Error(emailError || passwordError);
    const { data, error } = await client.auth.signInWithPassword({ email: cleanEmail(email), password });
    if (error) throw error;
    return data;
  }

  async function signInWithProvider(provider) {
    const { data, error } = await client.auth.signInWithOAuth({
      provider,
      options: { redirectTo: authRedirectTo() },
    });
    if (error) throw error;
    return data;
  }

  async function signOut() {
    const { error } = await client.auth.signOut();
    if (error) throw error;
  }

  async function getSession() {
    const { data, error } = await client.auth.getSession();
    if (error) throw error;
    return data.session || null;
  }

  async function getUser() {
    const { data, error } = await client.auth.getUser();
    if (error) throw error;
    return data.user || null;
  }

  async function getProfile(userId) {
    if (!userId) return null;
    let result = await client.from("profiles").select("*").eq("id", userId).maybeSingle();
    if (result.error && /column .*id/i.test(result.error.message || "")) {
      result = await client.from("profiles").select("*").eq("user_id", userId).maybeSingle();
    }
    if (result.error) throw result.error;
    return result.data || null;
  }

  async function updateProfile(userId, patch) {
    if (!userId) return null;
    const safePatch = {};
    if (Object.prototype.hasOwnProperty.call(patch || {}, "display_name")) {
      const displayName = String(patch.display_name || "").trim().slice(0, 80);
      safePatch.display_name = displayName || null;
    }
    if (!Object.keys(safePatch).length) return getProfile(userId);

    let result = await client.from("profiles").update(safePatch).eq("id", userId).select("*").maybeSingle();
    if (result.error && /column .*id/i.test(result.error.message || "")) {
      result = await client.from("profiles").update(safePatch).eq("user_id", userId).select("*").maybeSingle();
    }
    if (result.error) throw result.error;
    return result.data || null;
  }

  async function resetPassword(email) {
    const emailError = validateEmail(email);
    if (emailError) throw new Error(emailError);
    const { data, error } = await client.auth.resetPasswordForEmail(cleanEmail(email), {
      redirectTo: authRedirectTo(),
    });
    if (error) throw error;
    return data;
  }

  async function updatePassword(newPassword) {
    const passwordError = validatePassword(newPassword);
    if (passwordError) throw new Error(passwordError);
    const { data, error } = await client.auth.updateUser({ password: newPassword });
    if (error) throw error;
    return data;
  }

  async function createTeam({ userId, name, teamJson }) {
    if (!userId) throw new Error("You must be logged in.");
    const { data, error } = await client
      .from("teams")
      .insert({ user_id: userId, name: String(name || "Untitled team").trim(), team_json: teamJson })
      .select()
      .single();
    if (error) throw error;
    return data;
  }

  async function listTeams(userId) {
    if (!userId) throw new Error("You must be logged in.");
    const { data, error } = await client.from("teams").select("*").eq("user_id", userId);
    if (error) throw error;
    return (data || []).sort((a, b) => {
      const left = Date.parse(b.updated_at || b.created_at || 0);
      const right = Date.parse(a.updated_at || a.created_at || 0);
      return left - right;
    });
  }

  async function loadTeam({ userId, teamId }) {
    if (!userId) throw new Error("You must be logged in.");
    const { data, error } = await client.from("teams").select("*").eq("id", teamId).eq("user_id", userId).single();
    if (error) throw error;
    return data;
  }

  async function updateTeam({ userId, teamId, name, teamJson }) {
    if (!userId) throw new Error("You must be logged in.");
    const patch = { team_json: teamJson };
    if (name) patch.name = String(name).trim();
    const { data, error } = await client
      .from("teams")
      .update(patch)
      .eq("id", teamId)
      .eq("user_id", userId)
      .select()
      .single();
    if (error) throw error;
    return data;
  }

  async function renameTeam({ userId, teamId, name }) {
    if (!userId) throw new Error("You must be logged in.");
    const trimmed = String(name || "").trim();
    if (!trimmed) throw new Error("Team name cannot be empty.");
    const { data, error } = await client
      .from("teams")
      .update({ name: trimmed })
      .eq("id", teamId)
      .eq("user_id", userId)
      .select()
      .single();
    if (error) throw error;
    return data;
  }

  async function deleteTeam({ userId, teamId }) {
    if (!userId) throw new Error("You must be logged in.");
    const { error } = await client.from("teams").delete().eq("id", teamId).eq("user_id", userId);
    if (error) throw error;
  }

  window.PKOUNTER_SUPABASE = {
    available: true,
    client,
    formatError,
    auth: {
      signUp,
      signIn,
      signInWithProvider,
      signOut,
      getSession,
      getUser,
      getProfile,
      updateProfile,
      resetPassword,
      updatePassword,
      getRedirectTo: authRedirectTo,
      onAuthStateChange: (...args) => client.auth.onAuthStateChange(...args),
    },
    teams: {
      createTeam,
      listTeams,
      loadTeam,
      updateTeam,
      renameTeam,
      deleteTeam,
    },
  };
})();
