# Pkounter

Static web application for building Pokémon Champions teams across multiple formats, featuring team suggestions, counters, and Showdown export support.

## Features

- Full 6-Pokémon team builder with quick import from suggestions.
- Complete Pokémon Champions Pokédex powered by `champions-data.js`, including stats, typings, abilities, Megas, and learnsets.
- Editor for items, abilities, natures, moves, and Stat Points.
- Final stat calculation at level 50 using 31 IVs and SP values as equivalents of 8 EVs.
- Pokémon Champions Showdown-style import/export support with `EVs:` lines using Champions SP values (0–32).
- Real-time suggestions based on usage data, common partners, VGC roles, and defensive coverage.
- Counter analysis showing the biggest threats once the 6-Pokémon team is completed.
- About/FAQ page with sources, update cadence, and contact information.
- Pokémon and item sprites provided through Pokémon Showdown.

## Data Sources

- Champions roster, stats, Megas, and learnsets: PikaChampions `data.js`
- Move data: Pokémon Showdown `moves.json`
- Format rules and Champions SP system: Champions Builder, ChampDex, and Reg M-A guides
- Usage stats, partners, items, abilities, and competitive spreads: MunchStats Champions VGC 2026 Reg M-A Bo3
- Doubles teambuilding principles: VGC Guide

The manual competitive database inside `app.js` acts as a curated layer of popular meta sets on top of the complete Pokédex.  
If a Pokémon does not have a manually curated competitive set, the app automatically generates a legal default set based on its learnset and base stats.