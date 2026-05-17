# Pkounter

Live site: https://pkounter.com/

Pkounter is a free, fan-made static web application for building Pokémon Champions teams across multiple formats. It provides real-time teammate suggestions, counter analysis, defensive coverage insights, and Showdown-style import/export support.

## Pages

- Home: https://pkounter.com/
- Builder: https://pkounter.com/building/
- About / FAQ: https://pkounter.com/about/

If any public route or link does not load correctly, please report it at `contact@pkounter.com`.

The GitHub Pages structure uses folder-based routes:

- `/index.html` -> `https://pkounter.com/`
- `/building/index.html` -> `https://pkounter.com/building/`
- `/about/index.html` -> `https://pkounter.com/about/`

Legacy `/building.html` and `/about.html` are kept as lightweight redirect pages during the transition.

## Features

- Full 6-Pokémon team builder with quick import from suggestions.
- Complete Pokémon Champions Pokédex powered by `champions-data.js`, including stats, typings, abilities, Megas, and learnsets.
- Editor for items, abilities, natures, moves, and Stat Points.
- Final stat calculation at level 50 using 31 IVs and Champions EV values.
- Pokémon Champions Showdown-style import/export support with `EVs:` lines using Champions EV values from 0 to 32.
- Real-time suggestions based on usage data, common partners, roles, and defensive coverage.
- Counter analysis for individual Pokémon and completed teams.
- About/FAQ page with sources, update cadence, credits, and contact information.
- Pokémon and item sprites provided through Pokémon Showdown resources.

## Data Sources

- Champions roster, stats, Megas, and learnsets: local Champions data files.
- Move data: Pokémon Showdown move data.
- Format rules and Champions EV system: Champions resources and format guides.
- Competitive usage stats, partners, items, abilities, moves, natures, and spreads: MunchStats, based on Smogon monthly usage stats.
- Teambuilding principles: VGC Guide and competitive Pokémon resources.

The competitive logic in `app.js` acts as a curated layer on top of the complete Champions Pokédex. If a Pokémon does not have a manually curated competitive set, the app generates a legal default set based on its learnset, usage data, role, typing, and base stats.

## Disclaimer

Pkounter is a fan-made project and is not affiliated with Nintendo, Game Freak, The Pokémon Company, Pokémon Showdown, Smogon, or MunchStats.

All Pokémon names, sprites, and related assets belong to their respective owners. Competitive data and community resources are credited to their original sources.
