# Pkounter

Aplicacion estatica para crear equipos de Pokemon Champions en varios formatos con sugerencias, counters y export Showdown.

## Que incluye

- Equipo de 6 con importacion rapida desde sugerencias.
- Pokedex Champions completa desde `champions-data.js`, con stats, tipos, habilidades, Megas y learnsets.
- Editor de objeto, habilidad, naturaleza, movimientos y Stat Points.
- Calculo de estadisticas finales a nivel 50 usando IV 31 y SP como equivalentes de 8 EV.
- Importacion y exportacion tipo Showdown Champions con linea `EVs:` usando valores Champions 0-32.
- Sugerencias en tiempo real basadas en uso, partners, roles de VGC y cobertura defensiva.
- Analisis de mayores counters al completar 6 Pokemon.
- Pagina About/FAQ con fuentes, cadencia de actualizacion y contacto.
- Sprites de Pokemon y objetos desde Pokemon Showdown.

## Fuentes usadas

- Roster, stats, Megas y learnsets Champions: PikaChampions `data.js`.
- Datos de movimientos: Pokemon Showdown `moves.json`.
- Reglas de formato y sistema SP de Champions: Champions Builder, ChampDex y guias Reg M-A.
- Uso, partners, objetos, habilidades y spreads competitivos iniciales: MunchStats Champions VGC 2026 Reg M-A Bo3.
- Principios de construccion de dobles: VGC Guide.

La base competitiva manual de `app.js` se usa como capa de sets populares sobre la Pokedex completa. Si un Pokemon no tiene set meta manual, la app genera un set inicial legal desde su learnset y sus stats.
