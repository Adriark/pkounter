# Pkounter

Live site: https://pkounter.com/

Static web application for building Pokemon Champions teams across multiple formats, featuring team suggestions, counter analysis, defensive coverage, and Showdown-style import/export support.

## Pages

- Home: https://pkounter.com/
- Builder: https://pkounter.com/building.html
- About / FAQ: https://pkounter.com/about.html

If any public route or link does not load correctly, report it at `contactpkounter@gmail.com`.

## Features

- Full 6-Pokemon team builder with quick import from suggestions.
- Complete Pokemon Champions Pokedex powered by `champions-data.js`, including stats, typings, abilities, Megas, and learnsets.
- Editor for items, abilities, natures, moves, and Stat Points.
- Final stat calculation at level 50 using 31 IVs and Champions SP values.
- Pokemon Champions Showdown-style import/export support with `EVs:` lines using Champions SP values from 0 to 32.
- Real-time suggestions based on usage data, common partners, roles, and defensive coverage.
- Counter analysis for individual Pokemon and for completed teams.
- About/FAQ page with sources, update cadence, official website, and contact information.
- Pokemon and item sprites provided through Pokemon Showdown resources.

## Data Sources

- Champions roster, stats, Megas, and learnsets: local Champions data files.
- Move data: Pokemon Showdown move data.
- Format rules and Champions SP system: Champions resources and format guides.
- Usage stats, partners, items, abilities, moves, natures, and spreads: MunchStats and Pokemon Showdown/Smogon stats.
- Teambuilding principles: VGC Guide and competitive Pokemon resources.

The competitive logic in `app.js` acts as a curated layer on top of the complete Champions Pokedex. If a Pokemon does not have a manually curated competitive set, the app generates a legal default set based on its learnset, usage data, role, typing, and base stats.

## SEO / Google

The public domain is `https://pkounter.com/`.

The site includes:

- Per-page `<title>` and `<meta name="description">` tags.
- Canonical URLs for the home, builder, and about pages.
- `robots.txt` pointing crawlers to the sitemap.
- `sitemap.xml` listing the public pages.

After deployment, add `https://pkounter.com/` to Google Search Console and submit:

```text
https://pkounter.com/sitemap.xml
```
