const LEVEL = 50;
const IV = 31;
const MAX_TEAM = 6;
const MAX_SP = 66;
const MAX_SP_STAT = 32;
const COUNTER_MOVE_USAGE_MIN = 5;
const COUNTER_MOVE_FALLBACK_USAGE_MIN = 1;
const STAT_KEYS = ["hp", "atk", "def", "spa", "spd", "spe"];
const STAT_LABELS = { hp: "HP", atk: "Atk", def: "Def", spa: "SpA", spd: "SpD", spe: "Spe" };
const TYPE_COLORS = {
  Normal: "#b4b0a5",
  Fire: "#f28c58",
  Water: "#64a6e8",
  Electric: "#f2cf52",
  Grass: "#6fca72",
  Ice: "#92d5d8",
  Fighting: "#cf6b64",
  Poison: "#b882d7",
  Ground: "#d6b06d",
  Flying: "#95b4e8",
  Psychic: "#ef7da2",
  Bug: "#a7bf4f",
  Rock: "#bca967",
  Ghost: "#7f79bc",
  Dragon: "#7b70e8",
  Dark: "#8b746b",
  Steel: "#a8b8c6",
  Fairy: "#e5a1d9",
};

const LANGUAGES = {
  es: "Español",
  en: "English",
};

const CHOICE_ITEM_IDS = new Set(["choiceband", "choicescarf", "choicespecs"]);
const CHOICE_LOCK_BAD_MOVE_IDS = new Set(["protect", "detect", "spikyshield", "kingsshield", "banefulbunker", "silktrap", "obstruct"]);
const FORM_MOVE_BLOCKLIST = {
  ninetalesalola: [
    "burningjealousy",
    "fireblast",
    "firespin",
    "flamecharge",
    "flamethrower",
    "flareblitz",
    "heatwave",
    "inferno",
    "mysticalfire",
    "overheat",
    "scorchingsands",
    "solarbeam",
  ],
};

const UI_TEXT = {
  es: {
    addButton: "Añadir",
    addPokemonPlaceholder: "Añadir Pokémon...",
    aboutButton: "Sobre Pkounter",
    applyPopularSet: "Aplicar set popular",
    attributionNotice: "Pkounter no está afiliado a Nintendo, Game Freak, The Pokémon Company, Smogon, Pokémon Showdown ni MunchStats.",
    clearButton: "Limpiar",
    closeButton: "Cerrar",
    configTitle: "Configuración",
    copiedButton: "Copiado",
    countersTitle: "Mayores counters",
    dataSources: "Datos y recursos:",
    trademarkNotice: "Pokémon y todos sus nombres respectivos son marcas registradas y \u00a9 de Nintendo 1996-2026.",
    editorEmpty: "Añade o selecciona un Pokémon para editar EVs, movimientos, objeto y habilidad.",
    exportButton: "Exportar",
    formatLabel: "Formato",
    importButton: "Importar",
    importDialogHint: "Pega tu equipo en formato Showdown sin mover el builder de sitio.",
    importDialogTitle: "Importar equipo",
    importLabel: "Pega tu equipo en formato Showdown",
    importPlaceholder: "Pega aquí un equipo en formato Showdown...",
    importTeamButton: "Importar equipo",
    languageLabel: "Idioma",
    levelRule: "Nivel 50",
    majorCountersHint: "Se activa al completar 6 Pokémon",
    madeBy: "Hecho por Adriark.",
    megaConflict: "Conflicto de Mega",
    megaRule: "1 Mega",
    movePlaceholder: "Movimiento {n}",
    noItem: "Sin objeto",
    pokemonCount: "{count}/6 Pokémon",
    randomButton: "Aleatorio",
    readyButton: "Listo",
    selectedHintEmpty: "Elige un slot para editarlo",
    slotHint: "Añade un Pokémon",
    slotLabel: "Slot libre",
    spRule: "66 EVs · 32/stat",
    suggestionsTitle: "Sugerencias en tiempo real",
    suggestionsTab: "Teambuilding",
    teamFull: "Equipo lleno",
    teamCountersTab: "Counters del equipo",
    teamTitle: "Equipo final",
    threatAdvanced: "Avanzado",
    threatHint: "Respuestas directas contra una amenaza",
    threatModeAdvanced: "Modo avanzado",
    threatModeSimple: "Modo simple",
    threatPlaceholder: "Ej. Archaludon...",
    threatSetLabel: "Set objetivo",
    threatSimple: "Simple",
    threatTitle: "Buscar counters",
    threatTargetLabel: "Pokémon analizado",
    singleCounterTab: "Counter individual",
  },
  en: {
    addButton: "Add",
    addPokemonPlaceholder: "Add Pokémon...",
    aboutButton: "About Pkounter",
    applyPopularSet: "Apply popular set",
    attributionNotice: "Pkounter is not affiliated with Nintendo, Game Freak, The Pokémon Company, Smogon, Pokémon Showdown, or MunchStats.",
    clearButton: "Clear",
    closeButton: "Close",
    configTitle: "Configuration",
    copiedButton: "Copied",
    countersTitle: "Biggest counters",
    dataSources: "Data and resources:",
    trademarkNotice: "Pokémon and all respective names are trademarks and \u00a9 of Nintendo 1996-2026.",
    editorEmpty: "Add or select a Pokémon to edit EVs, moves, item, and ability.",
    exportButton: "Export",
    formatLabel: "Format",
    importButton: "Import",
    importDialogHint: "Paste a Showdown-format team without moving the builder layout.",
    importDialogTitle: "Import team",
    importLabel: "Paste your team in Showdown format",
    importPlaceholder: "Paste a Showdown-format team here...",
    importTeamButton: "Import team",
    languageLabel: "Language",
    levelRule: "Level 50",
    majorCountersHint: "Active after filling all 6 Pokémon",
    madeBy: "Made by Adriark.",
    megaConflict: "Mega conflict",
    megaRule: "1 Mega",
    movePlaceholder: "Move {n}",
    noItem: "No item",
    pokemonCount: "{count}/6 Pokémon",
    randomButton: "Random",
    readyButton: "Done",
    selectedHintEmpty: "Choose a slot to edit it",
    slotHint: "Add a Pokémon",
    slotLabel: "Empty slot",
    spRule: "66 EVs · 32/stat",
    suggestionsTitle: "Real-time suggestions",
    suggestionsTab: "Teambuilding",
    teamFull: "Team full",
    teamCountersTab: "Team counters",
    teamTitle: "Final team",
    threatAdvanced: "Advanced",
    threatHint: "Direct answers into a threat",
    threatModeAdvanced: "Advanced mode",
    threatModeSimple: "Simple mode",
    threatPlaceholder: "Ex. Archaludon...",
    threatSetLabel: "Target set",
    threatSimple: "Simple",
    threatTitle: "Search counters",
    threatTargetLabel: "Analyzed Pokémon",
    singleCounterTab: "Single counter",
  },
};

const LOCALE_OVERRIDES = {
  es: {
    moves: {
      facade: "Fachada",
      fakeout: "Sorpresa",
      trailblaze: "Abrecaminos",
      protect: "Protección",
      tailwind: "Viento Afín",
      trickroom: "Espacio Raro",
      icywind: "Viento Hielo",
      wideguard: "Vastaguardia",
      followme: "Señuelo",
      ragepowder: "Polvo Ira",
      helpinghand: "Refuerzo",
      willowisp: "Fuego Fatuo",
      partingshot: "Última Palabra",
      uturn: "Ida y Vuelta",
      earthquake: "Terremoto",
      rockslide: "Avalancha",
      heatwave: "Onda Ígnea",
      hypervoice: "Vozarrón",
      thunderwave: "Onda Trueno",
      electroweb: "Electrotela",
      taunt: "Mofa",
      haze: "Niebla",
      encore: "Otra Vez",
      disable: "Anulación",
      lastrespects: "Homenaje Póstumo",
      wavecrash: "Envite Acuático",
      flipturn: "Viraje",
      kowtowcleave: "Genufendiente",
      snowscape: "Paisaje Nevado",
      chillingwater: "Agua Fría",
      scaleshot: "Disparo Escama",
      dualwingbeat: "Ala Bis",
      ragefist: "Puño Furia",
      jetpunch: "Puño Jet",
      liquidation: "Hidroariete",
      throatchop: "Golpe Mordaza",
    },
    abilities: {
      intimidate: "Intimidación",
    },
  },
};

const NATURES = {
  Hardy: {},
  Lonely: { up: "atk", down: "def" },
  Brave: { up: "atk", down: "spe" },
  Adamant: { up: "atk", down: "spa" },
  Naughty: { up: "atk", down: "spd" },
  Bold: { up: "def", down: "atk" },
  Relaxed: { up: "def", down: "spe" },
  Impish: { up: "def", down: "spa" },
  Lax: { up: "def", down: "spd" },
  Timid: { up: "spe", down: "atk" },
  Hasty: { up: "spe", down: "def" },
  Jolly: { up: "spe", down: "spa" },
  Naive: { up: "spe", down: "spd" },
  Modest: { up: "spa", down: "atk" },
  Mild: { up: "spa", down: "def" },
  Quiet: { up: "spa", down: "spe" },
  Rash: { up: "spa", down: "spd" },
  Calm: { up: "spd", down: "atk" },
  Gentle: { up: "spd", down: "def" },
  Sassy: { up: "spd", down: "spe" },
  Careful: { up: "spd", down: "spa" },
  Docile: {},
  Serious: {},
  Bashful: {},
  Quirky: {},
};

const TYPE_CHART = {
  Normal: { Rock: 0.5, Ghost: 0, Steel: 0.5 },
  Fire: { Fire: 0.5, Water: 0.5, Grass: 2, Ice: 2, Bug: 2, Rock: 0.5, Dragon: 0.5, Steel: 2 },
  Water: { Fire: 2, Water: 0.5, Grass: 0.5, Ground: 2, Rock: 2, Dragon: 0.5 },
  Electric: { Water: 2, Electric: 0.5, Grass: 0.5, Ground: 0, Flying: 2, Dragon: 0.5 },
  Grass: { Fire: 0.5, Water: 2, Grass: 0.5, Poison: 0.5, Ground: 2, Flying: 0.5, Bug: 0.5, Rock: 2, Dragon: 0.5, Steel: 0.5 },
  Ice: { Fire: 0.5, Water: 0.5, Grass: 2, Ice: 0.5, Ground: 2, Flying: 2, Dragon: 2, Steel: 0.5 },
  Fighting: { Normal: 2, Ice: 2, Poison: 0.5, Flying: 0.5, Psychic: 0.5, Bug: 0.5, Rock: 2, Ghost: 0, Dark: 2, Steel: 2, Fairy: 0.5 },
  Poison: { Grass: 2, Poison: 0.5, Ground: 0.5, Rock: 0.5, Ghost: 0.5, Steel: 0, Fairy: 2 },
  Ground: { Fire: 2, Electric: 2, Grass: 0.5, Poison: 2, Flying: 0, Bug: 0.5, Rock: 2, Steel: 2 },
  Flying: { Electric: 0.5, Grass: 2, Fighting: 2, Bug: 2, Rock: 0.5, Steel: 0.5 },
  Psychic: { Fighting: 2, Poison: 2, Psychic: 0.5, Dark: 0, Steel: 0.5 },
  Bug: { Fire: 0.5, Grass: 2, Fighting: 0.5, Poison: 0.5, Flying: 0.5, Psychic: 2, Ghost: 0.5, Dark: 2, Steel: 0.5, Fairy: 0.5 },
  Rock: { Fire: 2, Ice: 2, Fighting: 0.5, Ground: 0.5, Flying: 2, Bug: 2, Steel: 0.5 },
  Ghost: { Normal: 0, Psychic: 2, Ghost: 2, Dark: 0.5 },
  Dragon: { Dragon: 2, Steel: 0.5, Fairy: 0 },
  Dark: { Fighting: 0.5, Psychic: 2, Ghost: 2, Dark: 0.5, Fairy: 0.5 },
  Steel: { Fire: 0.5, Water: 0.5, Electric: 0.5, Ice: 2, Rock: 2, Steel: 0.5, Fairy: 2 },
  Fairy: { Fire: 0.5, Fighting: 2, Poison: 0.5, Dragon: 2, Dark: 2, Steel: 0.5 },
};

const MOVE_INFO = {
  "Aqua Jet": { type: "Water", category: "Physical", role: "priority" },
  "Body Press": { type: "Fighting", category: "Physical" },
  "Close Combat": { type: "Fighting", category: "Physical" },
  "Coaching": { type: "Fighting", category: "Status", role: "support" },
  "Darkest Lariat": { type: "Dark", category: "Physical" },
  "Dire Claw": { type: "Poison", category: "Physical" },
  "Draco Meteor": { type: "Dragon", category: "Special" },
  "Dragon Claw": { type: "Dragon", category: "Physical" },
  "Dragon Pulse": { type: "Dragon", category: "Special" },
  "Earth Power": { type: "Ground", category: "Special" },
  "Earthquake": { type: "Ground", category: "Physical", role: "spread" },
  "Expanding Force": { type: "Psychic", category: "Special", role: "spread" },
  "Fake Out": { type: "Normal", category: "Physical", role: "fakeOut" },
  "Feint": { type: "Normal", category: "Physical", role: "priority" },
  "Flare Blitz": { type: "Fire", category: "Physical" },
  "Flower Trick": { type: "Grass", category: "Physical" },
  "Follow Me": { type: "Normal", category: "Status", role: "redirection" },
  "Haze": { type: "Ice", category: "Status", role: "support" },
  "Heat Wave": { type: "Fire", category: "Special", role: "spread" },
  "Helping Hand": { type: "Normal", category: "Status", role: "support" },
  "Hurricane": { type: "Flying", category: "Special" },
  "Hydro Pump": { type: "Water", category: "Special" },
  "Hyper Voice": { type: "Normal", category: "Special", role: "spread" },
  "Icy Wind": { type: "Ice", category: "Special", role: "speedControl" },
  "Iron Head": { type: "Steel", category: "Physical" },
  "Jet Punch": { type: "Water", category: "Physical", role: "priority" },
  "King's Shield": { type: "Steel", category: "Status", role: "protect" },
  "Kowtow Cleave": { type: "Dark", category: "Physical" },
  "Last Respects": { type: "Ghost", category: "Physical" },
  "Leech Seed": { type: "Grass", category: "Status" },
  "Moonblast": { type: "Fairy", category: "Special" },
  "Muddy Water": { type: "Water", category: "Special", role: "spread" },
  "Nasty Plot": { type: "Dark", category: "Status", role: "setup" },
  "Parting Shot": { type: "Dark", category: "Status", role: "pivot" },
  "Play Rough": { type: "Fairy", category: "Physical" },
  "Protect": { type: "Normal", category: "Status", role: "protect" },
  "Rage Powder": { type: "Bug", category: "Status", role: "redirection" },
  "Rock Slide": { type: "Rock", category: "Physical", role: "spread" },
  "Shadow Ball": { type: "Ghost", category: "Special" },
  "Shadow Sneak": { type: "Ghost", category: "Physical", role: "priority" },
  "Solar Beam": { type: "Grass", category: "Special" },
  "Spore": { type: "Grass", category: "Status", role: "sleep" },
  "Stored Power": { type: "Psychic", category: "Special" },
  "Sucker Punch": { type: "Dark", category: "Physical", role: "priority" },
  "Tailwind": { type: "Flying", category: "Status", role: "speedControl" },
  "Thunder Wave": { type: "Electric", category: "Status", role: "speedControl" },
  "Thunderbolt": { type: "Electric", category: "Special" },
  "Trick Room": { type: "Psychic", category: "Status", role: "speedControl" },
  "U-turn": { type: "Bug", category: "Physical", role: "pivot" },
  "Wave Crash": { type: "Water", category: "Physical" },
  "Wide Guard": { type: "Rock", category: "Status", role: "support" },
  "Will-O-Wisp": { type: "Fire", category: "Status", role: "burn" },
};

const META_POKEMON = [
  p("Sneasler", ["Fighting", "Poison"], [80, 130, 60, 40, 80, 120], 57.54, ["fastOffense", "fakeOut"], ["Unburden", "Poison Touch"], ["White Herb", "Focus Sash"], "Jolly", [2, 32, 0, 0, 0, 32], ["Close Combat", "Dire Claw", "Fake Out", "Protect"], ["Kingambit", "Basculegion", "Garchomp", "Incineroar", "Floette-Eternal"], "Presiona desde turno 1 con Fake Out y amenazas de KO. White Herb mantiene el daño de Close Combat y activa líneas agresivas con Unburden si el formato lo permite."),
  p("Incineroar", ["Fire", "Dark"], [95, 115, 90, 80, 90, 60], 38.69, ["fakeOut", "intimidate", "pivot"], ["Intimidate", "Blaze"], ["Sitrus Berry", "Chople Berry", "Shuca Berry"], "Careful", [32, 0, 14, 0, 20, 0], ["Fake Out", "Parting Shot", "Flare Blitz", "Darkest Lariat"], ["Sinistcha", "Sneasler", "Garchomp", "Basculegion", "Kingambit"], "El pegamento del equipo: compra turnos, baja daño físico y reposiciona con Parting Shot para que tus atacantes entren gratis."),
  p("Garchomp", ["Dragon", "Ground"], [108, 130, 95, 80, 85, 102], 46.32, ["spreadDamage", "groundImmunePartnerNeed"], ["Rough Skin", "Sand Veil"], ["Choice Scarf", "White Herb", "Soft Sand", "Haban Berry"], "Jolly", [2, 32, 0, 0, 0, 32], ["Earthquake", "Rock Slide", "Dragon Claw", "Protect"], ["Sneasler", "Incineroar", "Kingambit", "Rotom-Wash", "Charizard-Mega-Y"], "Earthquake y Rock Slide castigan ambos rivales. Agradece compañeros inmunes a Ground, Wide Guard propio o presión de Fake Out."),
  p("Kingambit", ["Dark", "Steel"], [100, 135, 120, 60, 85, 50], 47.7, ["bulkyOffense", "priority"], ["Supreme Overlord", "Defiant"], ["Black Glasses", "Chople Berry", "Lum Berry"], "Adamant", [32, 32, 0, 0, 0, 2], ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"], ["Sneasler", "Basculegion", "Garchomp", "Incineroar", "Sinistcha"], "Condición de victoria para el cierre de partida. Castiga Intimidate con Defiant o limpia con Sucker Punch cuando el rival está debilitado."),
  p("Basculegion", ["Water", "Ghost"], [120, 112, 65, 80, 75, 78], 42.65, ["priority", "rainOffense"], ["Adaptability", "Swift Swim"], ["Choice Scarf", "Focus Sash", "Mystic Water"], "Jolly", [2, 32, 0, 0, 0, 32], ["Last Respects", "Wave Crash", "Aqua Jet", "Protect"], ["Sneasler", "Kingambit", "Incineroar", "Pelipper", "Garchomp"], "Atacante de limpieza. Si el equipo fuerza intercambios o KOs tempranos, Last Respects transforma el cierre de partida."),
  p("Floette-Eternal", ["Fairy"], [74, 65, 67, 125, 128, 92], 29.65, ["specialOffense", "fairyCheck"], ["Flower Veil"], ["Focus Sash", "Choice Specs", "Life Orb"], "Timid", [2, 0, 0, 32, 0, 32], ["Moonblast", "Protect", "Helping Hand", "Stored Power"], ["Sneasler", "Kingambit", "Basculegion", "Incineroar"], "Da presión especial y resistencia a Dark/Fighting. Funciona bien como apoyo ofensivo junto a sweepers físicos."),
  p("Sinistcha", ["Grass", "Ghost"], [71, 60, 106, 121, 80, 70], 23.97, ["redirection", "support", "specialOffense"], ["Hospitality", "Heatproof"], ["Sitrus Berry", "Mental Herb", "Rocky Helmet"], "Bold", [32, 0, 24, 0, 10, 0], ["Rage Powder", "Matcha Gotcha", "Trick Room", "Protect"], ["Incineroar", "Sneasler", "Kingambit", "Basculegion"], "Aporta redirección, curación al entrar y opción de Trick Room. Excelente para sostener Pokémon ofensivos."),
  p("Aerodactyl", ["Rock", "Flying"], [80, 105, 65, 60, 75, 130], 19.98, ["speedControl", "fastOffense"], ["Rock Head", "Unnerve"], ["Focus Sash", "Covert Cloak"], "Jolly", [2, 32, 0, 0, 0, 32], ["Rock Slide", "Tailwind", "Wide Guard", "Protect"], ["Sneasler", "Garchomp", "Kingambit", "Basculegion"], "Control de velocidad inmediato. Wide Guard ayuda contra Earthquake, Heat Wave, Hyper Voice y Rock Slide."),
  p("Rotom-Wash", ["Electric", "Water"], [50, 65, 107, 105, 107, 86], 16.52, ["bulkyPivot", "burn"], ["Levitate"], ["Sitrus Berry", "Leftovers", "Safety Goggles"], "Modest", [32, 0, 0, 32, 0, 2], ["Hydro Pump", "Thunderbolt", "Will-O-Wisp", "Protect"], ["Garchomp", "Incineroar", "Charizard-Mega-Y", "Kingambit"], "Cubre Water/Electric con Levitate, quema atacantes físicos y acompaña muy bien a Earthquake."),
  p("Charizard-Mega-Y", ["Fire", "Flying"], [78, 104, 78, 159, 115, 100], 15.97, ["weather", "spreadDamage", "specialOffense", "mega"], ["Drought"], ["Charizardite Y"], "Timid", [2, 0, 0, 32, 0, 32], ["Heat Wave", "Solar Beam", "Air Slash", "Protect"], ["Sneasler", "Garchomp", "Incineroar", "Whimsicott", "Venusaur"], "Mega de sol: Heat Wave presiona ambos slots y activa compañeros Chlorophyll o daño Fire amplificado."),
  p("Aegislash", ["Steel", "Ghost"], [60, 50, 140, 50, 140, 60], 11.43, ["bulkyOffense", "wideGuard"], ["Stance Change"], ["Weakness Policy", "Leftovers"], "Quiet", [32, 0, 0, 32, 0, 2], ["Shadow Ball", "Flash Cannon", "Wide Guard", "King's Shield"], ["Incineroar", "Sneasler", "Farigiraf"], "Defiende contra spread moves y amenaza Fairy/Psychic/Ghost. Brilla cuando el rival depende de daño en área."),
  p("Pelipper", ["Water", "Flying"], [60, 50, 100, 95, 70, 65], 11.27, ["weather", "speedControl"], ["Drizzle"], ["Focus Sash", "Damp Rock"], "Modest", [32, 0, 0, 32, 0, 2], ["Muddy Water", "Hurricane", "Tailwind", "Protect"], ["Basculegion", "Archaludon", "Kingambit"], "Setea lluvia, Tailwind y potencia a Swift Swim. También corta el sol de Charizard Y."),
  p("Milotic", ["Water"], [95, 60, 79, 100, 125, 81], 11.05, ["antiIntimidate", "bulkyPivot"], ["Competitive", "Marvel Scale"], ["Leftovers", "Sitrus Berry"], "Modest", [32, 0, 0, 32, 0, 2], ["Muddy Water", "Ice Beam", "Haze", "Protect"], ["Kingambit", "Sneasler", "Incineroar"], "Castiga Intimidate con Competitive y aporta Haze contra boosts. Muy buena en equipos que atraen Parting Shot."),
  p("Farigiraf", ["Normal", "Psychic"], [120, 90, 70, 110, 70, 60], 9.47, ["trickRoom", "priorityBlock"], ["Armor Tail", "Cud Chew"], ["Sitrus Berry", "Mental Herb"], "Quiet", [32, 0, 10, 24, 0, 0], ["Trick Room", "Hyper Voice", "Psychic", "Protect"], ["Kingambit", "Torkoal", "Hatterene"], "Bloquea prioridad y cambia la dimensión de velocidad. Ideal si llevas atacantes lentos como Kingambit o Torkoal."),
  p("Whimsicott", ["Grass", "Fairy"], [60, 67, 85, 77, 75, 116], 8.24, ["speedControl", "support"], ["Prankster"], ["Focus Sash", "Covert Cloak"], "Timid", [2, 0, 0, 32, 0, 32], ["Tailwind", "Moonblast", "Encore", "Protect"], ["Charizard-Mega-Y", "Garchomp", "Sneasler"], "Tailwind de prioridad y Encore para castigar Protect/setup. Es la forma más directa de convertir un Pokémon ofensivo en presión inmediata."),
  p("Gengar-Mega", ["Ghost", "Poison"], [60, 65, 80, 170, 95, 130], 8.13, ["fastOffense", "mega"], ["Shadow Tag"], ["Gengarite"], "Timid", [2, 0, 0, 32, 0, 32], ["Shadow Ball", "Sludge Bomb", "Icy Wind", "Protect"], ["Incineroar", "Sneasler", "Kingambit"], "Atrapa Pokémon clave y fuerza KOs con presión especial. Icy Wind cubre speed control mientras hace daño."),
  p("Archaludon", ["Steel", "Dragon"], [90, 105, 130, 125, 65, 85], 7.81, ["rainOffense", "specialOffense"], ["Stamina", "Sturdy"], ["Assault Vest", "White Herb", "Leftovers"], "Modest", [32, 0, 0, 32, 0, 2], ["Draco Meteor", "Flash Cannon", "Thunderbolt", "Body Press"], ["Pelipper", "Basculegion", "Incineroar"], "Balance de lluvia: aguanta daño físico con Stamina y pega por el lado especial. Muy sólido contra Rock/Fairy si se protege de Ground/Fighting."),
  p("Tyranitar-Mega", ["Rock", "Dark"], [100, 164, 150, 95, 120, 71], 7.15, ["weather", "mega", "bulkyOffense"], ["Sand Stream"], ["Tyranitarite"], "Adamant", [32, 32, 0, 0, 0, 2], ["Rock Slide", "Crunch", "Low Kick", "Protect"], ["Excadrill", "Garchomp", "Farigiraf"], "Arena y presión física enorme. Funciona mejor con speed control o Trick Room flexible."),
  p("Talonflame", ["Fire", "Flying"], [78, 81, 71, 74, 69, 126], 7.06, ["speedControl", "priority"], ["Gale Wings", "Flame Body"], ["Covert Cloak", "Focus Sash"], "Jolly", [2, 32, 0, 0, 0, 32], ["Tailwind", "Brave Bird", "Will-O-Wisp", "Protect"], ["Garchomp", "Kingambit", "Basculegion"], "Tailwind rápido con presión Fire/Flying y Will-O-Wisp. Encaja en equipos que necesitan ritmo sin gastar Mega."),
  p("Maushold", ["Normal"], [74, 75, 70, 65, 75, 111], 7.03, ["support", "redirection"], ["Friend Guard", "Technician"], ["Safety Goggles", "Focus Sash"], "Jolly", [2, 0, 0, 0, 32, 32], ["Follow Me", "Helping Hand", "Feint", "Protect"], ["Sneasler", "Kingambit", "Basculegion"], "Friend Guard y Follow Me protegen sweepers. Feint abre KOs a través de Protect en turnos decisivos."),
  p("Kommo-o", ["Dragon", "Fighting"], [75, 110, 125, 100, 105, 85], 6.55, ["setup", "bulkyOffense"], ["Bulletproof", "Soundproof"], ["Throat Spray", "Leftovers"], "Modest", [32, 0, 0, 32, 0, 2], ["Clanging Scales", "Body Press", "Protect", "Iron Defense"], ["Maushold", "Incineroar", "Whimsicott"], "Puede ganar partidas tras boostearse si recibe redirección o apoyo de Intimidate. Vigila Fairy."),
  p("Corviknight", ["Flying", "Steel"], [98, 87, 105, 53, 85, 67], 6.27, ["tailwind", "bulkyPivot"], ["Mirror Armor", "Pressure"], ["Leftovers", "Sitrus Berry"], "Impish", [32, 0, 24, 0, 10, 0], ["Tailwind", "Brave Bird", "Iron Head", "Roost"], ["Garchomp", "Rotom-Wash", "Kingambit"], "Inmune a Ground y resistente a Fairy/Dragon. Da Tailwind más defensivo que Whimsicott o Talonflame."),
  p("Ninetales-Alola", ["Ice", "Fairy"], [73, 67, 75, 81, 100, 109], 5.76, ["weather", "support"], ["Snow Warning"], ["Light Clay", "Focus Sash"], "Timid", [2, 0, 0, 32, 0, 32], ["Aurora Veil", "Blizzard", "Moonblast", "Protect"], ["Baxcalibur", "Kingambit", "Milotic"], "Aurora Veil cambia cálculos defensivos del equipo entero. Encaja si tu equipo necesita sobrevivir turnos de setup."),
  p("Dragonite-Mega", ["Dragon", "Flying"], [91, 154, 115, 100, 120, 100], 5.56, ["mega", "priority", "bulkyOffense"], ["Multiscale"], ["Dragonitite"], "Adamant", [32, 32, 0, 0, 0, 2], ["Extreme Speed", "Dragon Claw", "Fire Punch", "Protect"], ["Chien-Pao", "Incineroar", "Farigiraf"], "Mega resistente con prioridad potente. Requiere controlar Rock/Ice/Fairy y conservar vida para explotar Multiscale."),
  p("Excadrill", ["Ground", "Steel"], [110, 135, 60, 50, 65, 88], 5.23, ["sandOffense"], ["Sand Rush", "Mold Breaker"], ["Focus Sash", "Life Orb"], "Adamant", [2, 32, 0, 0, 0, 32], ["Earthquake", "Iron Head", "Rock Slide", "Protect"], ["Tyranitar-Mega", "Hippowdon", "Garchomp"], "Atacante de arena. Necesita un setter de arena o Tailwind para no depender de intercambios incómodos."),
  p("Sylveon", ["Fairy"], [95, 65, 65, 110, 130, 60], 3.78, ["spreadDamage", "specialOffense"], ["Pixilate"], ["Throat Spray", "Choice Specs"], "Modest", [32, 0, 10, 24, 0, 0], ["Hyper Voice", "Moonblast", "Protect", "Helping Hand"], ["Incineroar", "Farigiraf", "Garchomp"], "Hyper Voice presiona ambos rivales y castiga Dragons/Darks. Funciona bien bajo Trick Room parcial."),
  p("Venusaur", ["Grass", "Poison"], [80, 82, 83, 100, 100, 80], 3.65, ["sunOffense", "sleep"], ["Chlorophyll", "Overgrow"], ["Focus Sash", "Life Orb"], "Modest", [2, 0, 0, 32, 0, 32], ["Sleep Powder", "Sludge Bomb", "Solar Beam", "Protect"], ["Charizard-Mega-Y", "Torkoal", "Incineroar"], "Abusa de sol con Chlorophyll y amenaza sueño. Ideal con Charizard Y o Torkoal."),
  p("Torkoal", ["Fire"], [70, 85, 140, 85, 70, 20], 2.56, ["weather", "trickRoom", "spreadDamage"], ["Drought"], ["Charcoal", "Sitrus Berry"], "Quiet", [32, 0, 0, 32, 0, 0], ["Eruption", "Heat Wave", "Earth Power", "Protect"], ["Farigiraf", "Hatterene", "Venusaur"], "El plan Trick Room de sol. Si entra sano bajo TR, Eruption obliga al rival a responder inmediatamente."),
  p("Primarina", ["Water", "Fairy"], [80, 74, 74, 126, 116, 60], 2.3, ["specialOffense", "fairyCheck"], ["Torrent", "Liquid Voice"], ["Throat Spray", "Sitrus Berry"], "Modest", [32, 0, 0, 32, 0, 2], ["Hyper Voice", "Moonblast", "Muddy Water", "Protect"], ["Incineroar", "Farigiraf", "Amoonguss"], "Da cobertura Water/Fairy y buen bulk especial. Muy útil contra Dragon/Dark/Fire."),
  p("Hatterene", ["Psychic", "Fairy"], [57, 90, 95, 136, 103, 29], 1.27, ["trickRoom", "specialOffense"], ["Magic Bounce"], ["Life Orb", "Focus Sash"], "Quiet", [32, 0, 0, 32, 2, 0], ["Trick Room", "Expanding Force", "Dazzling Gleam", "Protect"], ["Farigiraf", "Torkoal", "Indeedee-F"], "Trick Room ofensivo con Magic Bounce. Agradece redirección o apoyo de Fake Out para asegurar el primer turno."),
  p("Volcarona", ["Bug", "Fire"], [85, 60, 65, 135, 105, 100], 1.09, ["setup", "specialOffense"], ["Flame Body"], ["Sitrus Berry", "Safety Goggles"], "Timid", [2, 0, 0, 32, 0, 32], ["Heat Wave", "Bug Buzz", "Quiver Dance", "Protect"], ["Maushold", "Incineroar", "Whimsicott"], "Amenaza snowball con Quiver Dance. Necesita respetar Rock Slide y prioridad fuerte."),
  p("Meowscarada", ["Grass", "Dark"], [76, 110, 70, 81, 70, 123], 1.03, ["fastOffense", "pivot"], ["Protean", "Overgrow"], ["Choice Scarf", "Focus Sash"], "Jolly", [2, 32, 0, 0, 0, 32], ["Flower Trick", "Knock Off", "U-turn", "Protect"], ["Sneasler", "Garchomp", "Incineroar"], "Rápido, flexible y molesto con Knock Off/U-turn. Buen Pokémon para equipos que necesitan tempo."),
  p("Glimmora-Mega", ["Rock", "Poison"], [83, 55, 110, 150, 100, 106], 2.23, ["mega", "specialOffense"], ["Toxic Debris"], ["Glimmorite"], "Timid", [2, 0, 0, 32, 0, 32], ["Power Gem", "Sludge Bomb", "Earth Power", "Protect"], ["Incineroar", "Whimsicott", "Garchomp"], "Mega especial con cobertura incómoda. Amenaza Fire/Flying/Fairy, pero necesita cubrir Ground y Steel."),
];

const FALLBACK_FORMATS = [
  { id: "gen9championsvgc2026regmabo3", label: "VGC 2026 Reg M-A (Bo3)", mode: "6 → 4 dobles", battle: "doubles" },
  { id: "gen9championsbssregma", label: "BSS Reg M-A", mode: "6 → 3 singles", battle: "singles" },
  { id: "gen9championsou", label: "Champions OU", mode: "6v6 singles", battle: "singles" },
];

let selectedFormat = initialFormatId();
let selectedLanguage = initialLanguage();
const POKEDEX = buildChampionsDex();

const team = Array.from({ length: MAX_TEAM }, () => emptySlot());
let selectedSlot = 0;
let suggestionLimit = 8;
let threatSearchMode = "auto";
let activeSideTab = "suggestions";
let threatAdvanced = false;
const majorThreatAdvancedIds = new Set();
const majorThreatDetailOpenIds = new Set();
const threatTargetCustomSlots = {};
const threatCounterAdvancedIds = new Set();
const threatCounterDetailOpenIds = new Set();
const threatCounterCustomSlots = {};
const majorThreatCustomSlots = {};
const detailsOpenState = new Map();

const els = {
  pokemonSearch: document.querySelector("#pokemonSearch"),
  pokemonList: document.querySelector("#pokemonList"),
  addPokemon: document.querySelector("#addPokemon"),
  clearTeam: document.querySelector("#clearTeam"),
  randomTeam: document.querySelector("#randomTeam"),
  teamSlots: document.querySelector("#teamSlots"),
  teamStatus: document.querySelector("#teamStatus"),
  teamSummary: document.querySelector("#teamSummary"),
  selectedHint: document.querySelector("#selectedHint"),
  applyPopularSet: document.querySelector("#applyPopularSet"),
  editor: document.querySelector("#editor"),
  suggestions: document.querySelector("#suggestions"),
  suggestionHint: document.querySelector("#suggestionHint"),
  suggestionControls: document.querySelector("#suggestionControls"),
  threatSearch: document.querySelector("#threatSearch"),
  threatResults: document.querySelector("#threatResults"),
  counters: document.querySelector("#counters"),
  showImport: document.querySelector("#showImport"),
  cancelImport: document.querySelector("#cancelImport"),
  importTray: document.querySelector("#importTray"),
  importBox: document.querySelector("#importBox"),
  importTeam: document.querySelector("#importTeam"),
  exportBox: document.querySelector("#exportBox"),
  copyExport: document.querySelector("#copyExport"),
  formatSelect: document.querySelector("#formatSelect"),
  formatButton: document.querySelector("#formatButton"),
  formatMenu: document.querySelector("#formatMenu"),
  formatMode: document.querySelector("#formatMode"),
  languageSelect: document.querySelector("#languageSelect"),
  languageButton: document.querySelector("#languageButton"),
  languageMenu: document.querySelector("#languageMenu"),
  sideTabs: document.querySelectorAll("[data-side-tab]"),
  sidePanels: document.querySelectorAll("[data-tab-panel]"),
};

init();

function init() {
  mountImportModal();
  mountHeaderMenus();
  loadTeam();
  applyStaticTranslations();
  renderFormatSelect();
  renderLanguageSelect();
  renderPokemonList();
  bindEvents();
  renderAll();
}

function mountImportModal() {
  if (els.importTray && els.importTray.parentElement !== document.body) {
    document.body.appendChild(els.importTray);
  }
}

function mountHeaderMenus() {
  [els.formatMenu, els.languageMenu].forEach((menu) => {
    if (menu && menu.parentElement !== document.body) {
      document.body.appendChild(menu);
    }
  });
}

function bindEvents() {
  els.addPokemon.addEventListener("click", () => {
    addPokemonByName(els.pokemonSearch.value.trim());
    els.pokemonSearch.value = "";
  });
  els.pokemonSearch.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addPokemonByName(els.pokemonSearch.value.trim());
      els.pokemonSearch.value = "";
    }
  });
  els.clearTeam.addEventListener("click", () => {
    for (let i = 0; i < MAX_TEAM; i++) team[i] = emptySlot();
    selectedSlot = 0;
    threatSearchMode = "auto";
    els.threatSearch.value = "";
    persist();
    renderAll();
  });
  els.randomTeam?.addEventListener("click", () => {
    generateRandomTeam();
    els.randomTeam.textContent = t("readyButton");
    setTimeout(() => (els.randomTeam.textContent = t("randomButton")), 1100);
  });
  els.applyPopularSet.addEventListener("click", () => {
    const slot = team[selectedSlot];
    if (!slot.pokemon) return;
    applyPopularSet(slot, slot.pokemon);
    persist();
    renderAll();
  });
  els.showImport.addEventListener("click", () => {
    openImportModal();
  });
  els.cancelImport.addEventListener("click", () => {
    closeImportModal();
  });
  els.importTeam.addEventListener("click", () => {
    try {
      importShowdown(els.importBox.value);
      els.importBox.value = "";
      persist();
      renderAll();
    } finally {
      closeImportModal();
    }
  });
  els.importTray?.addEventListener("click", (event) => {
    if (event.target === els.importTray) closeImportModal();
  });
  els.threatSearch.addEventListener("input", () => {
    threatSearchMode = els.threatSearch.value.trim() ? "manual" : "auto";
    renderThreatCounters();
  });
  els.threatSearch.addEventListener("keydown", (event) => {
    if (event.key === "Enter") renderThreatCounters();
  });
  els.copyExport.addEventListener("click", async () => {
    await navigator.clipboard.writeText(els.exportBox.value).catch(() => {
      els.exportBox.select();
      document.execCommand("copy");
    });
    els.copyExport.textContent = t("copiedButton");
    setTimeout(() => (els.copyExport.textContent = t("exportButton")), 1200);
  });
  els.formatSelect?.addEventListener("change", () => updateSelectedFormat(els.formatSelect.value));
  els.formatButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleFormatMenu();
  });
  els.formatMenu?.addEventListener("click", (event) => {
    const option = event.target.closest("[data-format-option]");
    if (!option) return;
    updateSelectedFormat(option.dataset.formatOption);
  });
  els.languageSelect?.addEventListener("change", () => updateSelectedLanguage(els.languageSelect.value));
  els.languageButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleLanguageMenu();
  });
  els.languageMenu?.addEventListener("click", (event) => {
    const option = event.target.closest("[data-language-option]");
    if (!option) return;
    updateSelectedLanguage(option.dataset.languageOption);
  });
  els.sideTabs?.forEach((button) => {
    button.addEventListener("click", () => setActiveSideTab(button.dataset.sideTab));
  });
  document.addEventListener?.("click", (event) => {
    if (!event.target.closest?.(".format-control") && !event.target.closest?.(".format-menu")) {
      closeFormatMenu();
      closeLanguageMenu();
    }
  });
  window.addEventListener?.("resize", () => {
    if (!els.formatMenu?.hidden) positionHeaderMenu(els.formatMenu, els.formatButton);
    if (!els.languageMenu?.hidden) positionHeaderMenu(els.languageMenu, els.languageButton);
  });
  document.addEventListener?.("keydown", (event) => {
    if (event.key === "Escape") {
      closeFormatMenu();
      closeLanguageMenu();
      closeImportModal();
    }
  });
}

function openImportModal() {
  closeFormatMenu();
  closeLanguageMenu();
  mountImportModal();
  els.importTray.hidden = false;
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => els.importBox.focus());
}

function closeImportModal() {
  document.body.classList.remove("modal-open");
  if (!els.importTray) return;
  els.importTray.hidden = true;
}

function setActiveSideTab(tabName) {
  activeSideTab = tabName || "suggestions";
  els.sideTabs?.forEach((button) => {
    const active = button.dataset.sideTab === activeSideTab;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  els.sidePanels?.forEach((panel) => {
    const active = panel.dataset.tabPanel === activeSideTab;
    panel.classList.toggle("active", active);
    panel.hidden = !active;
  });
}

function updateSelectedFormat(formatId) {
  if (!formatId || formatId === selectedFormat) {
    closeFormatMenu();
    return;
  }
  selectedFormat = formatId;
  suggestionLimit = 8;
  closeFormatMenu();
  renderPokemonList();
  renderAll();
}

function updateSelectedLanguage(language) {
  if (!LANGUAGES[language] || language === selectedLanguage) {
    closeLanguageMenu();
    return;
  }
  selectedLanguage = language;
  closeLanguageMenu();
  applyStaticTranslations();
  renderPokemonList();
  renderAll();
}

function toggleFormatMenu() {
  if (!els.formatMenu || !els.formatButton) return;
  closeLanguageMenu();
  const willOpen = els.formatMenu.hidden;
  els.formatMenu.hidden = !willOpen;
  if (willOpen) positionHeaderMenu(els.formatMenu, els.formatButton);
  els.formatButton.setAttribute("aria-expanded", String(willOpen));
}

function closeFormatMenu() {
  if (!els.formatMenu || !els.formatButton) return;
  els.formatMenu.hidden = true;
  clearHeaderMenuPosition(els.formatMenu);
  els.formatButton.setAttribute("aria-expanded", "false");
}

function toggleLanguageMenu() {
  if (!els.languageMenu || !els.languageButton) return;
  closeFormatMenu();
  const willOpen = els.languageMenu.hidden;
  els.languageMenu.hidden = !willOpen;
  if (willOpen) positionHeaderMenu(els.languageMenu, els.languageButton);
  els.languageButton.setAttribute("aria-expanded", String(willOpen));
}

function closeLanguageMenu() {
  if (!els.languageMenu || !els.languageButton) return;
  els.languageMenu.hidden = true;
  clearHeaderMenuPosition(els.languageMenu);
  els.languageButton.setAttribute("aria-expanded", "false");
}

function positionHeaderMenu(menu, button) {
  if (!menu || !button) return;
  const rect = button.getBoundingClientRect();
  const compact = window.matchMedia?.("(max-width: 760px)")?.matches;
  const top = Math.max(8, Math.min(window.innerHeight - 180, rect.bottom + 8));
  menu.classList.add("header-menu-floating");
  menu.style.top = `${top}px`;
  menu.style.maxHeight = `${Math.max(180, window.innerHeight - top - 12)}px`;
  if (compact) {
    menu.style.left = "10px";
    menu.style.right = "10px";
    menu.style.width = "auto";
    return;
  }
  const width = Math.min(Math.max(rect.width, 220), window.innerWidth - 20);
  const left = Math.max(10, Math.min(window.innerWidth - width - 10, rect.right - width));
  menu.style.left = `${left}px`;
  menu.style.right = "auto";
  menu.style.width = `${width}px`;
}

function clearHeaderMenuPosition(menu) {
  if (!menu) return;
  menu.classList.remove("header-menu-floating");
  menu.style.left = "";
  menu.style.right = "";
  menu.style.top = "";
  menu.style.width = "";
  menu.style.maxHeight = "";
}

function initialFormatId() {
  const stats = typeof MUNCH_STATS !== "undefined" ? MUNCH_STATS : null;
  const preferred = stats?.defaultFormat || stats?.format || FALLBACK_FORMATS[0].id;
  return hasMunchFormat(preferred) ? preferred : availableFormats()[0]?.id || FALLBACK_FORMATS[0].id;
}

function initialLanguage() {
  const fallback = "es";
  try {
    const saved = JSON.parse(localStorage.getItem("champions-core-builder") || "{}")?.selectedLanguage;
    if (LANGUAGES[saved]) return saved;
  } catch {
    return fallback;
  }
  return fallback;
}

function availableFormats() {
  const stats = typeof MUNCH_STATS !== "undefined" ? MUNCH_STATS : null;
  const fromData = Object.values(stats?.formats || {}).map((format) => ({
    id: format.format,
    label: format.label || format.format,
    mode: format.mode || fallbackFormatMeta(format.format).mode,
    battle: format.battle || fallbackFormatMeta(format.format).battle,
    rating: format.rating,
    month: format.month,
  }));
  if (fromData.length) return fromData;
  return FALLBACK_FORMATS.map((format) => ({ ...format, rating: stats?.rating, month: stats?.month }));
}

function fallbackFormatMeta(formatId) {
  return FALLBACK_FORMATS.find((format) => format.id === formatId) || FALLBACK_FORMATS[0];
}

function hasMunchFormat(formatId) {
  const stats = typeof MUNCH_STATS !== "undefined" ? MUNCH_STATS : null;
  return Boolean(stats?.formats?.[formatId] || stats?.format === formatId || FALLBACK_FORMATS.some((format) => format.id === formatId));
}

function formatMeta(formatId = selectedFormat) {
  return availableFormats().find((format) => format.id === formatId) || FALLBACK_FORMATS.find((format) => format.id === formatId) || FALLBACK_FORMATS[0];
}

function activeMunchStats() {
  if (typeof MUNCH_STATS === "undefined") return null;
  return MUNCH_STATS.formats?.[selectedFormat] || MUNCH_STATS.formats?.[MUNCH_STATS.defaultFormat] || MUNCH_STATS;
}

function isDoublesFormat() {
  return formatMeta().battle !== "singles";
}

function t(key, params = {}) {
  const template = UI_TEXT[selectedLanguage]?.[key] || UI_TEXT.es[key] || key;
  return Object.entries(params).reduce((text, [name, value]) => text.replaceAll(`{${name}}`, value), template);
}

function applyStaticTranslations() {
  document.documentElement.lang = selectedLanguage;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  const staticText = {
    "#team-title": "teamTitle",
    "#editor-title": "configTitle",
    "#suggestions-title": "suggestionsTitle",
    "#counters-title": "countersTitle",
    "#threat-title": "threatTitle",
  };
  for (const [selector, key] of Object.entries(staticText)) {
    const node = document.querySelector(selector);
    if (node) node.textContent = t(key);
  }
  if (els.pokemonSearch) els.pokemonSearch.placeholder = t("addPokemonPlaceholder");
  if (els.importBox) els.importBox.placeholder = t("importPlaceholder");
  if (els.threatSearch) els.threatSearch.placeholder = t("threatPlaceholder");
  const threatHint = document.querySelector("#threat-title")?.nextElementSibling;
  if (threatHint) threatHint.textContent = t("threatHint");
}

function formatModeText(format) {
  const mode = format?.mode || "";
  if (selectedLanguage === "es") return mode;
  return mode
    .replace("dobles", "doubles")
    .replace("singles", "singles")
    .replace("â†’", "→");
}

function renderFormatSelect() {
  if (!els.formatSelect) return;
  const options = availableFormats();
  if (!options.some((format) => format.id === selectedFormat)) selectedFormat = options[0]?.id || selectedFormat;
  const current = formatMeta();
  els.formatSelect.innerHTML = options
    .map((format) => `<option value="${format.id}" ${format.id === selectedFormat ? "selected" : ""}>${format.label}</option>`)
    .join("");
  els.formatSelect.value = selectedFormat;
  if (els.formatButton) els.formatButton.textContent = current.label;
  if (els.formatMenu) {
    els.formatMenu.innerHTML = options
      .map((format) => `<button class="format-option ${format.id === selectedFormat ? "active" : ""}" type="button" role="option" aria-selected="${format.id === selectedFormat}" data-format-option="${format.id}">${format.label}</button>`)
      .join("");
  }
  if (els.formatMode) els.formatMode.textContent = formatModeText(current);
  if (els.suggestionHint) els.suggestionHint.textContent = isDoublesFormat()
    ? (selectedLanguage === "es" ? "Compañeros, roles y amenazas del meta" : "Partners, roles, and meta threats")
    : (selectedLanguage === "es" ? "Roles, respuestas y amenazas del meta" : "Roles, checks, and meta threats");
}

function renderLanguageSelect() {
  if (!els.languageSelect) return;
  const options = Object.entries(LANGUAGES);
  els.languageSelect.innerHTML = options
    .map(([code, label]) => `<option value="${code}" ${code === selectedLanguage ? "selected" : ""}>${label}</option>`)
    .join("");
  els.languageSelect.value = selectedLanguage;
  if (els.languageButton) els.languageButton.textContent = LANGUAGES[selectedLanguage];
  if (els.languageMenu) {
    els.languageMenu.innerHTML = options
      .map(([code, label]) => `<button class="format-option ${code === selectedLanguage ? "active" : ""}" type="button" role="option" aria-selected="${code === selectedLanguage}" data-language-option="${code}">${label}</button>`)
      .join("");
  }
}

function renderPokemonList() {
  els.pokemonList.innerHTML = sortedPokedex()
    .map((mon) => `<option value="${mon.name}" label="${pokemonOptionLabel(mon)}"></option>`)
    .join("");
}

function sortedPokedex() {
  return [...POKEDEX].sort((a, b) => pokemonUsage(b) - pokemonUsage(a) || a.name.localeCompare(b.name));
}

function isPokemonSelected(mon, exceptIndex = -1) {
  return team.some((slot, index) => index !== exceptIndex && slot.pokemon?.id === mon?.id);
}

function p(name, types, stats, usage, roles, abilities, items, nature, spread, moves, teammates, strategy) {
  return {
    id: toId(name),
    name,
    types,
    baseStats: Object.fromEntries(STAT_KEYS.map((key, index) => [key, stats[index]])),
    usage,
    roles,
    abilities,
    items,
    nature,
    spread: Object.fromEntries(STAT_KEYS.map((key, index) => [key, spread[index]])),
    moves,
    teammates,
    strategy,
    isMega: name.includes("Mega") || items.some((item) => item.endsWith("ite") || item === "Glimmorite" || item === "Dragonitite"),
  };
}

function buildChampionsDex() {
  const hasChampionsData =
    typeof POKEMON !== "undefined" &&
    Array.isArray(POKEMON) &&
    typeof STATS !== "undefined" &&
    Array.isArray(STATS) &&
    typeof MOVES !== "undefined" &&
    Array.isArray(MOVES);

  if (!hasChampionsData) return META_POKEMON;

  const metaByKey = new Map();
  for (const meta of META_POKEMON) {
    for (const key of nameKeys(meta.name)) metaByKey.set(key, meta);
  }

  return POKEMON.map((raw, index) => {
    const stats = STATS[index] || [80, 80, 80, 80, 80, 80];
    const rawMoves = MOVES[index] || [];
    const types = [raw.type1, raw.type2].filter(Boolean);
    const name = canonicalPokemonName(raw);
    const learnset = sanitizeLearnsetForForm(name, unique(rawMoves.map(moveNameFromSlug).filter(Boolean)));
    const meta = nameKeys(name).map((key) => metaByKey.get(key)).find(Boolean);
    const live = munchStatsForName(name);
    const baseStats = Object.fromEntries(STAT_KEYS.map((key, statIndex) => [key, stats[statIndex] || 1]));
    const isMega = name.startsWith("Mega ");
    const roles = unique([...(meta?.roles || []), ...inferRoles(raw, learnset, baseStats, isMega)]);
    const metaMoves = (meta?.moves || []).filter((move) => isLegalMoveForLearnset(learnset, move));
    const moves = legalPopularMoves(live?.moves, learnset, types, roles, baseStats) || (metaMoves.length ? metaMoves : pickDefaultMoves(learnset, types, roles, baseStats));
    const item = normalizeItemName(isMega ? megaStoneName(name, types) : live?.items?.[0] || meta?.items?.[0] || suggestedItem(roles, baseStats));
    const popularAbility = live?.abilities?.find((ability) => (raw.abilities || [raw.ab1, raw.ab2]).filter(Boolean).some((known) => toId(known) === toId(ability))) || "";

    return {
      id: toId(name),
      sourceId: raw.id,
      num: raw.num,
      name,
      rawName: raw.name,
      types,
      baseStats,
      usage: live?.usage ?? meta?.usage ?? 0.05,
      roles,
      abilities: unique(raw.abilities || [raw.ab1, raw.ab2].filter(Boolean)),
      popularAbility,
      moveUsage: live?.moveUsage || {},
      itemUsage: live?.itemUsage || {},
      abilityUsage: live?.abilityUsage || {},
      natureUsage: live?.natureUsage || {},
      spreadOptions: live?.spreads || [],
      items: unique([item, ...(live?.items || []).map(normalizeItemName), ...(meta?.items || []).map(normalizeItemName), suggestedItem(roles, baseStats), "Focus Sash", "Sitrus Berry", "Leftovers"]),
      nature: live?.nature || meta?.nature || suggestedNature(baseStats, roles),
      spread: live?.spread || meta?.spread || suggestedSpread(baseStats, roles),
      moves,
      learnset,
      teammates: live?.teammates || meta?.teammates || [],
      strategy: meta?.strategy || genericStrategy(name, roles),
      isMega,
    };
  }).sort((a, b) => (b.usage || 0) - (a.usage || 0) || a.name.localeCompare(b.name));
}

function sanitizeLearnsetForForm(name, learnset) {
  const blocked = new Set(FORM_MOVE_BLOCKLIST[toId(name)] || []);
  if (!blocked.size) return learnset;
  return learnset.filter((move) => !blocked.has(toId(move)));
}

function canonicalPokemonName(raw) {
  const typeKey = `${raw.name}|${raw.type1}|${raw.type2 || ""}`;
  const abilityIds = new Set((raw.abilities || [raw.ab1, raw.ab2]).map(toId));
  const regionalByType = {
    "Mega Charizard|Fire|Dragon": "Mega Charizard X",
    "Mega Charizard|Fire|Flying": "Mega Charizard Y",
    "Raichu|Electric|Psychic": "Raichu-Alola",
    "Ninetales|Ice|Fairy": "Ninetales-Alola",
    "Arcanine|Fire|Rock": "Arcanine-Hisui",
    "Slowbro|Poison|Psychic": "Slowbro-Galar",
    "Typhlosion|Fire|Ghost": "Typhlosion-Hisui",
    "Slowking|Poison|Psychic": "Slowking-Galar",
    "Samurott|Water|Dark": "Samurott-Hisui",
    "Zoroark|Normal|Ghost": "Zoroark-Hisui",
    "Stunfisk|Ground|Steel": "Stunfisk-Galar",
    "Goodra|Steel|Dragon": "Goodra-Hisui",
    "Avalugg|Ice|Rock": "Avalugg-Hisui",
    "Decidueye|Grass|Fighting": "Decidueye-Hisui",
  };
  if (regionalByType[typeKey]) return regionalByType[typeKey];
  if (raw.name === "Raichu" && abilityIds.has("surgesurfer")) return "Raichu-Alola";
  if (raw.name === "Samurott" && abilityIds.has("sharpness")) return "Samurott-Hisui";
  return raw.name;
}

function munchStatsForName(name) {
  const stats = activeMunchStats();
  if (!stats) return null;
  return nameKeys(name).map((key) => stats.pokemon?.[key]).find(Boolean) || null;
}

function legalPopularMoves(moves, learnset, types, roles, baseStats, options = {}) {
  if (!moves?.length) return null;
  const legal = moves.filter((move) => isLegalMoveForLearnset(learnset, move));
  if (!legal.length) return null;
  const candidates = unique([...legal, ...pickDefaultMoves(learnset, types, roles, baseStats)])
    .filter((move) => isLegalMoveForLearnset(learnset, move));
  const ordered = options.avoidChoiceLock && candidates.some((move) => !isChoiceLockBadMove(move))
    ? [...candidates.filter((move) => !isChoiceLockBadMove(move)), ...candidates.filter((move) => isChoiceLockBadMove(move))]
    : candidates;
  const picked = ordered.slice(0, 4);
  return [...picked, "", "", "", ""].slice(0, 4);
}

function isLegalMoveForLearnset(learnset, move) {
  if (!move) return false;
  const learnsetIds = new Set((learnset || []).map(toId));
  if (!learnsetIds.size) return Boolean(moveInfo(move) || getMoveData(move));
  return learnsetIds.has(toId(move));
}

function nameKeys(name) {
  const keys = new Set([toId(name)]);
  const prefixedRegional = String(name || "").match(/^(Alolan|Galarian|Hisuian|Paldean)\s+(.+)$/i);
  if (prefixedRegional) {
    const region = { alolan: "Alola", galarian: "Galar", hisuian: "Hisui", paldean: "Paldea" }[prefixedRegional[1].toLowerCase()];
    keys.add(toId(`${prefixedRegional[2]}-${region}`));
  }
  const paldeanTauros = String(name || "").match(/^(Combat|Blaze|Aqua)\s+Tauros$/i);
  if (paldeanTauros) {
    keys.add(toId(`Tauros-Paldea-${titleCase(paldeanTauros[1])}`));
    keys.add(toId(`Paldean Tauros ${titleCase(paldeanTauros[1])}`));
  }
  const regional = String(name || "").match(/^(.+?)-(Alola|Galar|Hisui|Paldea)$/i);
  if (regional) {
    const base = regional[1];
    const region = regional[2];
    const adjective = { Alola: "Alolan", Galar: "Galarian", Hisui: "Hisuian", Paldea: "Paldean" }[titleCase(region)] || `${region}n`;
    keys.add(toId(`${region} ${base}`));
    keys.add(toId(`${adjective} ${base}`));
    keys.add(toId(`${base} ${region}`));
    keys.add(toId(`${base} de ${region}`));
  }
  const rotomForm = name.match(/^(Heat|Wash|Frost|Fan|Mow) Rotom$/);
  if (rotomForm) keys.add(toId(`Rotom-${rotomForm[1]}`));
  const showdownRotom = name.match(/^Rotom-(Heat|Wash|Frost|Fan|Mow)$/);
  if (showdownRotom) keys.add(toId(`${showdownRotom[1]} Rotom`));
  if (toId(name) === "floette") keys.add("floetteeternal");
  if (toId(name) === "megafloette") keys.add("megafloetteeternal");
  if (toId(name) === "floetteeternal") keys.add("floette");
  const megaMatch = name.match(/^Mega (.+?)(?: ([XY]))?$/);
  if (megaMatch) {
    const base = megaMatch[1];
    const suffix = megaMatch[2] ? `-${megaMatch[2]}` : "";
    keys.add(toId(`${base}-Mega${suffix}`));
    keys.add(toId(`${base} Mega${suffix}`));
  }
  const legacyMega = name.match(/^(.+)-Mega(?:-([XY]))?$/);
  if (legacyMega) {
    const suffix = legacyMega[2] ? ` ${legacyMega[2]}` : "";
    keys.add(toId(`Mega ${legacyMega[1]}${suffix}`));
  }
  return [...keys];
}

function moveNameFromSlug(slug) {
  if (!slug) return "";
  const id = toId(slug);
  if (TYPE_CHART[titleCase(id)]) return "";
  const known = Object.keys(MOVE_INFO).find((move) => toId(move) === id);
  if (known) return known;
  if (typeof PS_MOVES !== "undefined" && PS_MOVES[id]?.name) return PS_MOVES[id].name;
  return titleCase(String(slug).replace(/-/g, " "));
}

function moveInfo(move) {
  if (MOVE_INFO[move]) return MOVE_INFO[move];
  const data = typeof PS_MOVES !== "undefined" ? PS_MOVES[toId(move)] : null;
  if (!data) return null;
  return {
    type: data.type,
    category: data.category,
    role: inferMoveRole(data.name, data),
  };
}

function inferMoveRole(name, data = {}) {
  const id = toId(name);
  if (["fakeout"].includes(id)) return "fakeOut";
  if (["tailwind", "trickroom", "icywind", "electroweb", "thunderwave", "glare"].includes(id)) return "speedControl";
  if (["followme", "ragepowder"].includes(id)) return "redirection";
  if (["protect", "detect", "spikyshield", "kingsshield"].includes(id)) return "protect";
  if (["wideguard", "quickguard", "helpinghand", "coaching"].includes(id)) return "support";
  if (["suckerpunch", "aquajet", "iceshard", "machpunch", "bulletpunch", "shadowsneak", "extremespeed", "jetpunch"].includes(id)) return "priority";
  if (data.target === "allAdjacentFoes" || data.target === "allAdjacent" || data.target === "all") return "spread";
  return "";
}

function inferRoles(raw, learnset, baseStats, isMega) {
  const roles = [];
  const abilityText = (raw.abilities || [raw.ab1, raw.ab2]).filter(Boolean).join(" ");
  const moveIds = new Set(learnset.map(toId));
  if (isMega) roles.push("mega");
  if (baseStats.spe >= 105) roles.push("fastOffense");
  if (baseStats.hp + baseStats.def + baseStats.spd >= 300) roles.push("bulkyOffense");
  if (baseStats.atk >= baseStats.spa + 20 && baseStats.atk >= 100) roles.push("physicalOffense");
  if (baseStats.spa >= baseStats.atk + 20 && baseStats.spa >= 100) roles.push("specialOffense");
  if (abilityText.includes("Intimidate")) roles.push("intimidate");
  if (["Drought", "Drizzle", "Sand Stream", "Snow Warning"].some((ability) => abilityText.includes(ability))) roles.push("weather");
  if (moveIds.has("fakeout")) roles.push("fakeOut");
  if (["tailwind", "trickroom", "icywind", "electroweb", "thunderwave"].some((move) => moveIds.has(move))) roles.push("speedControl");
  if (["followme", "ragepowder"].some((move) => moveIds.has(move))) roles.push("redirection");
  if (["suckerpunch", "aquajet", "iceshard", "machpunch", "bulletpunch", "shadowsneak", "extremespeed", "jetpunch"].some((move) => moveIds.has(move))) roles.push("priority");
  if (["heatwave", "earthquake", "rockslide", "muddywater", "hypervoice", "dazzlinggleam", "blizzard", "expandingforce"].some((move) => moveIds.has(move))) roles.push("spreadDamage");
  return roles;
}

function pickDefaultMoves(learnset, types, roles, baseStats) {
  const moveIds = new Set(learnset.map(toId));
  const chosen = [];
  const add = (ids) => {
    for (const id of ids) {
      const move = learnset.find((candidate) => toId(candidate) === id);
      if (move && !chosen.includes(move)) chosen.push(move);
      if (chosen.length >= 4) return;
    }
  };
  if (roles.includes("fakeOut")) add(["fakeout"]);
  if (roles.includes("speedControl")) add(["tailwind", "trickroom", "icywind", "electroweb", "thunderwave"]);
  if (roles.includes("redirection")) add(["followme", "ragepowder"]);
  const stab = learnset
    .filter((move) => types.includes(moveInfo(move)?.type))
    .sort((a, b) => moveScore(b, baseStats) - moveScore(a, baseStats));
  add(stab.map(toId));
  add(["protect", "wideguard", "helpinghand", "suckerpunch", "aquajet", "earthquake", "rockslide", "heatwave", "dazzlinggleam"]);
  if (!chosen.some((move) => moveIds.has(toId(move)))) add(learnset.map(toId));
  if (!chosen.some((move) => toId(move) === "protect") && moveIds.has("protect") && chosen.length < 4) chosen.push("Protect");
  return [...chosen, "Protect", "", "", ""].filter(Boolean).slice(0, 4);
}

function moveScore(move, baseStats) {
  const info = moveInfo(move) || {};
  const data = typeof PS_MOVES !== "undefined" ? PS_MOVES[toId(move)] : null;
  const power = data?.basePower || 0;
  const roleBonus = inferMoveRole(move, data || {}) ? 20 : 0;
  const sideBonus = info.category === "Physical" && baseStats.atk >= baseStats.spa ? 15 : info.category === "Special" && baseStats.spa >= baseStats.atk ? 15 : 0;
  return power + roleBonus + sideBonus;
}

function suggestedItem(roles, baseStats) {
  if (roles.includes("fastOffense") && Math.max(baseStats.atk, baseStats.spa) >= 110) return "Focus Sash";
  if (roles.includes("bulkyOffense")) return "Sitrus Berry";
  return "Leftovers";
}

function suggestedNature(baseStats, roles) {
  if (roles.includes("speedControl") && baseStats.spe < 60) return "Relaxed";
  if (baseStats.spe >= 95 && baseStats.atk >= baseStats.spa) return "Jolly";
  if (baseStats.spe >= 95 && baseStats.spa > baseStats.atk) return "Timid";
  if (baseStats.atk >= baseStats.spa) return "Adamant";
  return "Modest";
}

function suggestedSpread(baseStats, roles) {
  if (roles.includes("speedControl") && baseStats.spe < 60) return { hp: 32, atk: 0, def: 16, spa: 16, spd: 2, spe: 0 };
  if (roles.includes("bulkyOffense") && baseStats.spe < 80) return { hp: 32, atk: baseStats.atk >= baseStats.spa ? 24 : 0, def: 5, spa: baseStats.spa > baseStats.atk ? 24 : 0, spd: 5, spe: 0 };
  return { hp: 2, atk: baseStats.atk >= baseStats.spa ? 32 : 0, def: 0, spa: baseStats.spa > baseStats.atk ? 32 : 0, spd: 0, spe: 32 };
}

function megaStoneName(name, types = []) {
  const match = name.match(/^Mega (.+?)(?: ([XY]))?$/);
  if (!match) return "";
  const inferredSuffix = !match[2] && match[1] === "Charizard" ? (types.includes("Dragon") ? "X" : "Y") : match[2];
  const target = `${match[1]}-Mega${inferredSuffix ? `-${inferredSuffix}` : ""}`;
  const item = Object.values(itemDatabase()).find((candidate) => Object.values(candidate.megaStone || {}).includes(target));
  if (item) return item.name;
  const base = match[1].replace(/[^A-Za-z]/g, "");
  if (inferredSuffix) return `${base}ite ${inferredSuffix}`;
  const overrides = { Dragonite: "Dragoninite", Glimmora: "Glimmorite" };
  return overrides[base] || `${base}ite`;
}

function genericStrategy(name, roles) {
  const labels = roles.slice(0, 3).map(roleLabel).join(", ") || "Pokémon flexible";
  return `${name} entra como ${labels}. Ajusta objeto, EVs y cuatro movimientos según el rol que necesite tu equipo.`;
}

function emptySlot() {
  return {
    pokemon: null,
    item: "",
    ability: "",
    nature: "Hardy",
    sp: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
    moves: ["", "", "", ""],
  };
}

function addPokemonByName(name) {
  const mon = findPokemon(name);
  if (!mon) return;
  const duplicateIndex = team.findIndex((slot) => slot.pokemon?.id === mon.id);
  if (duplicateIndex !== -1) {
    selectedSlot = duplicateIndex;
    if (threatSearchMode === "auto") syncThreatSearchFromSelected();
    renderAll();
    return;
  }
  const index = team.findIndex((slot) => !slot.pokemon);
  if (index === -1) return;
  selectedSlot = index;
  team[index] = emptySlot();
  team[index].pokemon = mon;
  applyPopularSet(team[index], mon);
  if (threatSearchMode === "auto") syncThreatSearchFromSelected();
  persist();
  renderAll();
}

function generateRandomTeam() {
  const archetype = randomTeamArchetype();
  for (let i = 0; i < MAX_TEAM; i++) team[i] = emptySlot();

  const seed = chooseRandomTeamMember(archetype, { seed: true });
  if (seed) addRandomTeamMember(seed);

  if (!team.some((slot) => slot.pokemon?.isMega) && Math.random() < 0.66) {
    const mega = chooseRandomTeamMember(archetype, { preferMega: true });
    if (mega) addRandomTeamMember(mega);
  }

  let guard = 0;
  while (team.filter((slot) => slot.pokemon).length < MAX_TEAM && guard < 40) {
    const next = chooseRandomTeamMember(archetype);
    if (next) addRandomTeamMember(next);
    guard += 1;
  }

  const fallbackPool = randomEligiblePool();
  while (team.filter((slot) => slot.pokemon).length < MAX_TEAM && fallbackPool.length) {
    addRandomTeamMember(fallbackPool.splice(Math.floor(Math.random() * fallbackPool.length), 1)[0]);
  }

  selectedSlot = team.findIndex((slot) => slot.pokemon);
  if (selectedSlot < 0) selectedSlot = 0;
  threatSearchMode = "auto";
  syncThreatSearchFromSelected();
  persist();
  renderAll();
}

function addRandomTeamMember(mon) {
  const index = team.findIndex((slot) => !slot.pokemon);
  if (index === -1 || !mon) return;
  const slot = emptySlot();
  slot.pokemon = mon;
  applyRandomizedSet(slot, mon, usedRandomItems());
  team[index] = slot;
}

function usedRandomItems() {
  return new Set(team
    .filter((slot) => slot.pokemon && slot.item)
    .map((slot) => normalizeItemName(slot.item)));
}

function randomTeamArchetype() {
  const weather = randomChoice(["Rain", "Sun", "Sand", "Snow"]);
  const options = isDoublesFormat()
    ? [
        { id: "balance" },
        { id: "fastPressure" },
        { id: "weather", weather },
        { id: "trickRoom" },
        { id: "bulky" },
        { id: "chaos" },
      ]
    : [
        { id: "balance" },
        { id: "fastPressure" },
        { id: "weather", weather },
        { id: "bulky" },
        { id: "setup" },
        { id: "chaos" },
      ];
  return randomChoice(options);
}

function chooseRandomTeamMember(archetype, options = {}) {
  let pool = randomEligiblePool();
  if (options.seed) {
    const seeded = seedPoolForArchetype(pool, archetype);
    if (seeded.length >= 2) pool = seeded;
  }
  if (options.preferMega) {
    const megas = pool.filter((mon) => mon.isMega);
    if (megas.length) pool = megas;
  }
  return weightedRandomPick(pool, (mon) => randomTeamCandidateScore(mon, archetype, options));
}

function randomEligiblePool() {
  const selectedIds = new Set(team.filter((slot) => slot.pokemon).map((slot) => slot.pokemon.id));
  const hasMega = team.some((slot) => slot.pokemon?.isMega);
  return POKEDEX.filter((mon) =>
    !selectedIds.has(mon.id) &&
    (!hasMega || !mon.isMega) &&
    mon.types?.length &&
    (mon.moves?.length || mon.learnset?.length)
  );
}

function seedPoolForArchetype(pool, archetype) {
  if (archetype.id === "weather") {
    return pool.filter((mon) => candidateWeather(analyzeCandidate(mon)).includes(archetype.weather));
  }
  if (archetype.id === "trickRoom") {
    return pool.filter((mon) => analyzeCandidate(mon).setMoveIds.has("trickroom") || analyzeCandidate(mon).moveIds.has("trickroom"));
  }
  if (archetype.id === "fastPressure") {
    return pool.filter((mon) => {
      const candidate = analyzeCandidate(mon);
      return candidate.fast || candidate.setRoles.has("speedControl") || candidate.setRoles.has("priority");
    });
  }
  if (archetype.id === "setup") {
    return pool.filter((mon) => analyzeCandidate(mon).setRoles.has("setup") || analyzeCandidate(mon).roles.has("setup"));
  }
  if (archetype.id === "bulky") {
    return pool.filter((mon) => mon.baseStats.hp + mon.baseStats.def + mon.baseStats.spd >= 285);
  }
  return pool;
}

function randomTeamCandidateScore(mon, archetype, options = {}) {
  const candidate = analyzeCandidate(mon);
  const filled = team.filter((slot) => slot.pokemon);
  const selected = filled.map((slot) => slot.pokemon);
  const usage = pokemonUsage(mon);
  let score = 18 + Math.random() * 18;

  score += Math.min(13, Math.sqrt(Math.max(usage, 0)) * 3.2);
  if (usage > 38 && !options.seed) score -= (usage - 38) * 0.18;
  if (usage < 0.03) score -= 3;
  if (options.preferMega && mon.isMega) score += 18;
  if (mon.isMega && !selected.some((item) => item.isMega)) score += selected.length <= 1 ? 5 : 2;

  const typeCounts = countTeamTypes(selected);
  for (const type of mon.types) {
    const count = typeCounts[type] || 0;
    score -= count * 9;
    if (count >= 2) score -= 18;
  }

  const currentMoveTypes = new Set(filled.flatMap((slot) => slot.moves.map((move) => moveInfo(move)?.type).filter(Boolean)));
  for (const type of candidate.attackTypes) {
    if (!currentMoveTypes.has(type)) score += 3.5;
  }

  for (const danger of defensiveProfile(selected).slice(0, 4)) {
    const multiplier = battleMultiplier(danger.type, mon);
    if (multiplier < 1) score += 5 + danger.score * 2.5;
    if (multiplier > 1) score -= 4 + danger.score * 2;
  }

  const roles = roleCounts();
  const doubles = isDoublesFormat();
  if (!roles.speedControl && candidate.setRoles.has("speedControl")) score += doubles ? 13 : 8;
  if (doubles && !roles.fakeOut && candidate.setRoles.has("fakeOut")) score += 7;
  if (!roles.priority && candidate.setRoles.has("priority")) score += 5;
  if (!roles.intimidate && candidate.setRoles.has("intimidate")) score += 8;
  if (doubles && !roles.redirection && candidate.setRoles.has("redirection")) score += 6;
  if (doubles && !roles.spreadDamage && candidate.setRoles.has("spreadDamage")) score += 5;

  const hasPhysical = filled.some((slot) => analyzeCandidate(slot.pokemon).physicalDamage);
  const hasSpecial = filled.some((slot) => analyzeCandidate(slot.pokemon).specialDamage);
  if (!hasPhysical && candidate.physicalDamage) score += 9;
  if (!hasSpecial && candidate.specialDamage) score += 9;

  for (const coreMon of selected) {
    if (coreMon.teammates.includes(mon.name) || mon.teammates.includes(coreMon.name)) score += 6;
  }

  score += archetypeBonus(candidate, mon, archetype, filled);
  return score;
}

function archetypeBonus(candidate, mon, archetype, filled) {
  const weather = currentWeather(filled);
  if (archetype.id === "weather") {
    let bonus = 0;
    if (candidate.weather.includes(archetype.weather)) bonus += 24;
    if (weather.includes(archetype.weather) && weatherAbuser(candidate, archetype.weather)) bonus += 14;
    if (!weather.length && weatherAbuser(candidate, archetype.weather)) bonus += 5;
    return bonus;
  }
  if (archetype.id === "trickRoom") {
    const strong = Math.max(mon.baseStats.atk, mon.baseStats.spa) >= 105;
    let bonus = 0;
    if (candidate.setMoveIds.has("trickroom") || candidate.moveIds.has("trickroom")) bonus += 20;
    if (mon.baseStats.spe <= 70 && strong) bonus += 13;
    if (mon.baseStats.spe >= 115) bonus -= 7;
    return bonus;
  }
  if (archetype.id === "fastPressure") {
    return (candidate.fast ? 9 : 0) + (candidate.setRoles.has("speedControl") ? 10 : 0) + (candidate.setRoles.has("priority") ? 6 : 0);
  }
  if (archetype.id === "bulky") {
    return (candidate.bulkScore >= 300 ? 10 : 0) + (candidate.setRoles.has("intimidate") ? 7 : 0) + (candidate.setRoles.has("burn") ? 5 : 0);
  }
  if (archetype.id === "setup") {
    return (candidate.setRoles.has("setup") || candidate.roles.has("setup") ? 13 : 0) + (candidate.fast || candidate.setRoles.has("priority") ? 4 : 0);
  }
  if (archetype.id === "chaos") {
    return Math.random() * 16 - pokemonUsage(mon) * 0.08;
  }
  return (candidate.bulkScore >= 275 ? 4 : 0) + (candidate.fast ? 4 : 0);
}

function weatherAbuser(candidate, weather) {
  if (weather === "Rain") return candidate.abilities.has("Swift Swim") || candidate.attackTypes.includes("Water") || candidate.moveIds.has("hurricane") || candidate.moveIds.has("thunder");
  if (weather === "Sun") return candidate.abilities.has("Chlorophyll") || candidate.attackTypes.includes("Fire") || candidate.moveIds.has("solarbeam");
  if (weather === "Sand") return candidate.abilities.has("Sand Rush") || candidate.abilities.has("Sand Force") || candidate.types.has("Rock") || candidate.types.has("Ground") || candidate.types.has("Steel");
  if (weather === "Snow") return candidate.abilities.has("Slush Rush") || candidate.types.has("Ice") || candidate.moveIds.has("auroraveil") || candidate.moveIds.has("blizzard");
  return false;
}

function applyRandomizedSet(slot, mon, usedItems = new Set()) {
  applyPopularSet(slot, mon);

  if (!mon.isMega) {
    const allItems = itemOptionsFor(mon, slot);
    const picked = weightedRandomPick(allItems.slice(0, 10), (item) => Math.max(2, itemUsageFor(mon, item)) + Math.random() * 5) || slot.item;
    slot.item = nonDuplicateRandomItem(mon, picked, allItems, usedItems) || picked || slot.item;
  }

  const abilities = abilityOptionsFor(mon, slot);
  slot.ability = weightedRandomPick(abilities, (ability) => Math.max(1, abilityUsageFor(mon, ability)) + Math.random() * 4) || slot.ability;

  const spreads = spreadOptionsFor(mon);
  if (spreads.length && Math.random() < 0.82) {
    const option = weightedRandomPick(spreads, (spread) => Math.max(2, spread.usage || 0) + Math.random() * 4);
    if (option) {
      slot.nature = option.nature;
      slot.sp = { ...option.spread };
    }
  } else {
    const natures = natureOptionsFor(mon, slot).slice(0, 8);
    slot.nature = weightedRandomPick(natures, (nature) => Math.max(1, natureUsageFor(mon, nature)) + Math.random() * 3) || slot.nature;
  }

  slot.moves = randomMovesFor(mon, slot);
}

function nonDuplicateRandomItem(mon, picked, options, usedItems) {
  const normalizedPicked = normalizeItemName(picked);
  if (!normalizedPicked || !usedItems.has(normalizedPicked)) return normalizedPicked;
  const fallback = [...options]
    .map(normalizeItemName)
    .filter((item) => item && !usedItems.has(item))
    .sort((a, b) => itemUsageFor(mon, b) - itemUsageFor(mon, a) || a.localeCompare(b))[0];
  return fallback || normalizedPicked;
}

function randomMovesFor(mon, slot) {
  const rawPool = moveOptionsFor(mon, slot)
    .map((move) => ({ move, info: moveInfo(move), data: getMoveData(move) || {}, usage: moveUsageFor(mon, move) }))
    .filter((entry) => entry.info);
  const nonChoiceLocked = rawPool.filter((entry) => !isChoiceLockBadMove(entry.move));
  const pool = isChoiceItem(slot.item) && nonChoiceLocked.length >= 4 ? nonChoiceLocked : rawPool;
  const selected = [];
  const poolCopy = [...pool];

  while (selected.length < 4 && poolCopy.length) {
    const picked = weightedRandomPick(poolCopy, (entry) => randomMoveWeight(entry, mon, selected));
    if (!picked) break;
    selected.push(picked.move);
    poolCopy.splice(poolCopy.indexOf(picked), 1);
  }

  const attacks = selected.filter((move) => moveInfo(move)?.category !== "Status");
  if (attacks.length < 2) {
    const attackOptions = pool
      .filter((entry) => entry.info.category !== "Status" && relevantAttackMove(entry, mon) && !selected.includes(entry.move))
      .sort((a, b) => randomMoveWeight(b, mon, selected) - randomMoveWeight(a, mon, selected));
    while (selected.length && selected.filter((move) => moveInfo(move)?.category !== "Status").length < 2 && attackOptions.length) {
      const replaceIndex = selected.findIndex((move) => moveInfo(move)?.category === "Status");
      selected[replaceIndex >= 0 ? replaceIndex : selected.length - 1] = attackOptions.shift().move;
    }
  }

  const protectUsage = moveUsageFor(mon, "Protect");
  const wantsProtect = !isChoiceItem(slot.item) && (isDoublesFormat() ? protectUsage >= 35 && Math.random() < 0.72 : protectUsage >= 50 && Math.random() < 0.38);
  if (wantsProtect && pool.some((entry) => toId(entry.move) === "protect") && !selected.some((move) => toId(move) === "protect")) {
    selected[selected.length - 1] = "Protect";
  }

  return [...unique(selected).slice(0, 4), "", "", "", ""].slice(0, 4);
}

function randomMoveWeight(entry, mon, selectedMoves) {
  const info = entry.info;
  let weight = 3 + Math.sqrt(Math.max(entry.usage, 0)) * 8 + Math.random() * 4;
  if (info.category !== "Status") {
    weight += moveScore(entry.move, mon.baseStats) * 0.06;
    if (!relevantAttackMove(entry, mon)) weight *= 0.35;
    const matchingSide = (info.category === "Physical" && mon.baseStats.atk >= mon.baseStats.spa) || (info.category === "Special" && mon.baseStats.spa >= mon.baseStats.atk);
    if (matchingSide) weight += 4;
  } else {
    const statusCount = selectedMoves.filter((move) => moveInfo(move)?.category === "Status").length;
    weight += entry.usage > 15 ? 5 : 0;
    if (statusCount >= 2) weight *= 0.45;
  }
  const role = info.role || inferMoveRole(entry.move, entry.data || {});
  if (role === "protect" && isDoublesFormat()) weight += 6;
  if (role === "speedControl") weight += 4;
  if (role === "priority") weight += 3;
  if (selectedMoves.some((move) => moveInfo(move)?.role === role && role && !["priority", "spread"].includes(role))) weight *= 0.65;
  return Math.max(0.1, weight);
}

function weightedRandomPick(items, weightFor) {
  if (!items.length) return null;
  const scored = items
    .map((item) => ({ item, score: Number(weightFor(item) || 0) }))
    .filter((entry) => Number.isFinite(entry.score) && entry.score > -80)
    .sort((a, b) => b.score - a.score);
  if (!scored.length) return randomChoice(items);
  const shortlist = scored.slice(0, Math.min(scored.length, 12 + Math.floor(Math.random() * 22)));
  const min = Math.min(...shortlist.map((entry) => entry.score));
  const weighted = shortlist.map((entry) => ({ item: entry.item, weight: Math.max(0.25, entry.score - min + 2) }));
  let roll = Math.random() * weighted.reduce((sum, entry) => sum + entry.weight, 0);
  for (const entry of weighted) {
    roll -= entry.weight;
    if (roll <= 0) return entry.item;
  }
  return weighted[weighted.length - 1].item;
}

function randomChoice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function findPokemon(name) {
  const id = toId(name);
  return POKEDEX.find((mon) => mon.id === id || nameKeys(mon.name).includes(id));
}

function applyPopularSet(slot, mon) {
  const live = munchStatsForName(mon.name);
  slot.item = defaultItemFor(mon);
  slot.ability = live?.abilities?.find((ability) => mon.abilities?.some((known) => toId(known) === toId(ability))) || mon.popularAbility || mon.abilities[0] || "";
  slot.nature = live?.nature || mon.nature || "Hardy";
  slot.sp = { ...(live?.spread || mon.spread) };
  const moves = legalPopularMoves(live?.moves, mon.learnset || [], mon.types || [], mon.roles || [], mon.baseStats || {}, { avoidChoiceLock: isChoiceItem(slot.item) }) || mon.moves || [];
  slot.moves = [...moves.slice(0, 4), "", "", "", ""].slice(0, 4);
}

function renderAll() {
  sanitizeTeam();
  if (threatSearchMode === "auto") syncThreatSearchFromSelected();
  applyStaticTranslations();
  renderFormatSelect();
  renderLanguageSelect();
  renderTeam();
  renderEditor();
  renderSuggestions();
  renderThreatCounters();
  renderCounters();
  setActiveSideTab(activeSideTab);
  els.exportBox.value = exportShowdown();
  wireDetailsPersistence();
  wireSpriteFallbacks();
  persist();
}

function syncThreatSearchFromSelected() {
  if (threatSearchMode !== "auto") return;
  const mon = team[selectedSlot]?.pokemon;
  els.threatSearch.value = mon ? mon.name : "";
}

function sanitizeTeam() {
  const seen = new Set();
  for (const slot of team) {
    if (!slot.pokemon) continue;
    if (seen.has(slot.pokemon.id)) {
      Object.assign(slot, emptySlot());
      continue;
    }
    seen.add(slot.pokemon.id);
    if (!isChampionsItem(slot.item, slot.pokemon)) slot.item = defaultItemFor(slot.pokemon);
    slot.moves = sanitizeMovesForSlot(slot);
  }
}

function renderTeam() {
  const filled = team.filter((slot) => slot.pokemon).length;
  els.teamStatus.textContent = t("pokemonCount", { count: filled });
  els.teamSlots.innerHTML = team
    .map((slot, index) => {
      if (!slot.pokemon) {
        return `<button class="slot-card empty ${index === selectedSlot ? "active" : ""}" type="button" data-slot="${index}">
          <span class="sprite-frame">${index + 1}</span>
          <span><span class="slot-name">${t("slotLabel")}</span><span class="slot-meta">${t("slotHint")}</span></span>
          <span></span>
        </button>`;
      }
      return `<button class="slot-card ${index === selectedSlot ? "active" : ""}" type="button" data-slot="${index}">
        <span class="sprite-frame"><img src="${pokemonSprite(slot.pokemon)}" alt="${slot.pokemon.name}" data-fallback="${plannerSprite(slot.pokemon)}"></span>
        <span>
          <span class="slot-name">${slot.pokemon.name}</span>
          <span class="slot-meta">${slot.item ? `${itemIconHtml(slot.item)}${itemUiName(slot.item)}` : t("noItem")} · ${natureUiName(slot.nature)}</span>
          ${baseStatsHtml(slot.pokemon)}
        </span>
        <span class="remove-slot" data-remove="${index}" aria-label="${selectedLanguage === "es" ? "Quitar" : "Remove"}">x</span>
      </button>`;
    })
    .join("");

  els.teamSlots.querySelectorAll("[data-slot]").forEach((button) => {
    button.addEventListener("click", (event) => {
      const remove = event.target.closest("[data-remove]");
      if (remove) {
        team[Number(remove.dataset.remove)] = emptySlot();
      } else {
        selectedSlot = Number(button.dataset.slot);
        syncThreatSearchFromSelected();
      }
      persist();
      renderAll();
    });
  });

  const roles = roleCounts();
  const weaknesses = topWeaknesses();
  const megaCount = team.filter(isMegaSlot).length;
  const utilityMetric = isDoublesFormat()
    ? metric(moveUiName("Fake Out"), formatUsers(moveRoleUserCount(["fakeOut"])))
    : metric(selectedLanguage === "es" ? "Prioridad" : "Priority", formatUsers(moveRoleUserCount(["priority"])));
  els.teamSummary.innerHTML = [
    metric(selectedLanguage === "es" ? "Megas usadas" : "Used Megas", `${megaCount}/1`, megaCount > 1 ? "warning" : ""),
    utilityMetric,
    metric(selectedLanguage === "es" ? "Control de velocidad" : "Speed control", speedControlSummary()),
    metric(selectedLanguage === "es" ? "Tipos repetidos" : "Repeated types", repeatedTypeSummary()),
  ].join("") + typePlannerHtml();
}

function metric(label, value, className = "") {
  return `<div class="metric ${className}"><span class="mini">${label}</span><strong>${value}</strong></div>`;
}

function statBarHtml(key, value) {
  const percent = clamp(Math.round(((value - 45) / 170) * 100), 8, 100);
  const tone = statTone(percent);
  return `<div class="stat-box">
    <div class="stat-head"><span>${STAT_LABELS[key]}</span><strong>${value}</strong></div>
    <div class="stat-bar"><i class="${tone}" style="width: ${percent}%"></i></div>
  </div>`;
}

function statTone(percent) {
  if (percent >= 82) return "stat-elite";
  if (percent >= 66) return "stat-high";
  if (percent >= 50) return "stat-mid";
  if (percent >= 34) return "stat-low";
  return "stat-very-low";
}

function statPlannerHtml(mon, slot, stats) {
  return `<div class="stat-planner">
    <div class="stat-planner-head">
      <span>Stat</span><span>Base</span><span></span><span>${selectedLanguage === "es" ? "Puntos" : "Points"}</span><span>${selectedLanguage === "es" ? "Final" : "Final"}</span>
    </div>
    ${STAT_KEYS.map((key) => statPlannerRowHtml(mon, slot, stats, key)).join("")}
  </div>`;
}

function statPlannerRowHtml(mon, slot, stats, key) {
  const base = mon.baseStats[key];
  const percent = clamp(Math.round((base / 180) * 100), 8, 100);
  const tone = statTone(percent);
  const nature = NATURES[slot.nature] || {};
  const arrow = nature.up === key
    ? `<span class="nature-arrow up" title="${selectedLanguage === "es" ? "La naturaleza sube esta stat" : "Nature boosts this stat"}">▲</span>`
    : nature.down === key
      ? `<span class="nature-arrow down" title="${selectedLanguage === "es" ? "La naturaleza baja esta stat" : "Nature lowers this stat"}">▼</span>`
      : `<span class="nature-arrow"></span>`;
  return `<div class="stat-planner-row">
    <span class="stat-label">${STAT_LABELS[key]}</span>
    <strong class="base-number">${base}</strong>
    <span class="stat-bar base-line"><i class="${tone}" style="width: ${percent}%"></i></span>
    <span class="points-cell"><input data-sp="${key}" type="number" inputmode="numeric" min="0" max="${MAX_SP_STAT}" value="${slot.sp[key] || 0}">${arrow}</span>
    <strong class="final-stat">${stats[key]}</strong>
  </div>`;
}

function moveOptionsFor(mon, slot) {
  const legalMoves = (mon.learnset || []).length ? mon.learnset : mon.moves || [];
  const currentMoves = (slot.moves || []).filter((move) => isLegalMoveForMon(mon, move));
  return unique([...legalMoves, ...currentMoves])
    .filter((move) => isLegalMoveForMon(mon, move))
    .sort((a, b) => {
      const usageDiff = moveUsageFor(mon, b) - moveUsageFor(mon, a);
      return usageDiff || a.localeCompare(b);
    });
}

function sanitizeMovesForSlot(slot) {
  const mon = slot.pokemon;
  const legal = new Map(moveOptionsFor(mon, { ...slot, moves: [] }).map((move) => [toId(move), move]));
  const clean = (slot.moves || []).map((move) => legal.get(toId(move)) || "").slice(0, 4);
  return [...clean, "", "", "", ""].slice(0, 4);
}

function isLegalMoveForMon(mon, move) {
  if (!mon || !move) return false;
  return isLegalMoveForLearnset(mon.learnset || [], move);
}

function localizedName(category, name) {
  if (!name || selectedLanguage === "en") return name || "";
  const override = LOCALE_OVERRIDES?.[selectedLanguage]?.[category]?.[toId(name)];
  if (override) return override;
  const official = typeof POKEARK_LOCALES !== "undefined"
    ? POKEARK_LOCALES?.[selectedLanguage]?.[category]?.[toId(name)]
    : "";
  return official || name;
}

function moveUiName(move) {
  return localizedName("moves", move);
}

function itemUiName(item) {
  return localizedName("items", displayItemName(item));
}

function abilityUiName(ability) {
  return localizedName("abilities", ability);
}

function natureUiName(nature) {
  return localizedName("natures", nature);
}

function localizeInlineTerms(text) {
  const value = String(text || "");
  if (selectedLanguage === "en") return value;
  const terms = [
    ["Fake Out", moveUiName("Fake Out")],
    ["Trailblaze", moveUiName("Trailblaze")],
    ["Protect", moveUiName("Protect")],
    ["Tailwind", moveUiName("Tailwind")],
    ["Trick Room", moveUiName("Trick Room")],
    ["Icy Wind", moveUiName("Icy Wind")],
    ["Wide Guard", moveUiName("Wide Guard")],
    ["Follow Me", moveUiName("Follow Me")],
    ["Rage Powder", moveUiName("Rage Powder")],
    ["Helping Hand", moveUiName("Helping Hand")],
    ["Will-O-Wisp", moveUiName("Will-O-Wisp")],
    ["Parting Shot", moveUiName("Parting Shot")],
    ["U-turn", moveUiName("U-turn")],
    ["Earthquake", moveUiName("Earthquake")],
    ["Rock Slide", moveUiName("Rock Slide")],
    ["Heat Wave", moveUiName("Heat Wave")],
    ["Hyper Voice", moveUiName("Hyper Voice")],
    ["Hurricane", moveUiName("Hurricane")],
    ["Surf", moveUiName("Surf")],
    ["Thunder Wave", moveUiName("Thunder Wave")],
    ["Electroweb", moveUiName("Electroweb")],
    ["Taunt", moveUiName("Taunt")],
    ["Haze", moveUiName("Haze")],
    ["Encore", moveUiName("Encore")],
    ["Disable", moveUiName("Disable")],
    ["Intimidate", abilityUiName("Intimidate")],
    ["Chlorophyll", abilityUiName("Chlorophyll")],
    ["Swift Swim", abilityUiName("Swift Swim")],
    ["Unburden", abilityUiName("Unburden")],
    ["Defiant", abilityUiName("Defiant")],
    ["Competitive", abilityUiName("Competitive")],
    ["Levitate", abilityUiName("Levitate")],
    ["Prankster", abilityUiName("Prankster")],
    ["Drought", abilityUiName("Drought")],
    ["Drizzle", abilityUiName("Drizzle")],
    ["Sand Rush", abilityUiName("Sand Rush")],
    ["Gale Wings", abilityUiName("Gale Wings")],
    ["Magic Bounce", abilityUiName("Magic Bounce")],
    ["Friend Guard", abilityUiName("Friend Guard")],
    ["Shadow Tag", abilityUiName("Shadow Tag")],
    ["Stamina", abilityUiName("Stamina")],
    ["Scrappy", abilityUiName("Scrappy")],
    ["Tough Claws", abilityUiName("Tough Claws")],
  ].filter(([source, replacement]) => replacement && replacement !== source);
  return terms.reduce((output, [source, replacement]) => {
    const pattern = new RegExp(`\\b${escapeRegExp(source)}\\b`, "g");
    return output.replace(pattern, replacement);
  }, value);
}

function escapeRegExp(text) {
  return String(text).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function moveUsageFor(mon, move) {
  const usage = munchStatsForName(mon?.name)?.moveUsage || mon?.moveUsage || {};
  const key = Object.keys(usage).find((candidate) => toId(candidate) === toId(move));
  return key ? Number(usage[key] || 0) : 0;
}

function moveOptionLabel(mon, move) {
  const usage = moveUsageFor(mon, move);
  const name = moveUiName(move);
  return usage > 0 ? `${name} · ${formatUsagePercent(usage)}%` : name;
}

function moveTypeClass(move) {
  const type = moveInfo(move)?.type;
  return type ? `move-type-${type}` : "move-type-empty";
}

function moveOptionStyle(move) {
  const type = moveInfo(move)?.type;
  const color = type ? TYPE_COLORS[type] : "#e8f2f5";
  return `style="background:#10161a;color:${color};"`;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
  }[char]));
}

function pickerBaseText(value) {
  return String(value || "").split("·")[0].trim();
}

function comboOptionButtonsHtml(options, labelFor, aliasesFor = () => [], optionClassFor = () => "") {
  return options
    .map((option, index) => {
      const label = labelFor(option);
      const search = [label, ...(aliasesFor(option) || [])].filter(Boolean).join(" ");
      return `<button class="combo-option ${optionClassFor(option)}" type="button" data-combo-option="${index}" data-combo-search="${escapeHtml(search)}">${escapeHtml(label)}</button>`;
    })
    .join("");
}

function comboInputHtml({ listId, value, options, labelFor, aliasesFor = () => [], optionClassFor = () => "", field = "", moveIndex = null, className = "", placeholder = "" }) {
  const dataAttr = field ? `data-field="${field}"` : `data-move="${moveIndex}"`;
  const emptyText = selectedLanguage === "es" ? "Sin resultados" : "No results";
  return `<div class="combo-picker" data-combo-list="${escapeHtml(listId)}">
    <input class="combo-input ${className}" ${dataAttr} value="${escapeHtml(value)}" placeholder="${escapeHtml(placeholder)}" autocomplete="off" spellcheck="false" role="combobox" aria-expanded="false">
    <button class="combo-toggle" type="button" aria-label="${selectedLanguage === "es" ? "Abrir opciones" : "Open options"}"></button>
    <div class="combo-menu" hidden>
      ${comboOptionButtonsHtml(options, labelFor, aliasesFor, optionClassFor)}
      <span class="combo-empty" hidden>${emptyText}</span>
    </div>
  </div>`;
}

function resolvePickerChoice(rawValue, options, labelFor, aliasesFor = () => []) {
  const value = String(rawValue || "").trim();
  if (!value) return "";
  const baseId = toId(pickerBaseText(value));
  const fullId = toId(value);
  const labelsFor = (option) => [labelFor(option), ...(aliasesFor(option) || [])].filter(Boolean);
  const exact = options.find((option) => {
    const labels = labelsFor(option);
    return labels.some((label) => {
      const text = String(label || "").trim();
      return text === value || toId(text) === fullId || toId(pickerBaseText(text)) === baseId;
    });
  });
  if (exact) return exact;
  return options.find((option) => {
    const labels = labelsFor(option);
    return labels.some((label) => {
      const text = String(label || "").trim();
      const labelBaseId = toId(pickerBaseText(text));
      const labelFullId = toId(text);
      return labelBaseId.startsWith(baseId) || labelBaseId.includes(baseId) || labelFullId.includes(fullId);
    });
  }) || null;
}

function wireComboPicker(input) {
  const picker = input.closest(".combo-picker");
  if (!picker) return;
  const menu = picker.querySelector(".combo-menu");
  const toggle = picker.querySelector(".combo-toggle");
  const options = [...picker.querySelectorAll("[data-combo-option]")];
  const close = () => {
    menu.hidden = true;
    input.setAttribute("aria-expanded", "false");
  };
  const open = (showAll = true) => {
    filterComboOptions(input, showAll);
    menu.hidden = false;
    input.setAttribute("aria-expanded", "true");
  };
  const choose = (button) => {
    input.value = button.textContent.trim();
    close();
    input.dispatchEvent(new Event("change", { bubbles: true }));
  };

  input.addEventListener("focus", () => {
    input.select();
    open(true);
  });
  input.addEventListener("click", () => open(true));
  input.addEventListener("input", () => open(false));
  input.addEventListener("blur", () => {
    window.setTimeout(close, 120);
  });
  input.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      open(true);
      const first = options.find((button) => !button.hidden);
      if (first) first.focus();
    }
    if (event.key === "Enter" && !menu.hidden) {
      const first = options.find((button) => !button.hidden);
      if (first) {
        event.preventDefault();
        choose(first);
      }
    }
    if (event.key === "Escape") close();
  });
  toggle?.addEventListener("mousedown", (event) => event.preventDefault());
  toggle?.addEventListener("click", () => {
    input.focus();
    open(true);
  });
  menu.addEventListener("mousedown", (event) => event.preventDefault());
  options.forEach((button) => {
    button.addEventListener("click", () => choose(button));
    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter") choose(button);
      if (event.key === "Escape") {
        close();
        input.focus();
      }
    });
  });
}

function filterComboOptions(input, showAll = false) {
  const picker = input.closest(".combo-picker");
  if (!picker) return;
  const query = showAll ? "" : toId(input.value);
  const options = [...picker.querySelectorAll("[data-combo-option]")];
  let visible = 0;
  for (const option of options) {
    const matches = !query || toId(option.dataset.comboSearch).includes(query);
    option.hidden = !matches;
    if (matches) visible += 1;
  }
  const empty = picker.querySelector(".combo-empty");
  if (empty) empty.hidden = visible > 0;
}

function usageFromMap(map, name) {
  const key = Object.keys(map || {}).find((candidate) => toId(candidate) === toId(name));
  return key ? Number(map[key] || 0) : 0;
}

function pokemonUsage(mon) {
  return Number(munchStatsForName(mon?.name)?.usage ?? mon?.usage ?? 0);
}

function itemUsageFor(mon, item) {
  return usageFromMap(munchStatsForName(mon?.name)?.itemUsage || mon?.itemUsage, displayItemName(item));
}

function isChoiceItem(item) {
  return CHOICE_ITEM_IDS.has(toId(displayItemName(item) || item));
}

function isChoiceLockBadMove(move) {
  return CHOICE_LOCK_BAD_MOVE_IDS.has(toId(move));
}

function abilityUsageFor(mon, ability) {
  return usageFromMap(munchStatsForName(mon?.name)?.abilityUsage || mon?.abilityUsage, ability);
}

function natureUsageFor(mon, nature) {
  return usageFromMap(munchStatsForName(mon?.name)?.natureUsage || mon?.natureUsage, nature);
}

function pokemonOptionLabel(mon) {
  const usage = pokemonUsage(mon);
  return usage > 0 ? `${mon.name} · ${selectedLanguage === "es" ? "uso" : "usage"} ${formatUsagePercent(usage)}%` : mon.name;
}

function itemOptionLabel(mon, item) {
  const usage = itemUsageFor(mon, item);
  const name = itemUiName(item);
  return usage > 0 ? `${name} · ${formatUsagePercent(usage)}%` : name;
}

function abilityOptionLabel(mon, ability) {
  const usage = abilityUsageFor(mon, ability);
  const name = abilityUiName(ability);
  return usage > 0 ? `${name} · ${formatUsagePercent(usage)}%` : name;
}

function natureOptionLabel(mon, nature) {
  const usage = natureUsageFor(mon, nature);
  const name = natureUiName(nature);
  const modifier = natureModifierLabel(nature);
  const usageText = usage > 0 ? ` · ${formatUsagePercent(usage)}%` : "";
  return `${name} · ${modifier}${usageText}`;
}

function natureModifierLabel(nature) {
  const modifier = NATURES[nature] || {};
  if (!modifier.up || !modifier.down) return selectedLanguage === "es" ? "neutral" : "neutral";
  return `+${STAT_LABELS[modifier.up]} / -${STAT_LABELS[modifier.down]}`;
}

function formatUsagePercent(value) {
  return Number(value || 0).toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}

function sortByUsageThenName(values, usageFor) {
  return [...values].sort((a, b) => usageFor(b) - usageFor(a) || String(a).localeCompare(String(b)));
}

function itemOptionsFor(mon, slot) {
  const available = availableItemsFor(mon);
  if (mon?.isMega) return available;
  const live = munchStatsForName(mon?.name);
  const options = unique([...(live?.items || []), ...(mon.items || []), slot.item, ...available].map(normalizeItemName))
    .filter((item) => available.includes(item));
  return sortByUsageThenName(options, (item) => itemUsageFor(mon, item));
}

function abilityOptionsFor(mon, slot) {
  const options = unique([...(mon.abilities || []), slot.ability]).filter(Boolean);
  return sortByUsageThenName(options, (ability) => abilityUsageFor(mon, ability));
}

function natureOptionsFor(mon, slot) {
  const options = unique([slot.nature, mon.nature, ...Object.keys(mon.natureUsage || {}), ...Object.keys(NATURES)])
    .filter((nature) => NATURES[nature]);
  return sortByUsageThenName(options, (nature) => natureUsageFor(mon, nature));
}

function spreadOptionsFor(mon) {
  return (munchStatsForName(mon?.name)?.spreads || mon?.spreadOptions || [])
    .filter((option) => option?.nature && option.spread)
    .slice(0, 5);
}

function spreadText(spread) {
  return STAT_KEYS
    .filter((key) => Number(spread?.[key] || 0) > 0)
    .map((key) => `${spread[key]} ${STAT_LABELS[key]}`)
    .join(" / ") || (selectedLanguage === "es" ? "0 puntos" : "0 points");
}

function finalStatsText(mon, nature, spread) {
  const stats = calculateStats(mon, { nature, sp: spread });
  return STAT_KEYS.map((key) => `${STAT_LABELS[key]} ${stats[key]}`).join(" · ");
}

function spreadRecommendationsHtml(mon) {
  const options = spreadOptionsFor(mon);
  if (!options.length) return "";
  return `<details class="spread-recs" data-detail-key="spread-recs:${mon.id}"${detailsOpenAttr(`spread-recs:${mon.id}`)}>
    <summary class="spread-recs-head">
      <strong>${selectedLanguage === "es" ? "Repartos más usados" : "Most used spreads"}</strong>
    </summary>
    <div class="spread-recs-list">
      ${options.map((option, index) => `<button class="spread-rec" type="button" data-apply-spread="${index}">
        <span class="spread-title">${natureUiName(option.nature)} · ${spreadText(option.spread)}${option.usage > 0 ? ` · ${formatUsagePercent(option.usage)}%` : ""}</span>
        <span class="spread-finals">${finalStatsText(mon, option.nature, option.spread)}</span>
      </button>`).join("")}
    </div>
  </details>`;
}

function editorStrategy(mon, slot, stats) {
  const candidate = analyzeCandidate(mon);
  const moves = popularMoveDetails(mon);
  const currentMoveDetails = slot.moves.filter(Boolean).map((move) => ({ move, info: moveInfo(move), usage: moveUsageFor(mon, move) })).filter((entry) => entry.info);
  const selectedMoves = currentMoveDetails.length ? currentMoveDetails : moves;
  const pressureMoves = selectedMoves.filter((entry) => entry.info.category !== "Status" && relevantAttackMove({ ...entry, data: getMoveData(entry.move) || {} }, mon)).slice(0, 2);
  const physicalCount = selectedMoves.filter((entry) => entry.info.category === "Physical").length;
  const specialCount = selectedMoves.filter((entry) => entry.info.category === "Special").length;
  const offense = physicalCount > specialCount
    ? (selectedLanguage === "es" ? "físico" : "physical")
    : specialCount > physicalCount
      ? (selectedLanguage === "es" ? "especial" : "special")
      : mon.baseStats.atk >= mon.baseStats.spa + 15
        ? (selectedLanguage === "es" ? "físico" : "physical")
        : mon.baseStats.spa >= mon.baseStats.atk + 15
          ? (selectedLanguage === "es" ? "especial" : "special")
          : (selectedLanguage === "es" ? "mixto" : "mixed");
  const speedText = stats.spe >= 170
    ? (selectedLanguage === "es" ? "muy rápido" : "very fast")
    : stats.spe >= 130
      ? (selectedLanguage === "es" ? "rápido si controla bien los turnos" : "fast when it controls the turn order")
      : stats.spe >= 95
        ? (selectedLanguage === "es" ? "de velocidad media" : "medium-speed")
        : (selectedLanguage === "es" ? "lento" : "slow");
  const pressureText = pressureMoves.length ? `${selectedLanguage === "es" ? " con" : " with"} ${formatMoveList(pressureMoves)}` : "";
  const summary = selectedLanguage === "es"
    ? `${mon.name} es un perfil ${offense}, ${speedText}, que busca crear presión${pressureText}.`
    : `${mon.name} is a ${offense}, ${speedText} profile that tries to create pressure${pressureText}.`;
  const lines = [];

  const plan = editorPlanLine(mon, slot, stats, candidate, selectedMoves);
  if (plan) lines.push({ label: selectedLanguage === "es" ? "Plan" : "Plan", text: plan });

  const support = editorTeamSupportLine(mon, slot, stats, candidate);
  if (support) lines.push({ label: selectedLanguage === "es" ? "Con tu equipo" : "With your team", text: support });

  const caution = editorCautionLine(mon, slot, stats, candidate);
  if (caution) lines.push({ label: selectedLanguage === "es" ? "Cuidado" : "Watch out", text: caution, tone: "warn" });

  return { summary, lines };
}

function editorPlanLine(mon, slot, stats, candidate, selectedMoves) {
  const doubles = isDoublesFormat();
  if (selectedMoves.some((entry) => toId(entry.move) === "trickroom")) return doubles
    ? (selectedLanguage === "es" ? "su prioridad es colocar Trick Room y jugar después con Protect, Fake Out o redirección para no regalar el turno" : "its priority is setting Trick Room, then using Protect, Fake Out, or redirection support to avoid giving the turn away")
    : (selectedLanguage === "es" ? "su prioridad es colocar Trick Room y aprovechar los turnos siguientes para forzar KOs o recuperar momentum" : "its priority is setting Trick Room, then using the following turns to force KOs or regain momentum");
  if (selectedMoves.some((entry) => toId(entry.move) === "tailwind")) return doubles
    ? (selectedLanguage === "es" ? "puede abrir Tailwind y convertir a sus compañeros de velocidad media en amenazas inmediatas" : "can open with Tailwind and turn medium-speed partners into immediate threats")
    : (selectedLanguage === "es" ? "puede usar Tailwind para ganar ventaja de velocidad durante varios turnos y cerrar la partida" : "can use Tailwind to gain speed control for several turns and close the game");
  const spread = selectedMoves.find((entry) => entry.info.role === "spread" && entry.info.category !== "Status");
  if (spread) return doubles
    ? (selectedLanguage === "es" ? `presiona a los dos rivales con ${formatMoveWithUsage(spread)}, así que obliga a respetar Protect y castiga cambios dobles` : `pressures both foes with ${formatMoveWithUsage(spread)}, forcing respect for Protect and punishing double switches`)
    : (selectedLanguage === "es" ? `${formatMoveWithUsage(spread)} le da presión directa en singles; úsalo para forzar cambios o rematar tras daño previo` : `${formatMoveWithUsage(spread)} gives it direct singles pressure; use it to force switches or finish after prior damage`);
  const setup = selectedMoves.find((entry) => ["setup"].includes(entry.info.role));
  if (setup) return selectedLanguage === "es" ? `si consigue turno libre para ${formatMoveWithUsage(setup)}, pasa de Pokémon de presión a win condition` : `if it gets a free turn for ${formatMoveWithUsage(setup)}, it can shift from pressure Pokémon into win condition`;
  if (doubles && candidate.setRoles.has("fakeOut")) return selectedLanguage === "es" ? "Fake Out le permite comprar el primer turno y decidir si presionar, pivotar o proteger a su compañero" : "Fake Out buys the first turn so it can pressure, pivot, or protect its partner";
  if (stats.spe >= 150) return doubles
    ? (selectedLanguage === "es" ? "aprovéchalo para actuar antes, rematar KOs y obligar al rival a respetar Protect" : "use its speed to move first, finish KOs, and force the opponent to respect Protect")
    : (selectedLanguage === "es" ? "aprovéchalo como revenge killer o breaker rápido para forzar cambios" : "use it as a revenge killer or fast breaker to force switches");
  return selectedLanguage === "es" ? "busca entrar tras un KO, un cambio seguro o un turno protegido para empezar a intercambiar daño favorable" : "try to bring it in after a KO, a safe switch, or a protected turn so it can start trading favorable damage";
}

function editorTeamSupportLine(mon, slot, stats, candidate) {
  const others = team.filter((other) => other !== slot && other.pokemon);
  const findMove = (ids) => others.find((other) => other.moves.some((move) => ids.includes(toId(move))));
  const tailwind = findMove(["tailwind"]);
  const trickRoom = findMove(["trickroom"]);
  const fakeOut = findMove(["fakeout"]);
  const redirection = findMove(["followme", "ragepowder"]);
  const speedDrop = findMove(["icywind", "electroweb", "thunderwave", "glare"]);
  const intimidate = others.find((other) => (other.ability || other.pokemon.popularAbility || other.pokemon.abilities?.[0]) === "Intimidate");
  const strongAttack = Math.max(mon.baseStats.atk, mon.baseStats.spa) >= 115;

  if (tailwind && (stats.spe < 170 || strongAttack)) return selectedLanguage === "es" ? `usa el Tailwind de ${tailwind.pokemon.name} para compensar su velocidad y convertir sus golpes fuertes en presión real` : `use ${tailwind.pokemon.name}'s Tailwind to patch its Speed and turn strong attacks into real pressure`;
  if (stats.spe < 95 && trickRoom) return selectedLanguage === "es" ? `bajo el Trick Room de ${trickRoom.pokemon.name} puede moverse antes que amenazas rápidas` : `under ${trickRoom.pokemon.name}'s Trick Room it can move before faster threats`;
  if (stats.spe < 135 && speedDrop) return selectedLanguage === "es" ? `${speedDrop.pokemon.name} puede bajar velocidad rival para que ${mon.name} no dependa de ganar speed ties` : `${speedDrop.pokemon.name} can lower opposing Speed so ${mon.name} does not rely on winning speed ties`;
  if (isDoublesFormat() && (strongAttack || candidate.setRoles.has("setup")) && fakeOut) return selectedLanguage === "es" ? `Fake Out de ${fakeOut.pokemon.name} le compra el turno que necesita para atacar sin comer doble target` : `${fakeOut.pokemon.name}'s Fake Out buys the turn it needs to attack without taking a double target`;
  if (isDoublesFormat() && (candidate.bulkScore < 250 || candidate.setRoles.has("setup")) && redirection) return selectedLanguage === "es" ? `la redirección de ${redirection.pokemon.name} le da entradas más limpias y turnos de setup` : `${redirection.pokemon.name}'s redirection gives it cleaner entries and setup turns`;
  if (candidate.bulkScore < 260 && intimidate) return selectedLanguage === "es" ? `Intimidate de ${intimidate.pokemon.name} reduce daño físico y facilita que aguante el intercambio` : `${intimidate.pokemon.name}'s Intimidate softens physical damage and helps it survive trades`;
  return isDoublesFormat()
    ? (selectedLanguage === "es" ? "no necesita una pareja fija, pero mejora mucho si lo colocas con Protects y cambios que eviten doble target" : "it does not need a fixed partner, but improves a lot when placed with Protects and switches that avoid double targets")
    : (selectedLanguage === "es" ? "no necesita una pareja fija; busca colocarlo con cambios seguros, daño previo o después de forzar un KO" : "it does not need a fixed partner; bring it in through safe switches, prior damage, or after forcing a KO");
}

function editorCautionLine(mon, slot, stats, candidate) {
  if (isChoiceItem(slot.item) && slot.moves.some(isChoiceLockBadMove)) {
    const item = itemUiName(slot.item);
    return selectedLanguage === "es"
      ? `lleva ${item}: si usas ${moveUiName("Protect")} quedará bloqueado y tendrá que cambiar para atacar después`
      : `it is holding ${item}: if it uses Protect, it gets locked and must switch before attacking again`;
  }
  const weaknesses = Object.keys(TYPE_CHART).filter((type) => battleMultiplier(type, { ...mon, ability: slot.ability || mon.popularAbility || mon.abilities?.[0] }) > 1);
  const shared = weaknesses.filter((type) => team.filter((other) => other.pokemon && other !== slot && battleMultiplier(type, { ...other.pokemon, ability: other.ability || other.pokemon.popularAbility || other.pokemon.abilities?.[0] }) > 1).length);
  if (shared.length) return selectedLanguage === "es" ? `comparte debilidad a ${formatTypeList(shared.slice(0, 2))}; no lo juntes gratis con otro slot que reciba el mismo golpe` : `shares a weakness to ${formatTypeList(shared.slice(0, 2))}; avoid pairing it freely with another slot that takes the same hit`;
  if (candidate.bulkScore < 230) return isDoublesFormat()
    ? (selectedLanguage === "es" ? "es frágil: evita exponerlo a doble target si no tienes Fake Out, redirección o Protect activo" : "it is frail: avoid exposing it to double targets without Fake Out, redirection, or active Protect")
    : (selectedLanguage === "es" ? "es frágil: evita meterlo directamente ante ataques fuertes; mejor tras KO, pivot o cambio forzado" : "it is frail: avoid hard-switching it into strong attacks; it is better after a KO, pivot, or forced switch");
  if (stats.spe < 100 && !team.some((other) => other.moves.some((move) => ["tailwind", "trickroom", "icywind", "thunderwave", "electroweb"].includes(toId(move))))) return selectedLanguage === "es" ? "sin control de velocidad puede quedarse vendido ante amenazas rápidas" : "without speed control it can be exposed into faster threats";
  const protectUsage = moveUsageFor(mon, "Protect");
  if (isDoublesFormat() && !slot.moves.some((move) => toId(move) === "protect") && protectUsage >= 40) return selectedLanguage === "es" ? "MunchStats lo juega mucho con Protect; quitarlo puede complicar el posicionamiento en dobles" : "MunchStats uses it with Protect very often; removing it can make doubles positioning harder";
  return "";
}

function speedControlSummary() {
  const filled = team.filter((slot) => slot.pokemon);
  if (!filled.length) return selectedLanguage === "es" ? "Sin Pokémon" : "No Pokémon";
  const labels = [];
  const hasMove = (ids) => filled.some((slot) => slot.moves.some((move) => ids.includes(toId(move))));
  const priorityCount = priorityMoveCount();
  if (hasMove(["tailwind"])) labels.push(moveUiName("Tailwind"));
  if (hasMove(["trickroom"])) labels.push(moveUiName("Trick Room"));
  if (hasMove(["icywind", "electroweb"])) labels.push(selectedLanguage === "es" ? "Bajadas de Velocidad" : "Speed drops");
  if (hasMove(["thunderwave", "glare"])) labels.push(selectedLanguage === "es" ? "Parálisis" : "Paralysis");
  if (priorityCount) labels.push(`${selectedLanguage === "es" ? "prioridad" : "priority"} x${priorityCount}`);
  if (!labels.length) return selectedLanguage === "es" ? `Falta ${moveUiName("Tailwind")}/${moveUiName("Trick Room")}` : "Needs Tailwind/TR";
  return labels.slice(0, 3).join(" · ");
}

function priorityMoveCount() {
  return team.reduce((count, slot) => {
    if (!slot.pokemon) return count;
    return count + slot.moves.filter((move) => {
      const role = moveInfo(move)?.role;
      return role === "priority" || role === "fakeOut";
    }).length;
  }, 0);
}

function renderEditor() {
  const slot = team[selectedSlot];
  els.applyPopularSet.disabled = !slot.pokemon;
  if (!slot.pokemon) {
    els.selectedHint.textContent = `Slot ${selectedSlot + 1}`;
    els.editor.innerHTML = `<div class="editor-empty">${t("editorEmpty")}</div>`;
    return;
  }

  const mon = slot.pokemon;
  els.selectedHint.textContent = selectedLanguage === "es"
    ? `${mon.name} · stats finales a nivel 50`
    : `${mon.name} · final stats at level 50`;
  const allMoves = moveOptionsFor(mon, slot);
  const itemOptions = itemOptionsFor(mon, slot);
  const abilityOptions = abilityOptionsFor(mon, slot);
  const natureOptions = natureOptionsFor(mon, slot);
  const pokemonOptions = sortedPokedex().filter((pmon) => pmon.id === mon.id || !isPokemonSelected(pmon, selectedSlot));
  const pokemonListId = `config-pokemon-options-${selectedSlot}`;
  const natureListId = `config-nature-options-${selectedSlot}`;
  const itemListId = `config-item-options-${selectedSlot}`;
  const abilityListId = `config-ability-options-${selectedSlot}`;
  const spTotal = totalSp(slot);
  const stats = calculateStats(mon, slot);
  const strategy = editorStrategy(mon, slot, stats);
  els.editor.innerHTML = `
    <div class="form-grid">
      <div>
        <label>Pokémon</label>
        <div class="select-with-art">
          <span class="select-art pokemon-art"><img src="${pokemonSprite(mon)}" alt="" data-fallback="${plannerSprite(mon)}"></span>
          ${comboInputHtml({
            listId: pokemonListId,
            value: pokemonOptionLabel(mon),
            options: pokemonOptions,
            labelFor: (pmon) => pokemonOptionLabel(pmon),
            aliasesFor: (pmon) => [pmon.name],
            field: "pokemon",
            className: "has-art",
            placeholder: selectedLanguage === "es" ? "Buscar Pokémon..." : "Search Pokémon...",
          })}
        </div>
      </div>
      <div>
        <label>${selectedLanguage === "es" ? "Naturaleza" : "Nature"}</label>
        ${comboInputHtml({
          listId: natureListId,
          value: natureOptionLabel(mon, slot.nature),
          options: natureOptions,
          labelFor: (nature) => natureOptionLabel(mon, nature),
          aliasesFor: (nature) => [nature, natureUiName(nature), natureModifierLabel(nature)],
          field: "nature",
          placeholder: selectedLanguage === "es" ? "Buscar naturaleza..." : "Search nature...",
        })}
      </div>
      <div>
        <label>${selectedLanguage === "es" ? "Objeto" : "Item"}</label>
        <div class="select-with-art">
          <span class="select-art item-art">${slot.item ? itemIconHtml(slot.item) : ""}</span>
          ${comboInputHtml({
            listId: itemListId,
            value: slot.item ? itemOptionLabel(mon, slot.item) : "",
            options: itemOptions,
            labelFor: (item) => itemOptionLabel(mon, item),
            aliasesFor: (item) => [item, displayItemName(item), itemUiName(item)],
            field: "item",
            className: "has-art",
            placeholder: selectedLanguage === "es" ? "Buscar objeto..." : "Search item...",
          })}
        </div>
      </div>
      <div>
        <label>${selectedLanguage === "es" ? "Habilidad" : "Ability"}</label>
        ${comboInputHtml({
          listId: abilityListId,
          value: slot.ability ? abilityOptionLabel(mon, slot.ability) : "",
          options: abilityOptions,
          labelFor: (ability) => abilityOptionLabel(mon, ability),
          aliasesFor: (ability) => [ability, abilityUiName(ability)],
          field: "ability",
          placeholder: selectedLanguage === "es" ? "Buscar habilidad..." : "Search ability...",
        })}
      </div>
      <div class="wide">
        <label class="inline-label">${selectedLanguage === "es" ? "Movimientos" : "Moves"} <span class="move-order-note">${selectedLanguage === "es" ? "(ordenados por uso)" : "(sorted by usage)"}</span></label>
        <div class="moves-grid">
          ${slot.moves.map((move, index) => comboInputHtml({
            listId: `config-move-options-${selectedSlot}-${index}`,
            value: move ? moveOptionLabel(mon, move) : "",
            options: allMoves,
            labelFor: (candidate) => moveOptionLabel(mon, candidate),
            aliasesFor: (candidate) => [candidate, moveUiName(candidate)],
            optionClassFor: (candidate) => moveTypeClass(candidate),
            moveIndex: index,
            className: `move-select ${moveTypeClass(move)}`,
            placeholder: t("movePlaceholder", { n: index + 1 }),
          })).join("")}
        </div>
        ${spreadRecommendationsHtml(mon)}
      </div>
      <div class="wide">
        <label>${selectedLanguage === "es" ? "Reparto de stats Champions" : "Champions stat spread"}</label>
        ${statPlannerHtml(mon, slot, stats)}
        <div class="sp-total ${spTotal > MAX_SP ? "bad" : ""}">${selectedLanguage === "es" ? "Restantes" : "Remaining"}: ${MAX_SP - spTotal} · ${selectedLanguage === "es" ? "usados" : "used"} ${spTotal}/${MAX_SP} · ${selectedLanguage === "es" ? "máximo" : "max"} ${MAX_SP_STAT} ${selectedLanguage === "es" ? "por stat" : "per stat"}</div>
      </div>
    </div>
    ${collapsibleDetailsHtml(
      selectedLanguage === "es" ? "Estrategia sugerida" : "Suggested strategy",
      `<p>${localizeInlineTerms(strategy.summary)}</p>${insightListHtml(strategy.lines)}<div class="tag-row">${mon.roles.map((role) => `<span class="role-pill">${roleLabel(role)}</span>`).join("")}</div>`,
      "strategy-box editor-strategy-details",
      { detailKey: `editor-strategy:${mon.id}` }
    )}
  `;

  const fieldResolvers = {
    pokemon: {
      options: pokemonOptions,
      labelFor: (pmon) => pokemonOptionLabel(pmon),
      aliasesFor: (pmon) => [pmon.name],
    },
    nature: {
      options: natureOptions,
      labelFor: (nature) => natureOptionLabel(mon, nature),
      aliasesFor: (nature) => [nature, natureUiName(nature)],
    },
    item: {
      options: itemOptions,
      labelFor: (item) => itemOptionLabel(mon, item),
      aliasesFor: (item) => [item, displayItemName(item), itemUiName(item)],
    },
    ability: {
      options: abilityOptions,
      labelFor: (ability) => abilityOptionLabel(mon, ability),
      aliasesFor: (ability) => [ability, abilityUiName(ability)],
    },
  };

  els.editor.querySelectorAll("[data-field]").forEach((input) => {
    wireComboPicker(input);
    input.addEventListener("change", () => {
      const resolver = fieldResolvers[input.dataset.field];
      const nextValue = resolver
        ? resolvePickerChoice(input.value, resolver.options, resolver.labelFor, resolver.aliasesFor)
        : input.value;
      if (input.dataset.field === "pokemon") {
        const next = nextValue;
        if (next && !isPokemonSelected(next, selectedSlot)) {
          slot.pokemon = next;
          applyPopularSet(slot, next);
        }
      } else if (input.dataset.field === "item") {
        if (nextValue || !slot.pokemon?.isMega) slot.item = nextValue || "";
      } else {
        if (nextValue) slot[input.dataset.field] = nextValue;
      }
      renderAll();
    });
  });
  els.editor.querySelectorAll("[data-sp]").forEach((input) => {
    input.addEventListener("change", () => {
      slot.sp[input.dataset.sp] = clamp(Number(input.value || 0), 0, MAX_SP_STAT);
      renderAll();
    });
  });
  els.editor.querySelectorAll("[data-move]").forEach((input) => {
    wireComboPicker(input);
    input.addEventListener("change", () => {
      const move = resolvePickerChoice(
        input.value,
        allMoves,
        (candidate) => moveOptionLabel(mon, candidate),
        (candidate) => [candidate, moveUiName(candidate)],
      );
      if (!input.value.trim() || move) slot.moves[Number(input.dataset.move)] = move || "";
      renderAll();
    });
  });
  els.editor.querySelectorAll("[data-apply-spread]").forEach((button) => {
    button.addEventListener("click", () => {
      const option = spreadOptionsFor(mon)[Number(button.dataset.applySpread)];
      if (!option) return;
      slot.nature = option.nature;
      slot.sp = { ...option.spread };
      persist();
      renderAll();
    });
  });
}

function renderSuggestions() {
  const filled = team.filter((slot) => slot.pokemon);
  if (filled.length === 0) {
    els.suggestions.innerHTML = `<div class="editor-empty">${selectedLanguage === "es" ? "Empieza añadiendo 1-2 Pokémon. Las sugerencias cambiarán al instante." : "Start by adding 1-2 Pokémon. Suggestions update instantly."}</div>`;
    els.suggestionControls.innerHTML = "";
    return;
  }
  const allSuggestions = getSuggestions();
  const suggestions = allSuggestions.slice(0, suggestionLimit);
  const profile = analyzeTeamNeeds(filled);
  const teamFull = filled.length >= MAX_TEAM;
  els.suggestions.innerHTML = collapsibleDetailsHtml(
    selectedLanguage === "es" ? "Lectura del equipo" : "Team read",
    `<p>${needSummary(profile)}</p>`,
    "strategy-box team-read-details",
    { detailKey: "suggestions:team-read" }
  ) + suggestions
    .map(({ mon, score, reasons, explanation, advice, fit }) => `<article class="suggestion-card">
      <span class="sprite-frame"><img src="${pokemonSprite(mon)}" alt="${mon.name}" data-fallback="${plannerSprite(mon)}"></span>
      <div>
        <span class="suggestion-name">${mon.name}</span>
        <span class="mini">${typeIconRow(mon.types)} · ${selectedLanguage === "es" ? "uso" : "usage"} ${pokemonUsage(mon).toFixed(2)}%</span>
        ${baseStatsHtml(mon)}
        ${collapsibleDetailsHtml(selectedLanguage === "es" ? "Por qué se sugiere" : "Why this is suggested", `<p class="suggestion-explain">${localizeInlineTerms(explanation)}</p>${insightListHtml(advice)}`, "card-details", { detailKey: `suggestion:${mon.id}` })}
        <div class="tag-row">${suggestionReasonChips(reasons).slice(0, 4).map((reason) => `<span class="tag">${localizeInlineTerms(reason)}</span>`).join("")}</div>
        <div class="suggestion-actions">
          <span class="score">${fit} · ${Math.round(score)} pts</span>
          <button class="${teamFull ? "team-full-button" : ""}" type="button" data-import="${mon.name}" ${teamFull ? "disabled" : ""}>${teamFull ? t("teamFull") : t("importButton")}</button>
        </div>
      </div>
    </article>`)
    .join("");
  els.suggestionControls.innerHTML = `
    ${suggestionLimit < allSuggestions.length ? `<button type="button" data-more-suggestions>${selectedLanguage === "es" ? "Ver más sugerencias" : "More suggestions"}</button>` : ""}
    ${suggestionLimit > 8 ? `<button class="ghost-button" type="button" data-reset-suggestions>${selectedLanguage === "es" ? "Ver menos" : "Show less"}</button>` : ""}
  `;
  els.suggestions.querySelectorAll("[data-import]").forEach((button) => {
    button.addEventListener("click", () => addPokemonByName(button.dataset.import));
  });
  els.suggestionControls.querySelector("[data-more-suggestions]")?.addEventListener("click", () => {
    suggestionLimit += 8;
    renderSuggestions();
  });
  els.suggestionControls.querySelector("[data-reset-suggestions]")?.addEventListener("click", () => {
    suggestionLimit = 8;
    renderSuggestions();
  });
  wireDetailsPersistence(els.suggestions);
  wireSpriteFallbacks(els.suggestions);
}

function needSummary(profile) {
  const lines = [];
  if (profile.roleNeeds.length) {
    const roles = localizedList(profile.roleNeeds.map((need) => roleNeedLabel(need.reason)).slice(0, 3));
    lines.push(selectedLanguage === "es"
      ? `Prioridad: añade ${roles} para que el equipo tenga turnos más cómodos.`
      : `Priority: add ${roles} so the team gets cleaner turns.`);
  }
  if (profile.dangerTypes.length) {
    const danger = localizedList(profile.dangerTypes.map((item) => typeLabel(item.type)).slice(0, 3));
    lines.push(selectedLanguage === "es"
      ? `Cuidado con ${danger}; busca resistencias, inmunidades o presión ofensiva contra esos tipos.`
      : `Watch ${danger}; look for resistances, immunities, or offensive pressure into those types.`);
  }
  if (profile.missingCoverage.length) {
    const coverage = localizedList(profile.missingCoverage.map(typeLabel).slice(0, 3));
    lines.push(selectedLanguage === "es"
      ? `La cobertura ofensiva puede mejorar contra ${coverage}.`
      : `Offensive coverage can improve into ${coverage}.`);
  }
  if (profile.weatherNeeds.length) {
    const weather = localizedList(profile.weatherNeeds.map((need) => weatherLabel(need.weather)));
    lines.push(selectedLanguage === "es"
      ? `El equipo ya tiene Pokémon que aprovechan ${weather}; un setter fiable puede convertirlo en plan principal.`
      : `The team already has Pokémon that benefit from ${weather}; a reliable setter can turn that into a main plan.`);
  }
  if (profile.needsSpecial) {
    lines.push(selectedLanguage === "es"
      ? "Falta daño especial para no depender tanto de atacantes físicos."
      : "Add special damage so the team is not too physical-heavy.");
  }
  if (profile.needsPhysical) {
    lines.push(selectedLanguage === "es"
      ? "Falta daño físico para no depender tanto de atacantes especiales."
      : "Add physical damage so the team is not too special-heavy.");
  }
  if (profile.synergies.length) {
    const hooks = localizedList(profile.synergies.map(synergySummaryLabel).slice(0, 2));
    lines.push(selectedLanguage === "es"
      ? `Encajes naturales: ${hooks}.`
      : `Natural hooks: ${hooks}.`);
  }
  if (profile.repeatedTypes.length) {
    const repeats = localizedList(profile.repeatedTypes.map((item) => `${typeLabel(item.type)} x${item.count}`));
    lines.push(selectedLanguage === "es"
      ? `Evita seguir apilando ${repeats} salvo que el nuevo slot lo compense claramente.`
      : `Avoid stacking more ${repeats} unless the new slot clearly pays for it.`);
  }
  return lines.slice(0, 4).join(" ") || (selectedLanguage === "es"
    ? "El equipo ya está bastante equilibrado; priorizo matchups del meta, mejor posicionamiento y sinergias finas."
    : "The team is already fairly balanced; prioritizing meta matchups, cleaner positioning, and finer synergies.");
}

function roleNeedLabel(reason) {
  const map = {
    "puede activar Trick Room o Tailwind": ["Trick Room o Tailwind", "Trick Room or Tailwind"],
    "añade Tailwind, Icy Wind o parálisis": ["Tailwind, Icy Wind o parálisis", "Tailwind, Icy Wind, or paralysis"],
    "aporta Fake Out": ["Fake Out", "Fake Out"],
    "aporta Intimidate": ["Intimidate", "Intimidate"],
    "aporta redirección": ["redirección", "redirection"],
    "aporta daño en área": ["daño en área", "spread damage"],
    "aporta prioridad": ["prioridad", "priority"],
  };
  const translated = map[reason];
  return localizeInlineTerms(translated ? translated[selectedLanguage === "es" ? 0 : 1] : reason.replace(/^puede |^aporta /, ""));
}

function localizedList(items) {
  const values = unique(items).filter(Boolean);
  if (values.length <= 1) return values[0] || "";
  if (values.length === 2) return selectedLanguage === "es" ? `${values[0]} y ${values[1]}` : `${values[0]} and ${values[1]}`;
  const last = values.at(-1);
  const rest = values.slice(0, -1).join(", ");
  return selectedLanguage === "es" ? `${rest} y ${last}` : `${rest}, and ${last}`;
}

function synergySummaryLabel(synergy) {
  const labels = {
    groundImmune: ["inmunidades a Terremoto aliado", "immunity to allied Earthquake"],
    waterImmune: ["habilidades que absorban Surf o Agua Lodosa aliados", "abilities that absorb allied Surf or Muddy Water"],
    sun: ["atacantes que aprovechen el sol", "attackers that benefit from sun"],
    rain: ["atacantes que aprovechen la lluvia", "attackers that benefit from rain"],
    sand: ["Pokémon que aprovechen la arena", "Pokémon that benefit from sand"],
    setupSupport: ["Fake Out, Intimidate o redirección para proteger turnos de setup", "Fake Out, Intimidate, or redirection to protect setup turns"],
  };
  const value = labels[synergy.kind];
  return value ? value[selectedLanguage === "es" ? 0 : 1] : localizeInlineTerms(synergy.reason);
}

function synergyReasonLabel(synergy) {
  const labels = {
    groundImmune: ["inmune a Terremoto aliado", "immune to allied Earthquake"],
    waterImmune: ["absorbe ataques de Agua aliados", "absorbs allied Water attacks"],
    sun: ["aprovecha el sol", "benefits from sun"],
    rain: ["aprovecha la lluvia", "benefits from rain"],
    sand: ["aprovecha la arena", "benefits from sand"],
    setupSupport: ["protege turnos de setup", "protects setup turns"],
  };
  const value = labels[synergy.kind];
  return value ? value[selectedLanguage === "es" ? 0 : 1] : localizeInlineTerms(synergy.reason);
}

function getSuggestions() {
  const selectedSlots = team.filter((slot) => slot.pokemon);
  const selected = selectedSlots.map((slot) => slot.pokemon);
  const selectedIds = new Set(selected.map((mon) => mon.id));
  const profile = analyzeTeamNeeds(selectedSlots);
  const megaAlready = team.some(isMegaSlot);

  return POKEDEX.filter((mon) => !selectedIds.has(mon.id))
    .map((mon) => {
      const candidate = analyzeCandidate(mon);
      const usage = pokemonUsage(mon);
      let score = Math.min(usage, 12) * 0.9;
      const reasons = [];

      const add = (points, reason) => {
        score += points;
        if (reason) reasons.push(reason);
      };

      for (const coreMon of selected) {
        if (coreMon.teammates.includes(mon.name)) {
          add(18, `encaja con ${coreMon.name}`);
        }
        if (mon.teammates.includes(coreMon.name)) {
          add(14, `encaja con ${coreMon.name}`);
        }
      }

      for (const need of profile.roleNeeds) {
        if (candidate.setRoles.has(need.role)) add(need.weight, need.reason);
      }

      for (const need of profile.weatherNeeds) {
        if (candidate.weather.includes(need.weather)) add(need.weight, need.reason);
      }

      const coveredDanger = profile.dangerTypes.filter((item) => battleMultiplier(item.type, mon) < 1);
      if (coveredDanger.length) {
        add(coveredDanger.reduce((sum, item) => sum + item.weight, 0), `entra bien ante ${formatTypeList(coveredDanger.map((item) => item.type).slice(0, 2))}`);
      }

      const stacksDanger = profile.dangerTypes.filter((item) => battleMultiplier(item.type, mon) > 1);
      if (stacksDanger.length) {
        add(-stacksDanger.reduce((sum, item) => sum + item.weight * 0.65, 0), `apila debilidad ${typeLabel(stacksDanger[0].type)}`);
      }

      const newCoverage = candidate.attackTypes.filter((type) => profile.missingCoverage.includes(type));
      if (newCoverage.length) {
        add(newCoverage.length * 8, `abre cobertura ${formatTypeList(newCoverage.slice(0, 2))}`);
      }

      const threatCoverage = candidate.attackTypes.filter((type) => profile.uncheckedThreatTypes.includes(type));
      if (threatCoverage.length) {
        add(threatCoverage.length * 6, `presiona amenazas ${formatTypeList(threatCoverage.slice(0, 2))}`);
      }

      if (profile.needsSpecial && candidate.specialDamage) add(12, "atacante especial necesario");
      if (profile.needsPhysical && candidate.physicalDamage) add(12, "atacante físico necesario");
      if (profile.needsSpeed && (candidate.fast || candidate.setRoles.has("speedControl") || candidate.setRoles.has("priority"))) add(10, "ayuda a mover primero");
      if (profile.needsBulk && candidate.bulkScore >= 300) add(8, "resistencia para estabilizar el equipo");
      if (profile.needsProtection && (candidate.setRoles.has("redirection") || candidate.setRoles.has("fakeOut") || candidate.setRoles.has("intimidate"))) add(10, "protege atacantes frágiles");
      const weatherClash = candidateWeather(candidate).find((weather) => profile.currentWeather.length && !profile.currentWeather.includes(weather));
      if (weatherClash) add(-18, `pisa tu clima con ${weatherLabel(weatherClash)}`);

      const overlap = typeOverlapPenalty(candidate, profile);
      if (overlap.penalty) add(-overlap.penalty, overlap.reason);

      const weaknessStack = addedWeaknessPressure(mon, profile);
      if (weaknessStack.penalty) add(-weaknessStack.penalty, weaknessStack.reason);

      for (const synergy of profile.synergies) {
        const points = synergyScore(candidate, synergy);
        if (points > 0) add(points, synergyReasonLabel(synergy));
      }

      if (megaAlready && mon.isMega) {
        add(-22, "compite por Mega");
      }
      if (!megaAlready && mon.isMega) {
        add(6, "usa tu slot Mega");
      }

      if (reasons.length === 0 && usage > 3) {
        reasons.push(`amenaza del meta (${usage.toFixed(1)}%)`);
      } else if (reasons.length === 0) {
        reasons.push("Pokémon flexible");
      }

      const cleanReasons = unique(reasons).slice(0, 5);
      return {
        mon,
        score,
        reasons: cleanReasons,
        explanation: suggestionExplanation(mon, cleanReasons, profile, candidate),
        advice: suggestionAdvice(mon, cleanReasons, profile, candidate),
        fit: fitLabel(score),
      };
    })
    .sort((a, b) => b.score - a.score);
}

function analyzeTeamNeeds(slots) {
  const roles = roleCounts();
  const selected = slots.map((slot) => slot.pokemon);
  const moveDetails = slots
    .flatMap((slot) => slot.moves.filter(Boolean).map((move) => ({ move, info: moveInfo(move), data: getMoveData(move), mon: slot.pokemon })))
    .filter((entry) => entry.info);
  const attackTypes = unique(moveDetails.filter((entry) => entry.info.category !== "Status").map((entry) => entry.info.type).filter(Boolean));
  const physicalCount = moveDetails.filter((entry) => entry.info.category === "Physical").length;
  const specialCount = moveDetails.filter((entry) => entry.info.category === "Special").length;
  const avgSpeed = selected.reduce((sum, mon) => sum + mon.baseStats.spe, 0) / Math.max(selected.length, 1);
  const frailCount = selected.filter((mon) => mon.baseStats.hp + mon.baseStats.def + mon.baseStats.spd < 230).length;
  const sharedWeaknesses = defensiveProfile(selected);
  const dangerTypes = sharedWeaknesses.slice(0, 5).map((item) => ({ ...item, weight: 7 + item.score * 3 }));
  const missingCoverage = missingOffensiveCoverage(attackTypes);
  const uncheckedThreatTypes = uncheckedMetaCoverage(attackTypes, selected);
  const typeCounts = countTeamTypes(selected);
  const repeatedTypes = Object.entries(typeCounts)
    .filter(([, count]) => count >= 2)
    .map(([type, count]) => ({ type, count }));
  const weatherNeeds = desiredWeatherNeeds(slots, moveDetails);
  const roleNeeds = [];
  const doubles = isDoublesFormat();

  if (!roles.speedControl) roleNeeds.push({ role: "speedControl", weight: avgSpeed < 85 ? 18 : 14, reason: avgSpeed < 85 ? "puede activar Trick Room o Tailwind" : "añade Tailwind, Icy Wind o parálisis" });
  if (doubles && !roles.fakeOut && slots.length <= 4) roleNeeds.push({ role: "fakeOut", weight: 12, reason: "aporta Fake Out" });
  if (!roles.intimidate && physicalPressureWeak(selected)) roleNeeds.push({ role: "intimidate", weight: 14, reason: "aporta Intimidate" });
  if (doubles && !roles.redirection && frailCount >= 1) roleNeeds.push({ role: "redirection", weight: 12, reason: "aporta redirección" });
  if (doubles && !roles.spreadDamage && slots.length >= 2) roleNeeds.push({ role: "spreadDamage", weight: 8, reason: "aporta daño en área" });
  if (!roles.priority && avgSpeed < 95) roleNeeds.push({ role: "priority", weight: 7, reason: "aporta prioridad" });

  return {
    roles,
    attackTypes,
    dangerTypes,
    missingCoverage,
    uncheckedThreatTypes,
    typeCounts,
    repeatedTypes,
    weatherNeeds,
    roleNeeds,
    needsSpecial: physicalCount >= specialCount + 2,
    needsPhysical: specialCount >= physicalCount + 2,
    needsSpeed: !roles.speedControl && avgSpeed < 100,
    needsBulk: selected.length >= 2 && selected.every((mon) => mon.baseStats.hp + mon.baseStats.def + mon.baseStats.spd < 275),
    needsProtection: doubles && frailCount >= 1 && !roles.fakeOut && !roles.redirection && !roles.intimidate,
    currentWeather: currentWeather(slots),
    synergies: inferTeamSynergies(slots, moveDetails),
  };
}

function analyzeCandidate(mon) {
  const movePool = unique([...(mon.moves || []), ...(mon.learnset || [])]);
  const popularMoves = popularMoveDetails(mon);
  const setMoveIds = new Set(popularMoves.map((entry) => toId(entry.move)));
  const moveDetails = movePool.map((move) => ({ move, info: moveInfo(move), data: getMoveData(move) })).filter((entry) => entry.info);
  const roles = new Set(mon.roles);
  for (const entry of moveDetails) {
    const role = entry.info.role || inferMoveRole(entry.move, entry.data || {});
    if (role) roles.add(role === "spread" ? "spreadDamage" : role);
  }
  const setRoles = abilityBasedRoles(mon);
  for (const entry of popularMoves) {
    const role = entry.info.role || inferMoveRole(entry.move, entry.data || {});
    if (role === "spread" && relevantAttackMove(entry, mon)) setRoles.add("spreadDamage");
    else if (role && role !== "spread") setRoles.add(role);
  }
  const attackTypes = unique(popularMoves.filter((entry) => relevantAttackMove(entry, mon)).map((entry) => entry.info.type).filter(Boolean));
  const physicalMoves = popularMoves.filter((entry) => entry.info.category === "Physical" && relevantAttackMove(entry, mon));
  const specialMoves = popularMoves.filter((entry) => entry.info.category === "Special" && relevantAttackMove(entry, mon));
  return {
    mon,
    roles,
    setRoles,
    attackTypes,
    popularMoves,
    weather: candidateWeather({ abilities: new Set(mon.abilities || []) }),
    physicalDamage: mon.baseStats.atk >= 85 && physicalMoves.some((entry) => moveScore(entry.move, mon.baseStats) >= 70),
    specialDamage: mon.baseStats.spa >= 85 && specialMoves.some((entry) => moveScore(entry.move, mon.baseStats) >= 70),
    fast: mon.baseStats.spe >= 100,
    bulkScore: mon.baseStats.hp + mon.baseStats.def + mon.baseStats.spd,
    abilities: new Set(mon.abilities || []),
    types: new Set(mon.types || []),
    setMoveIds,
    moveIds: new Set(movePool.map(toId)),
  };
}

function abilityBasedRoles(mon) {
  const roles = new Set();
  const abilities = new Set([mon.popularAbility, ...(mon.abilities || [])].filter(Boolean));
  if (abilities.has("Intimidate")) roles.add("intimidate");
  if (["Drought", "Drizzle", "Sand Stream", "Snow Warning"].some((ability) => abilities.has(ability))) roles.add("weather");
  if (mon.isMega) roles.add("mega");
  return roles;
}

function popularMoveDetails(mon) {
  const usage = munchStatsForName(mon?.name)?.moveUsage || mon?.moveUsage || {};
  const usageMoves = Object.keys(usage);
  const moves = unique([...(usageMoves.length ? usageMoves : []), ...(mon.moves || [])]);
  const entries = moves
    .map((move, index) => ({ move, usage: moveUsageFor(mon, move), index, info: moveInfo(move), data: getMoveData(move) || {} }))
    .filter((entry) => entry.info && isLegalMoveForMon(mon, entry.move))
    .sort((a, b) => b.usage - a.usage || a.index - b.index || a.move.localeCompare(b.move));
  const hasUsage = entries.some((entry) => entry.usage > 0);
  return entries
    .filter((entry, index) => !hasUsage || entry.usage >= 8 || index < 4)
    .slice(0, 8);
}

function relevantAttackMove(entry, mon) {
  if (!entry?.info || entry.info.category === "Status") return false;
  const power = Number(entry.data?.basePower || 0);
  if (power > 0 && power < 45) return false;
  if (entry.info.category === "Physical") return mon.baseStats.atk >= 75;
  if (entry.info.category === "Special") return mon.baseStats.spa >= 75;
  return false;
}

function countTeamTypes(mons) {
  const counts = {};
  for (const mon of mons) {
    for (const type of mon.types) counts[type] = (counts[type] || 0) + 1;
  }
  return counts;
}

function desiredWeatherNeeds(slots, moveDetails) {
  if (currentWeather(slots).length) return [];
  const roles = roleCounts();
  const abilities = new Set(slots.flatMap((slot) => slot.pokemon.abilities || []));
  const moveIds = new Set(moveDetails.map((entry) => toId(entry.move)));
  const needs = [];

  if (roles.sandOffense || abilities.has("Sand Rush") || abilities.has("Sand Force")) {
    needs.push({ weather: "Sand", weight: 72, reason: "activa arena para tus atacantes" });
  }
  if (roles.rainOffense || abilities.has("Swift Swim") || moveIds.has("hurricane") || moveIds.has("thunder")) {
    needs.push({ weather: "Rain", weight: 72, reason: "activa lluvia para tu plan ofensivo" });
  }
  if (roles.sunOffense || abilities.has("Chlorophyll") || moveIds.has("solarbeam")) {
    needs.push({ weather: "Sun", weight: 72, reason: "activa sol para tu plan ofensivo" });
  }
  return needs;
}

function typeOverlapPenalty(candidate, profile) {
  const overlaps = [...candidate.types].filter((type) => profile.typeCounts[type]);
  if (!overlaps.length) return { penalty: 0, reason: "" };
  const penalty = overlaps.reduce((sum, type) => sum + 6 * profile.typeCounts[type], 0) + (overlaps.length === candidate.types.size ? 8 : 0);
  return {
    penalty,
    reason: `repite tipo ${overlaps.map(typeLabel).join("/")}`,
  };
}

function addedWeaknessPressure(mon, profile) {
  const stacked = profile.dangerTypes.filter((item) => battleMultiplier(item.type, mon) > 1);
  if (!stacked.length) return { penalty: 0, reason: "" };
  const penalty = stacked.reduce((sum, item) => sum + 4 + item.score * 3, 0);
  return {
    penalty,
    reason: `empeora ${stacked.map((item) => typeLabel(item.type)).slice(0, 2).join("/")}`,
  };
}

function suggestionExplanation(mon, reasons, profile, candidate) {
  const positives = reasons.filter((reason) => !isWarningReason(reason));
  const warnings = reasons.filter(isWarningReason);
  const details = unique([
    ...candidateCapabilityPhrases(mon, candidate),
    ...reasonExplanationPhrases(positives, profile),
  ]).slice(0, 3);

  if (details.length) {
    const [firstDetail, ...extraDetails] = details;
    const warningText = warnings.length
      ? (selectedLanguage === "es" ? ` Ojo: ${lowerFirst(suggestionTagLabel(warnings[0]))}.` : ` Watch out: ${lowerFirst(suggestionTagLabel(warnings[0]))}.`)
      : "";
    return `${mon.name} ${firstDetail}${extraDetails.length ? `. ${extraDetails.map(sentenceCase).join(". ")}` : ""}.${warningText}`;
  }
  if (warnings.length) {
    return selectedLanguage === "es"
      ? `${mon.name} solo merece la pena si necesitas algo muy concreto; ${lowerFirst(suggestionTagLabel(warnings[0]))}.`
      : `${mon.name} is only worth it if you need something very specific; ${lowerFirst(suggestionTagLabel(warnings[0]))}.`;
  }
  if (profile.needsSpeed && (candidate.fast || candidate.setRoles?.has("priority"))) {
    return selectedLanguage === "es"
      ? `${mon.name} ayuda a que el equipo no dependa tanto de ganar turnos lentos.`
      : `${mon.name} helps the team rely less on slow turn orders.`;
  }
  return selectedLanguage === "es"
    ? `${mon.name} es un Pokémon flexible, pero no cubre una carencia urgente del equipo.`
    : `${mon.name} is a flexible Pokémon, but does not cover an urgent team weakness.`;
}

function isWarningReason(reason) {
  return /^(repite|empeora|apila|pisa|compite)/.test(reason);
}

function suggestionTagLabel(reason) {
  reason = typeof reason === "string" ? reason : "";
  if (!reason) return "";
  const synergy = reason.match(/^encaja con (.+)$/);
  if (synergy) return selectedLanguage === "es" ? `Sinergia con ${synergy[1]}` : `Synergy with ${synergy[1]}`;
  const enters = reason.match(/^entra bien ante (.+)$/);
  if (enters) return selectedLanguage === "es" ? `Cubre ${enters[1]}` : `Covers ${enters[1]}`;
  const coverage = reason.match(/^abre cobertura (.+)$/);
  if (coverage) return selectedLanguage === "es" ? `Cobertura ${coverage[1]}` : `Coverage ${coverage[1]}`;
  const pressure = reason.match(/^presiona amenazas (.+)$/);
  if (pressure) return selectedLanguage === "es" ? `Amenaza ${pressure[1]}` : `Threatens ${pressure[1]}`;
  const repeats = reason.match(/^repite tipo (.+)$/);
  if (repeats) return selectedLanguage === "es" ? `Repite ${repeats[1]}` : `Stacks ${repeats[1]}`;
  const worsens = reason.match(/^empeora (.+)$/);
  if (worsens) return selectedLanguage === "es" ? `Añade debilidad a ${worsens[1]}` : `Adds weakness to ${worsens[1]}`;
  const stacks = reason.match(/^apila debilidad (.+)$/);
  if (stacks) return selectedLanguage === "es" ? `Apila ${stacks[1]}` : `Stacks ${stacks[1]}`;
  const weather = reason.match(/^pisa tu clima con (.+)$/);
  if (weather) return selectedLanguage === "es" ? `Choca con ${weather[1]}` : `Clashes with ${weather[1]}`;
  if (reason === "atacante especial necesario") return selectedLanguage === "es" ? "Daño especial" : "Special damage";
  if (reason === "atacante físico necesario") return selectedLanguage === "es" ? "Daño físico" : "Physical damage";
  if (reason === "ayuda a mover primero") return selectedLanguage === "es" ? "Control de velocidad" : "Speed control";
  if (reason === "puede activar Trick Room o Tailwind") return selectedLanguage === "es" ? "Control de velocidad" : "Speed control";
  if (reason === "añade Tailwind, Icy Wind o parálisis") return selectedLanguage === "es" ? "Control de velocidad" : "Speed control";
  if (reason === "resistencia para estabilizar el equipo") return selectedLanguage === "es" ? "Más aguante" : "More bulk";
  if (reason === "protege atacantes frágiles") return selectedLanguage === "es" ? "Protege el equipo" : "Protects the team";
  if (reason === "inmune a Terremoto aliado" || reason === "immune to allied Earthquake") return selectedLanguage === "es" ? "Inmune a Terremoto aliado" : "Immune to allied Earthquake";
  if (reason === "absorbe ataques de Agua aliados" || reason === "absorbs allied Water attacks") return selectedLanguage === "es" ? "Absorbe Agua aliada" : "Absorbs allied Water";
  if (reason === "aprovecha el sol" || reason === "benefits from sun") return selectedLanguage === "es" ? "Aprovecha sol" : "Benefits from sun";
  if (reason === "aprovecha la lluvia" || reason === "benefits from rain") return selectedLanguage === "es" ? "Aprovecha lluvia" : "Benefits from rain";
  if (reason === "aprovecha la arena" || reason === "benefits from sand") return selectedLanguage === "es" ? "Aprovecha arena" : "Benefits from sand";
  if (reason === "protege turnos de setup" || reason === "protects setup turns") return selectedLanguage === "es" ? "Protege setup" : "Protects setup";
  if (reason === "compite por Mega") return selectedLanguage === "es" ? "Conflicto de Mega" : "Mega conflict";
  if (reason === "usa tu slot Mega") return selectedLanguage === "es" ? "Opción de Mega" : "Mega option";
  if (reason === "Pokémon flexible") return selectedLanguage === "es" ? "Flexible" : "Flexible";
  if (/^amenaza del meta/.test(reason)) return selectedLanguage === "es" ? "Amenaza del meta" : "Meta threat";
  return sentenceCase(reason);
}

function suggestionReasonChips(reasons) {
  return unique(reasons.map(suggestionTagLabel)).filter((label) => !/^(Sinergia con|Synergy with) /.test(label));
}

function reasonExplanationPhrases(reasons) {
  const phrases = [];
  const synergy = reasons.find((reason) => /^encaja con /.test(reason));
  if (synergy) phrases.push(selectedLanguage === "es" ? `comparte un plan real con ${synergy.replace(/^encaja con /, "")}` : `shares a real game plan with ${synergy.replace(/^encaja con /, "")}`);
  const enters = reasons.find((reason) => /^entra bien ante /.test(reason));
  if (enters) phrases.push(selectedLanguage === "es" ? `da una entrada defensiva útil contra ${enters.replace(/^entra bien ante /, "")}` : `gives a useful defensive entry into ${enters.replace(/^entra bien ante /, "")}`);
  const coverage = reasons.find((reason) => /^abre cobertura /.test(reason));
  if (coverage) phrases.push(selectedLanguage === "es" ? `añade cobertura ofensiva contra ${coverage.replace(/^abre cobertura /, "")}` : `adds offensive coverage into ${coverage.replace(/^abre cobertura /, "")}`);
  const pressure = reasons.find((reason) => /^presiona amenazas /.test(reason));
  if (pressure) phrases.push(selectedLanguage === "es" ? "presiona amenazas que tu equipo todavía no castiga bien" : "pressures threats your team does not punish well yet");
  return phrases;
}

function suggestionAdvice(mon, reasons, profile, candidate) {
  const capabilities = candidateCapabilityPhrases(mon, candidate);
  const lines = [];
  const plan = formatSentenceList(capabilities.slice(0, 2));
  if (plan) lines.push({ label: "Plan", text: plan });

  const fit = formatSentenceList(suggestionFitPhrases(reasons, profile).slice(0, 2));
  if (fit) lines.push({ label: selectedLanguage === "es" ? "Encaje" : "Fit", text: fit });

  const caution = suggestionCaution(mon, reasons, candidate, profile);
  if (caution) lines.push({ label: selectedLanguage === "es" ? "Cuidado" : "Watch out", text: caution, tone: "warn" });
  return lines.slice(0, 3);
}

function suggestionFitPhrases(reasons) {
  const phrases = [];
  const synergy = reasons.find((reason) => /^encaja con /.test(reason));
  if (synergy) phrases.push(selectedLanguage === "es" ? `se coordina bien con ${synergy.replace(/^encaja con /, "")}` : `coordinates well with ${synergy.replace(/^encaja con /, "")}`);
  const enters = reasons.find((reason) => /^entra bien ante /.test(reason));
  if (enters) phrases.push(selectedLanguage === "es" ? `puede pivotar ante ${enters.replace(/^entra bien ante /, "")}` : `can pivot into ${enters.replace(/^entra bien ante /, "")}`);
  const coverage = reasons.find((reason) => /^abre cobertura /.test(reason));
  if (coverage) phrases.push(selectedLanguage === "es" ? `añade presión ofensiva contra ${coverage.replace(/^abre cobertura /, "")}` : `adds offensive pressure into ${coverage.replace(/^abre cobertura /, "")}`);
  const pressure = reasons.find((reason) => /^presiona amenazas /.test(reason));
  if (pressure) phrases.push(selectedLanguage === "es" ? "castiga amenazas populares que tu equipo no estaba presionando" : "punishes popular threats your team was not pressuring");
  if (reasons.includes("atacante especial necesario")) phrases.push(selectedLanguage === "es" ? "equilibra el daño especial del equipo" : "balances the team's special damage");
  if (reasons.includes("atacante físico necesario")) phrases.push(selectedLanguage === "es" ? "equilibra el daño físico del equipo" : "balances the team's physical damage");
  if (reasons.includes("ayuda a mover primero")) phrases.push(selectedLanguage === "es" ? "reduce la dependencia de ganar speed ties" : "reduces reliance on winning speed ties");
  if (reasons.includes("protege atacantes frágiles")) phrases.push(isDoublesFormat()
    ? (selectedLanguage === "es" ? "ayuda a colocar a tus atacantes sin exponerlos a doble target" : "helps place attackers without exposing them to double targets")
    : (selectedLanguage === "es" ? "aporta una forma más segura de entrar y sostener momentum" : "offers a safer way to enter and maintain momentum"));
  return unique(phrases);
}

function suggestionCaution(mon, reasons, candidate, profile) {
  const warning = reasons.find(isWarningReason);
  if (warning) return lowerFirst(suggestionTagLabel(warning));
  const topDanger = profile.dangerTypes.find((item) => battleMultiplier(item.type, mon) > 1);
  if (topDanger) return isDoublesFormat()
    ? (selectedLanguage === "es" ? `no cubre tu problema de ${typeLabel(topDanger.type)} y puede necesitar apoyo de Protect o posicionamiento` : `does not cover your ${typeLabel(topDanger.type)} issue and may need Protect or positioning support`)
    : (selectedLanguage === "es" ? `no cubre tu problema de ${typeLabel(topDanger.type)}; úsalo con daño previo, pivot o revenge kill` : `does not cover your ${typeLabel(topDanger.type)} issue; use it with chip, pivots, or revenge-kill lines`);
  const protectUsage = moveUsageFor(mon, "Protect");
  const choiceItem = (mon.items || []).some((item) => /^Choice /.test(item));
  if (choiceItem && protectUsage < 20) return isDoublesFormat()
    ? (selectedLanguage === "es" ? "si va con objeto Elección, necesita buenos pivots porque no puede alternar Protect" : "with a Choice item, it needs good pivots because it cannot alternate into Protect")
    : (selectedLanguage === "es" ? "si va con objeto Elección, cuidado con quedar encerrado ante respuestas defensivas" : "with a Choice item, beware getting locked into defensive checks");
  if (candidate.bulkScore < 230) return isDoublesFormat()
    ? (selectedLanguage === "es" ? "es frágil; intenta entrar tras KO, Fake Out, redirección o un cambio seguro" : "it is frail; try to bring it in after a KO, Fake Out, redirection, or a safe switch")
    : (selectedLanguage === "es" ? "es frágil; intenta entrar tras KO, pivot o cambio forzado" : "it is frail; try to bring it in after a KO, pivot, or forced switch");
  if (candidate.setRoles?.has("weather") && profile.currentWeather.length) return selectedLanguage === "es" ? "vigila no pisar tu propio clima" : "avoid overwriting your own weather";
  return "";
}

function candidateCapabilityPhrases(mon, candidate) {
  const popularMoves = candidate.popularMoves || popularMoveDetails(mon);
  const moveIds = new Set(popularMoves.map((entry) => toId(entry.move)));
  const phrases = [];
  const moveNames = (ids, minUsage = 0) => popularMoves.filter((entry) => ids.includes(toId(entry.move)) && (!entry.usage || entry.usage >= minUsage)).map(formatMoveWithUsage);
  const firstMove = (ids, minUsage = 0) => moveNames(ids, minUsage)[0] || "";
  const physicalMoves = popularMoves.filter((entry) => entry.info.category === "Physical" && relevantAttackMove(entry, mon));
  const specialMoves = popularMoves.filter((entry) => entry.info.category === "Special" && relevantAttackMove(entry, mon));
  const spreadMoves = popularMoves.filter((entry) => (entry.info.role === "spread" || inferMoveRole(entry.move, entry.data || {}) === "spread") && relevantAttackMove(entry, mon));
  const priorityMoves = popularMoves.filter((entry) => entry.info.role === "priority" && relevantAttackMove(entry, mon));

  const doubles = isDoublesFormat();
  if (doubles && moveIds.has("fakeout")) phrases.push(selectedLanguage === "es" ? "puede comprar turnos con Fake Out" : "can buy turns with Fake Out");
  if (candidate.setRoles?.has("intimidate") || candidate.abilities.has("Intimidate")) phrases.push(selectedLanguage === "es" ? "reduce el daño físico rival con Intimidate" : "cuts opposing physical damage with Intimidate");
  if (moveIds.has("willowisp")) phrases.push(selectedLanguage === "es" ? `puede quemar atacantes físicos${firstMove(["willowisp"]) ? ` con ${firstMove(["willowisp"])}` : ""}` : `can burn physical attackers${firstMove(["willowisp"]) ? ` with ${firstMove(["willowisp"])}` : ""}`);
  if (moveIds.has("tailwind")) phrases.push(doubles
    ? (selectedLanguage === "es" ? "puede acelerar el equipo con Tailwind" : "can speed the team up with Tailwind")
    : (selectedLanguage === "es" ? "puede ganar ventaja de velocidad con Tailwind" : "can gain speed advantage with Tailwind"));
  if (moveIds.has("trickroom")) phrases.push(doubles
    ? (selectedLanguage === "es" ? "puede setear Trick Room para cambiar el ritmo" : "can set Trick Room to flip the turn order")
    : (selectedLanguage === "es" ? "puede usar Trick Room para castigar equipos rápidos" : "can use Trick Room to punish faster teams"));
  if (moveIds.has("icywind") || moveIds.has("thunderwave") || moveIds.has("electroweb")) phrases.push(selectedLanguage === "es" ? `controla la velocidad con ${firstMove(["icywind", "thunderwave", "electroweb"]) || "bajadas/parálisis"}` : `controls Speed with ${firstMove(["icywind", "thunderwave", "electroweb"]) || "drops/paralysis"}`);
  if (doubles && (moveIds.has("followme") || moveIds.has("ragepowder"))) phrases.push(selectedLanguage === "es" ? `puede redirigir golpes con ${firstMove(["followme", "ragepowder"])}` : `can redirect attacks with ${firstMove(["followme", "ragepowder"])}`);
  if (doubles && moveIds.has("wideguard")) phrases.push(selectedLanguage === "es" ? "protege al equipo de daño en área con Wide Guard" : "protects the team from spread damage with Wide Guard");
  if (moveIds.has("haze")) phrases.push(selectedLanguage === "es" ? "puede frenar boosts rivales con Haze" : "can stop opposing boosts with Haze");
  if (moveIds.has("encore") || moveIds.has("disable")) phrases.push(selectedLanguage === "es" ? `molesta turnos clave con ${firstMove(["encore", "disable"])}` : `disrupts key turns with ${firstMove(["encore", "disable"])}`);
  if (candidate.weather.includes("Rain")) phrases.push(selectedLanguage === "es" ? `activa lluvia para potenciar planes de ${typeLabel("Water")} y ${moveUiName("Hurricane")}` : "sets rain to boost Water plans and Hurricane");
  if (candidate.weather.includes("Sun")) phrases.push(selectedLanguage === "es" ? `activa sol para potenciar ${typeLabel("Fire")} y ${abilityUiName("Chlorophyll")}` : "sets sun to boost Fire damage and Chlorophyll");
  if (candidate.weather.includes("Sand")) phrases.push(selectedLanguage === "es" ? `activa arena para ${abilityUiName("Sand Rush")} o presión residual` : "sets sand for Sand Rush or residual pressure");
  if (spreadMoves.length) phrases.push(doubles
    ? (selectedLanguage === "es" ? `presiona ambos rivales con ${formatMoveList(spreadMoves.slice(0, 2))}` : `pressures both foes with ${formatMoveList(spreadMoves.slice(0, 2))}`)
    : (selectedLanguage === "es" ? `presiona al rival con ${formatMoveList(spreadMoves.slice(0, 2))}` : `pressures the opponent with ${formatMoveList(spreadMoves.slice(0, 2))}`));
  if (candidate.physicalDamage && physicalMoves.length) phrases.push(selectedLanguage === "es" ? `se juega como atacante físico con ${formatMoveList(physicalMoves.slice(0, 2))}` : `is played as a physical attacker with ${formatMoveList(physicalMoves.slice(0, 2))}`);
  if (candidate.specialDamage && specialMoves.length) phrases.push(selectedLanguage === "es" ? `se juega como atacante especial con ${formatMoveList(specialMoves.slice(0, 2))}` : `is played as a special attacker with ${formatMoveList(specialMoves.slice(0, 2))}`);
  if (priorityMoves.length) phrases.push(selectedLanguage === "es" ? `ofrece prioridad para cerrar KOs con ${formatMoveList(priorityMoves.slice(0, 2))}` : `offers priority to close KOs with ${formatMoveList(priorityMoves.slice(0, 2))}`);
  const boostMove = firstMove(["helpinghand", "coaching"], 15);
  if (doubles && boostMove) phrases.push(selectedLanguage === "es" ? `puede potenciar a su compañero con ${boostMove}` : `can boost its partner with ${boostMove}`);

  return phrases;
}

function formatMoveWithUsage(entry) {
  const name = moveUiName(entry.move);
  return entry.usage > 0 ? `${name} (${formatUsagePercent(entry.usage)}%)` : name;
}

function formatMoveList(entries) {
  return entries.map(formatMoveWithUsage).join(selectedLanguage === "es" ? " y " : " and ");
}

function fitLabel(score) {
  if (score >= 45) return selectedLanguage === "es" ? "Encaje alto" : "High fit";
  if (score >= 28) return selectedLanguage === "es" ? "Buen encaje" : "Good fit";
  if (score >= 14) return selectedLanguage === "es" ? "Situacional" : "Situational";
  return selectedLanguage === "es" ? "Forzado" : "Forced";
}

function formatSentenceList(items) {
  return unique(items.filter(Boolean).map((item) => lowerFirst(localizeInlineTerms(item)))).join(". ");
}

function insightListHtml(lines) {
  const clean = (lines || []).filter((line) => line?.text);
  if (!clean.length) return "";
  return `<div class="insight-list">${clean.map((line) => `
    <div class="insight-line ${line.tone === "warn" ? "warn" : ""}">
      <span>${line.label}</span>
      <p>${sentenceCase(localizeInlineTerms(line.text))}</p>
    </div>`).join("")}</div>`;
}

function collapsibleDetailsHtml(summary, bodyHtml, className = "", options = {}) {
  const detailKey = options.detailKey || (options.detailScope && options.detailId ? `${options.detailScope}:${options.detailId}` : "");
  const isOpen = detailKey ? (detailsOpenState.has(detailKey) ? detailsOpenState.get(detailKey) : Boolean(options.open)) : Boolean(options.open);
  const detailAttrs = [
    isOpen ? "open" : "",
    detailKey ? `data-detail-key="${escapeHtml(detailKey)}"` : "",
    options.detailScope ? `data-detail-scope="${escapeHtml(options.detailScope)}"` : "",
    options.detailId ? `data-detail-id="${escapeHtml(options.detailId)}"` : "",
  ].filter(Boolean).join(" ");
  return `<details class="info-collapse ${className}" ${detailAttrs}>
    <summary>${summary}</summary>
    <div class="info-collapse-body">${bodyHtml}</div>
  </details>`;
}

function detailsOpenAttr(key, defaultOpen = false) {
  return (detailsOpenState.has(key) ? detailsOpenState.get(key) : defaultOpen) ? " open" : "";
}

function wireDetailsPersistence(root = document) {
  root.querySelectorAll("details[data-detail-key]").forEach((details) => {
    if (details.dataset.detailPersistenceWired) return;
    details.dataset.detailPersistenceWired = "true";
    details.addEventListener("toggle", () => {
      detailsOpenState.set(details.dataset.detailKey, details.open);
    });
  });
}

function wireDetailOpenState(root, scope, stateSet) {
  root.querySelectorAll(`details[data-detail-scope="${scope}"][data-detail-id]`).forEach((details) => {
    details.addEventListener("toggle", () => {
      const id = details.dataset.detailId;
      if (!id) return;
      if (details.open) stateSet.add(id);
      else stateSet.delete(id);
    });
  });
}

function uniqueMonsForDisplay(mons) {
  const seen = new Set();
  return mons.filter((mon) => {
    const key = mon.name;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function defensiveProfile(mons) {
  return Object.keys(TYPE_CHART)
    .map((type) => {
      const weak = mons.filter((mon) => battleMultiplier(type, mon) > 1).length;
      const resists = mons.filter((mon) => battleMultiplier(type, mon) < 1).length;
      const immune = mons.filter((mon) => battleMultiplier(type, mon) === 0).length;
      return { type, score: weak * 2 - resists - immune * 2, weak, resists, immune };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);
}

function missingOffensiveCoverage(attackTypes) {
  const important = ["Steel", "Fairy", "Dragon", "Water", "Fire", "Ground", "Flying", "Ghost", "Dark", "Grass", "Rock"];
  return important.filter((defType) => !attackTypes.some((atkType) => TYPE_CHART[atkType]?.[defType] > 1));
}

function uncheckedMetaCoverage(attackTypes, selected) {
  const selectedIds = new Set(selected.map((mon) => mon.id));
  const threats = sortedPokedex().filter((mon) => !selectedIds.has(mon.id) && pokemonUsage(mon) >= 5).slice(0, 24);
  const needed = [];
  for (const threat of threats) {
    const covered = attackTypes.some((type) => battleMultiplier(type, threat) > 1);
    if (!covered) needed.push(...bestTypesInto(threat.types));
  }
  return unique(needed).slice(0, 6);
}

function bestTypesInto(defenderTypes) {
  return Object.keys(TYPE_CHART).filter((type) => defensiveMultiplier(type, defenderTypes) > 1);
}

function physicalPressureWeak(mons) {
  const weakToCommonPhysical = ["Ground", "Rock", "Fighting", "Dark", "Dragon"];
  return mons.some((mon) => weakToCommonPhysical.some((type) => battleMultiplier(type, mon) > 1));
}

function inferTeamSynergies(slots, moveDetails) {
  const synergies = [];
  const moveIds = new Set(moveDetails.map((entry) => toId(entry.move)));
  const abilities = new Set(slots.flatMap((slot) => slot.pokemon.abilities || []));
  if (moveIds.has("earthquake")) synergies.push({ kind: "groundImmune", reason: "inmune a Earthquake aliado" });
  if (["surf", "muddywater"].some((move) => moveIds.has(move))) synergies.push({ kind: "waterImmune", reason: "aprovecha ataques Water aliados" });
  if (abilities.has("Drought")) synergies.push({ kind: "sun", reason: "sinergia con sol" });
  if (abilities.has("Drizzle")) synergies.push({ kind: "rain", reason: "sinergia con lluvia" });
  if (abilities.has("Sand Stream")) synergies.push({ kind: "sand", reason: "sinergia con arena" });
  if (slots.some((slot) => slot.pokemon.roles.includes("setup"))) synergies.push({ kind: "setupSupport", reason: "habilita turnos de setup" });
  return synergies;
}

function currentWeather(slots) {
  return unique(slots.flatMap((slot) => weatherFromAbilities(slot.pokemon.abilities || [])));
}

function candidateWeather(candidate) {
  return weatherFromAbilities([...candidate.abilities]);
}

function weatherFromAbilities(abilities) {
  const weather = [];
  if (abilities.includes("Drought") || abilities.includes("Desolate Land")) weather.push("Sun");
  if (abilities.includes("Drizzle") || abilities.includes("Primordial Sea")) weather.push("Rain");
  if (abilities.includes("Sand Stream")) weather.push("Sand");
  if (abilities.includes("Snow Warning")) weather.push("Snow");
  return weather;
}

function synergyScore(candidate, synergy) {
  if (synergy.kind === "groundImmune" && (candidate.types.has("Flying") || candidate.abilities.has("Levitate") || candidate.abilities.has("Telepathy"))) return 12;
  if (synergy.kind === "waterImmune" && ["Water Absorb", "Storm Drain", "Dry Skin", "Telepathy"].some((ability) => candidate.abilities.has(ability))) return 10;
  if (synergy.kind === "sun" && (candidate.abilities.has("Chlorophyll") || candidate.attackTypes.includes("Fire") || candidate.moveIds.has("solarbeam"))) return 10;
  if (synergy.kind === "rain" && (candidate.abilities.has("Swift Swim") || candidate.moveIds.has("hurricane") || candidate.moveIds.has("thunder"))) return 10;
  if (synergy.kind === "sand" && (candidate.abilities.has("Sand Rush") || candidate.abilities.has("Sand Force") || candidate.types.has("Rock") || candidate.types.has("Steel") || candidate.types.has("Ground"))) return 9;
  if (synergy.kind === "setupSupport" && (candidate.roles.has("redirection") || candidate.roles.has("fakeOut") || candidate.roles.has("intimidate") || candidate.roles.has("support"))) return 9;
  return 0;
}

function getMoveData(move) {
  return typeof PS_MOVES !== "undefined" ? PS_MOVES[toId(move)] : null;
}

function threatSetOptions(target) {
  const options = spreadOptionsFor(target);
  if (options.length) return options;
  return [{ nature: target?.nature || "Hardy", spread: { ...(target?.spread || {}) }, usage: 0 }];
}

function blankSp() {
  return Object.fromEntries(STAT_KEYS.map((key) => [key, 0]));
}

function normalizedSp(sp = {}) {
  return Object.fromEntries(STAT_KEYS.map((key) => [key, clamp(Number(sp?.[key] || 0), 0, MAX_SP_STAT)]));
}

function neutralSlotFor(mon) {
  return {
    nature: "Hardy",
    sp: blankSp(),
    ability: mon?.popularAbility || mon?.abilities?.[0] || "",
    item: "",
  };
}

function cloneCalcSlot(slot, mon) {
  return {
    nature: slot?.nature || mon?.nature || "Hardy",
    sp: normalizedSp(slot?.sp || mon?.spread || {}),
    ability: slot?.ability || mon?.popularAbility || mon?.abilities?.[0] || "",
    item: normalizeItemName(slot?.item || mon?.items?.[0] || ""),
  };
}

function defaultCustomSlot(mon, seedSlot = null) {
  if (seedSlot) return cloneCalcSlot(seedSlot, mon);
  const option = threatSetOptions(mon)[0];
  return {
    nature: option?.nature || mon?.nature || "Hardy",
    sp: normalizedSp(option?.spread || mon?.spread || {}),
    ability: mon?.popularAbility || mon?.abilities?.[0] || "",
    item: normalizeItemName(mon?.items?.[0] || ""),
  };
}

function teamSlotForMon(mon) {
  return team.find((slot) => slot.pokemon?.id === mon?.id) || null;
}

function customSlotFor(store, mon, seedSlot = null) {
  if (!mon) return neutralSlotFor(mon);
  if (!store[mon.id]) store[mon.id] = defaultCustomSlot(mon, seedSlot);
  store[mon.id].sp = normalizedSp(store[mon.id].sp);
  if (!NATURES[store[mon.id].nature]) store[mon.id].nature = mon.nature || "Hardy";
  return store[mon.id];
}

function targetThreatSlot(target) {
  return threatAdvanced ? customSlotFor(threatTargetCustomSlots, target, teamSlotForMon(target)) : neutralSlotFor(target);
}

function majorThreatSlot(mon) {
  return majorThreatAdvancedIds.has(mon.id) ? customSlotFor(majorThreatCustomSlots, mon) : neutralSlotFor(mon);
}

function threatCounterSlot(mon) {
  return threatCounterAdvancedIds.has(mon.id) ? customSlotFor(threatCounterCustomSlots, mon) : neutralSlotFor(mon);
}

function targetSetSummaryHtml(mon, slot, advanced) {
  if (!advanced) return "";
  const label = advanced
    ? (selectedLanguage === "es" ? "Set editado" : "Edited set")
    : (selectedLanguage === "es" ? "Cálculo neutro" : "Neutral calc");
  const setText = advanced ? `${natureUiName(slot.nature)} · ${spreadText(slot.sp)}` : `${natureUiName("Hardy")} · ${spreadText(slot.sp)}`;
  return `<span class="mini threat-set-summary">${label}: ${setText}</span>
    ${advanced ? `<span class="mini threat-final-stats">${selectedLanguage === "es" ? "Stats finales" : "Final stats"}: ${finalStatsText(mon, slot.nature, slot.sp)}</span>` : ""}`;
}

function advancedSlotEditorHtml(mon, slot, scope, id, compact = false) {
  const stats = calculateStats(mon, slot);
  const total = totalSp(slot);
  const natureOptions = natureOptionsFor(mon, slot);
  return `<div class="mini-sp-editor ${compact ? "compact" : ""}">
    <div class="mini-sp-editor-head">
      <strong>${selectedLanguage === "es" ? "Stats finales" : "Final stats"}</strong>
      <span>${selectedLanguage === "es" ? "Puntos Champions" : "Champions points"}</span>
    </div>
    <label class="mini-nature">
      <span>${selectedLanguage === "es" ? "Naturaleza" : "Nature"}</span>
      <select data-advanced-nature data-advanced-scope="${scope}" data-advanced-id="${id}">
        ${natureOptions.map((nature) => `<option value="${nature}" ${nature === slot.nature ? "selected" : ""}>${natureOptionLabel(mon, nature)}</option>`).join("")}
      </select>
    </label>
    <div class="mini-sp-grid">
      ${STAT_KEYS.map((key) => `<label>
        <span>${STAT_LABELS[key]}</span>
        <input type="number" inputmode="numeric" min="0" max="${MAX_SP_STAT}" value="${slot.sp[key] || 0}" data-advanced-sp="${key}" data-advanced-scope="${scope}" data-advanced-id="${id}">
        <b>${stats[key]}</b>
      </label>`).join("")}
    </div>
    <div class="mini-sp-total ${total > MAX_SP ? "bad" : ""}">${selectedLanguage === "es" ? "Restantes" : "Remaining"} ${MAX_SP - total} · ${selectedLanguage === "es" ? "usados" : "used"} ${total}/${MAX_SP}</div>
  </div>`;
}

function advancedModeSwitchHtml(advanced, dataAttribute, id = "") {
  const attr = id ? `${dataAttribute}="${id}"` : dataAttribute;
  const modeText = advanced ? t("threatModeSimple") : t("threatModeAdvanced");
  const stateText = advanced ? t("threatSimple") : t("threatAdvanced");
  return `<button class="mode-switch ${advanced ? "active" : ""}" type="button" role="switch" aria-checked="${advanced ? "true" : "false"}" ${attr}>
    <span class="mode-switch-track" aria-hidden="true"><span></span></span>
    <span class="mode-switch-text"><strong>${modeText}</strong><small>${stateText}</small></span>
  </button>`;
}

function threatSetControlsHtml(target, slot) {
  return `<div class="threat-tools ${threatAdvanced ? "active" : ""}">
    ${advancedModeSwitchHtml(threatAdvanced, "data-threat-advanced")}
    ${threatAdvanced ? advancedSlotEditorHtml(target, slot, "threatTarget", target.id, true) : ""}
  </div>`;
}

function majorThreatSetControlsHtml(mon) {
  const advanced = majorThreatAdvancedIds.has(mon.id);
  const slot = majorThreatSlot(mon);
  return `<div class="threat-tools counter-threat-tools">
    ${advancedModeSwitchHtml(advanced, "data-major-advanced", mon.id)}
    ${advanced ? advancedSlotEditorHtml(mon, slot, "majorThreat", mon.id, true) : ""}
  </div>`;
}

function threatCounterControlsHtml(mon) {
  if (!threatAdvanced) return "";
  const advanced = threatCounterAdvancedIds.has(mon.id);
  const slot = threatCounterSlot(mon);
  return `<div class="threat-tools counter-threat-tools">
    ${advancedModeSwitchHtml(advanced, "data-threat-counter-advanced", mon.id)}
    ${advanced ? advancedSlotEditorHtml(mon, slot, "threatCounter", mon.id, true) : ""}
  </div>`;
}

function advancedSlotByScope(scope, id) {
  const mon = findPokemon(id);
  if (!mon) return null;
  if (scope === "threatTarget") return customSlotFor(threatTargetCustomSlots, mon);
  if (scope === "threatCounter") return customSlotFor(threatCounterCustomSlots, mon);
  if (scope === "majorThreat") return customSlotFor(majorThreatCustomSlots, mon);
  return null;
}

function setAdvancedSp(scope, id, stat, rawValue) {
  const slot = advancedSlotByScope(scope, id);
  if (!slot || !STAT_KEYS.includes(stat)) return;
  const otherTotal = STAT_KEYS
    .filter((key) => key !== stat)
    .reduce((sum, key) => sum + Number(slot.sp[key] || 0), 0);
  const maxForStat = clamp(MAX_SP - otherTotal, 0, MAX_SP_STAT);
  slot.sp[stat] = clamp(Number(rawValue || 0), 0, maxForStat);
}

function wireAdvancedSlotControls(root) {
  root.querySelectorAll("[data-advanced-nature]").forEach((select) => {
    select.addEventListener("change", () => {
      const slot = advancedSlotByScope(select.dataset.advancedScope, select.dataset.advancedId);
      if (!slot) return;
      slot.nature = select.value;
      renderAll();
    });
  });
  root.querySelectorAll("[data-advanced-sp]").forEach((input) => {
    input.addEventListener("change", () => {
      setAdvancedSp(input.dataset.advancedScope, input.dataset.advancedId, input.dataset.advancedSp, input.value);
      renderAll();
    });
  });
}

function renderThreatCounters() {
  const query = els.threatSearch.value.trim();
  if (!query) {
    els.threatResults.innerHTML = `<div class="editor-empty compact">${selectedLanguage === "es" ? "Selecciona un Pokémon del equipo o escribe una amenaza para ver counters claros por daño, velocidad, resistencias y utilidad." : "Select a team Pokémon or type a threat to see clear counters by damage, Speed, resistances, and utility."}</div>`;
    return;
  }

  const target = findPokemon(query);
  if (!target) {
    els.threatResults.innerHTML = `<div class="editor-empty compact">${selectedLanguage === "es" ? "No encuentro ese Pokémon en la Pokédex Champions." : "I cannot find that Pokémon in the Champions Pokédex."}</div>`;
    return;
  }

  const targetSlot = targetThreatSlot(target);
  const counters = analyzeThreatCounters(target, targetSlot, threatAdvanced).slice(0, 8);
  els.threatResults.innerHTML = `
    <div class="threat-target">
      <span class="threat-target-label">${t("threatTargetLabel")}</span>
      <span class="sprite-frame"><img src="${pokemonSprite(target)}" alt="${target.name}" data-fallback="${plannerSprite(target)}"></span>
      <div>
        <div class="threat-target-head">
          <strong>${target.name}</strong>
          <span class="mini threat-usage">${selectedLanguage === "es" ? "uso" : "usage"} ${pokemonUsage(target).toFixed(2)}%</span>
          ${typeIconRow(target.types)}
        </div>
        ${baseStatsHtml(target, true)}
        ${targetSetSummaryHtml(target, targetSlot, threatAdvanced)}
        ${threatSetControlsHtml(target, targetSlot)}
      </div>
    </div>
    ${counters.map(({ mon, score, reasons, explanation, advice, counterSlot, counterAdvanced }) => `<article class="counter-card">
      <span class="sprite-frame"><img src="${pokemonSprite(mon)}" alt="${mon.name}" data-fallback="${plannerSprite(mon)}"></span>
      <div>
        <span class="suggestion-name">${mon.name}</span>
        <span class="mini">${typeIconRow(mon.types)} · ${Math.round(score)} pts · ${selectedLanguage === "es" ? "uso" : "usage"} ${pokemonUsage(mon).toFixed(2)}%</span>
        ${baseStatsHtml(mon, true)}
        ${targetSetSummaryHtml(mon, counterSlot, counterAdvanced)}
        ${threatCounterControlsHtml(mon)}
        ${collapsibleDetailsHtml(selectedLanguage === "es" ? "Análisis del counter" : "Counter analysis", `<p class="suggestion-explain">${localizeInlineTerms(explanation)}</p>${insightListHtml(advice)}`, "card-details", { detailScope: "threatCounter", detailId: mon.id, open: threatCounterDetailOpenIds.has(mon.id) })}
        <div class="tag-row">${reasons.slice(0, 4).map((reason) => `<span class="tag">${localizeInlineTerms(counterReasonLabel(reason))}</span>`).join("")}</div>
      </div>
    </article>`).join("")}
  `;
  els.threatResults.querySelector("[data-threat-advanced]")?.addEventListener("click", () => {
    threatAdvanced = !threatAdvanced;
    renderThreatCounters();
  });
  els.threatResults.querySelectorAll("[data-threat-counter-advanced]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.threatCounterAdvanced;
      if (threatCounterAdvancedIds.has(id)) threatCounterAdvancedIds.delete(id);
      else threatCounterAdvancedIds.add(id);
      renderThreatCounters();
    });
  });
  wireDetailOpenState(els.threatResults, "threatCounter", threatCounterDetailOpenIds);
  wireDetailsPersistence(els.threatResults);
  wireAdvancedSlotControls(els.threatResults);
  wireSpriteFallbacks(els.threatResults);
}

function analyzeThreatCounters(target, targetSlot = null, targetAdvanced = false) {
  const defensiveSlot = targetAdvanced ? targetSlot : null;
  const targetStats = defensiveSlot ? calculateStats(target, defensiveSlot) : neutralStats(target);
  const targetMoveTypes = unique((target.moves || []).map((move) => moveInfo(move)?.type).filter(Boolean));
  const targetPopularMoves = popularMoveDetails(target);
  const targetLowerDefense = targetStats.spd <= targetStats.def - 8 ? "Special" : targetStats.def <= targetStats.spd - 8 ? "Physical" : "";

  return uniqueMonsForDisplay(POKEDEX.filter((mon) => mon.id !== target.id))
    .map((mon) => {
      const candidate = analyzeCandidate(mon);
      const counterAdvanced = threatAdvanced && threatCounterAdvancedIds.has(mon.id);
      const counterSlot = counterAdvanced ? threatCounterSlot(mon) : neutralSlotFor(mon);
      const attackingSlot = counterAdvanced ? counterSlot : null;
      const counterMove = bestCounterMove(mon, target, targetLowerDefense, attackingSlot, defensiveSlot);
      const stats = attackingSlot ? calculateStats(mon, attackingSlot) : neutralStats(mon);
      let score = Math.min(pokemonUsage(mon), 12) * 0.7;
      const reasons = [];

      const add = (points, reason) => {
        score += points;
        if (reason) reasons.push(reason);
      };

      if (counterMove) {
        const offenseStat = counterMove.category === "Special" ? stats.spa : stats.atk;
        add((counterMove.multiplier >= 4 ? 42 : 28) + clamp(Math.round((offenseStat - 100) / 4), -18, 18), `${counterMove.move} golpea x${counterMove.multiplier}`);
        if (counterMove.category === targetLowerDefense) add(16, `ataca su defensa ${targetLowerDefense === "Special" ? "especial" : "física"} más débil`);
        if (counterMove.category === "Special" && targetStats.spd < targetStats.def) add(8, "castiga su SpD baja");
        if (counterMove.category === "Physical" && targetStats.def < targetStats.spd) add(8, "castiga su Def baja");
        if (offenseStat < 85) add(-22, "pega por un stat ofensivo bajo");
        if (moveUsageFor(mon, counterMove.move) < 5 && !(mon.moves || []).some((move) => toId(move) === toId(counterMove.move))) add(-6, "depende de cobertura no estándar");
      }

      if (stats.spe > targetStats.spe + 10) add(16, "es más rápido");
      else if (stats.spe >= targetStats.spe) add(8, "no queda por debajo en velocidad");

      const resistsStab = target.types.filter((type) => battleMultiplier(type, mon, target) < 1);
      if (resistsStab.length) add(resistsStab.length * 10, `resiste ${formatTypeList(resistsStab)}`);
      if (resistsStab.length >= target.types.length) add(14, "entra cómodo ante sus STAB");

      const weakToThreat = targetMoveTypes.filter((type) => battleMultiplier(type, mon, target) > 1);
      if (weakToThreat.length) add(-weakToThreat.length * 14, `sufre ${formatTypeList(weakToThreat)}`);

      if (isDoublesFormat() && candidate.setRoles.has("fakeOut")) add(7, "puede ganar turno con Fake Out");
      if (candidateSpeedControlRelevant(candidate, target) && stats.spe < targetStats.spe) add(8, "puede cambiar quién mueve primero");
      if (isDoublesFormat() && candidate.setMoveIds.has("wideguard") && targetPopularMoves.some((entry) => entry.info.role === "spread")) add(10, "puede cubrir daño en área");

      if (!counterMove && reasons.length === 0) reasons.push("respuesta situacional");
      const cleanReasons = unique(reasons).slice(0, 5);
      return {
        mon,
        score,
        reasons: cleanReasons,
        explanation: threatCounterExplanation(mon, target, counterMove, stats, targetStats, cleanReasons),
        advice: threatCounterAdvice(mon, target, counterMove, stats, targetStats, cleanReasons, candidate, targetPopularMoves),
        counterSlot,
        counterAdvanced,
      };
    })
    .sort((a, b) => b.score - a.score);
}

function bestCounterMove(mon, target, preferredCategory = "", attackerSlot = null, defenderSlot = null) {
  const moves = counterMovePool(mon);
  return moves
    .map((move) => {
      const info = moveInfo(move);
      const data = getMoveData(move) || {};
      if (!info || info.category === "Status") return null;
      const calc = estimateNeutralDamage(mon, move, target, attackerSlot, defenderSlot);
      if (!calc) return null;
      const multiplier = calc.multiplier;
      if (multiplier <= 1) return null;
      const stab = mon.types.includes(info.type) ? 18 : 0;
      const categoryFit = preferredCategory && info.category === preferredCategory ? 58 : 0;
      const usage = moveUsageFor(mon, move);
      const setFit = usage >= 25 ? 26 : usage > 0 ? 12 : (mon.moves || []).some((commonMove) => toId(commonMove) === toId(move)) ? 8 : 0;
      const power = data.basePower || moveScore(move, mon.baseStats) || 60;
      const accuracy = data.accuracy === true || data.accuracy === undefined ? 100 : Number(data.accuracy || 100);
      const accuracyFit = (accuracy - 80) * 0.8;
      const attackerStats = attackerSlot ? calculateStats(mon, attackerSlot) : neutralStats(mon);
      const attackStat = info.category === "Special" ? attackerStats.spa : attackerStats.atk;
      const statFit = attackStat * 0.25;
      const badSide = attackStat < 85 ? -28 : 0;
      const koFit = calc.minPercent >= 100 ? 42 : calc.maxPercent >= 100 ? 32 : calc.minPercent >= 50 ? 24 : calc.maxPercent >= 50 ? 16 : calc.maxPercent >= 34 ? 7 : -8;
      return { move, type: info.type, category: info.category, multiplier, usage, calc, value: multiplier * 24 + power * 0.25 + stab + categoryFit + setFit + accuracyFit + statFit + badSide + koFit + calc.maxPercent * 0.55 };
    })
    .filter(Boolean)
    .sort((a, b) => b.value - a.value)[0] || null;
}

function counterMovePool(mon) {
  const usageData = munchStatsForName(mon?.name)?.moveUsage || mon?.moveUsage || {};
  const hasUsageData = Object.keys(usageData).length > 0;
  const legal = (move) => isLegalMoveForMon(mon, move);
  const damaging = (move) => {
    const info = moveInfo(move);
    return info && info.category !== "Status";
  };
  const byUsage = Object.keys(usageData)
    .filter((move) => usageFromMap(usageData, move) >= COUNTER_MOVE_USAGE_MIN)
    .filter((move) => legal(move) && damaging(move));
  if (byUsage.length) return unique(byUsage);

  const lowUsage = Object.keys(usageData)
    .filter((move) => usageFromMap(usageData, move) >= COUNTER_MOVE_FALLBACK_USAGE_MIN)
    .filter((move) => legal(move) && damaging(move));
  if (lowUsage.length) return unique(lowUsage);

  if (hasUsageData) return [];
  return unique(mon.moves || []).filter((move) => legal(move) && damaging(move));
}

function threatCounterExplanation(mon, target, counterMove, stats, targetStats, reasons) {
  if (counterMove) {
    const side = counterMove.category === "Special"
      ? (selectedLanguage === "es" ? "especial" : "special")
      : (selectedLanguage === "es" ? "físico" : "physical");
    const speedText = stats.spe > targetStats.spe
      ? (selectedLanguage === "es" ? " y además es más rápido" : " and is also faster")
      : "";
    const bulkText = counterMove.category === "Special" && targetStats.spd < targetStats.def
      ? (selectedLanguage === "es" ? ", castigando su SpD más baja" : ", punishing its lower SpD")
      : counterMove.category === "Physical" && targetStats.def < targetStats.spd
        ? (selectedLanguage === "es" ? ", castigando su Def más baja" : ", punishing its lower Defense")
        : "";
    return selectedLanguage === "es"
      ? `${mon.name} amenaza a ${target.name} con ${formatMoveWithUsage(counterMove)}, un golpe ${side} supereficaz x${counterMove.multiplier}${bulkText}${speedText}: ${damageSummary(counterMove.calc)}.`
      : `${mon.name} threatens ${target.name} with ${formatMoveWithUsage(counterMove)}, a x${counterMove.multiplier} super-effective ${side} hit${bulkText}${speedText}: ${damageSummary(counterMove.calc)}.`;
  }
  const positive = reasons.find((reason) => !/^sufre/.test(reason));
  return positive
    ? (selectedLanguage === "es" ? `${mon.name} puede funcionar porque ${counterReasonLabel(positive)}.` : `${mon.name} can work because of ${lowerFirst(counterReasonLabel(positive))}.`)
    : (selectedLanguage === "es" ? `${mon.name} es una respuesta de emergencia, no un counter limpio.` : `${mon.name} is an emergency answer, not a clean counter.`);
}

function counterReasonLabel(reason) {
  reason = typeof reason === "string" ? reason : "";
  if (!reason) return "";
  const moveHit = reason.match(/^(.+) golpea x(.+)$/);
  if (moveHit) return selectedLanguage === "es" ? `${moveUiName(moveHit[1])} golpea x${moveHit[2]}` : `${moveUiName(moveHit[1])} hits x${moveHit[2]}`;
  const resists = reason.match(/^resiste (.+)$/);
  if (resists) return selectedLanguage === "es" ? `Resiste ${resists[1]}` : `Resists ${resists[1]}`;
  const suffers = reason.match(/^sufre (.+)$/);
  if (suffers) return selectedLanguage === "es" ? `Sufre ${suffers[1]}` : `Weak to ${suffers[1]}`;
  const map = {
    "ataca su defensa especial más débil": ["Ataca su defensa especial más débil", "Targets lower SpD"],
    "ataca su defensa física más débil": ["Ataca su defensa física más débil", "Targets lower Defense"],
    "castiga su SpD baja": ["Castiga su SpD baja", "Punishes low SpD"],
    "castiga su Def baja": ["Castiga su Def baja", "Punishes low Defense"],
    "pega por un stat ofensivo bajo": ["Pega por un stat ofensivo bajo", "Uses a low attacking stat"],
    "depende de cobertura no estándar": ["Depende de cobertura no estándar", "Needs uncommon coverage"],
    "es más rápido": ["Es más rápido", "Faster"],
    "no queda por debajo en velocidad": ["No queda por debajo en velocidad", "Not slower"],
    "entra cómodo ante sus STAB": ["Entra cómodo ante sus STAB", "Comfortable into STABs"],
    "puede ganar turno con Fake Out": ["Puede ganar turno con Fake Out", "Can buy a turn with Fake Out"],
    "puede cambiar quién mueve primero": ["Puede cambiar quién mueve primero", "Can change turn order"],
    "puede cubrir daño en área": ["Puede cubrir daño en área", "Can cover spread damage"],
    "respuesta situacional": ["Respuesta situacional", "Situational answer"],
  };
  const translated = map[reason];
  return translated ? translated[selectedLanguage === "es" ? 0 : 1] : sentenceCase(reason);
}

function threatCounterAdvice(mon, target, counterMove, stats, targetStats, reasons, candidate, targetPopularMoves) {
  const lines = [];
  const why = counterMove
    ? (selectedLanguage === "es"
      ? `${formatMoveWithUsage(counterMove)} hace ${damageSummary(counterMove.calc)}${stats.spe > targetStats.spe ? " antes de que responda" : ""}`
      : `${formatMoveWithUsage(counterMove)} deals ${damageSummary(counterMove.calc)}${stats.spe > targetStats.spe ? " before it can answer" : ""}`)
    : counterReasonLabel(reasons.find((reason) => /resiste|entra cómodo|Fake Out|velocidad/.test(reason)));
  if (why) lines.push({ label: selectedLanguage === "es" ? "Por qué" : "Why", text: why });

  const plan = counterGamePlan(mon, target, counterMove, stats, targetStats, candidate);
  if (plan) lines.push({ label: selectedLanguage === "es" ? "Cómo jugarlo" : "How to play it", text: plan });

  const caution = counterCaution(mon, target, stats, targetStats, counterMove, targetPopularMoves);
  if (caution) lines.push({ label: selectedLanguage === "es" ? "Cuidado" : "Watch out", text: caution, tone: "warn" });
  return lines.slice(0, 3);
}

function counterGamePlan(mon, target, counterMove, stats, targetStats, candidate) {
  if (isDoublesFormat() && candidate.setMoveIds.has("fakeout")) return selectedLanguage === "es" ? `usa Fake Out para negar el primer turno de ${target.name} o abrir hueco a un doble target` : `use Fake Out to deny ${target.name}'s first turn or create room for a double target`;
  if (candidate.setMoveIds.has("willowisp") && target.baseStats.atk >= target.baseStats.spa && utilityMoveAffectsTarget("Will-O-Wisp", target)) return selectedLanguage === "es" ? `prioriza Will-O-Wisp si ${target.name} suele pegar físico` : `prioritize Will-O-Wisp if ${target.name} usually attacks physically`;
  if (candidate.setMoveIds.has("taunt")) return selectedLanguage === "es" ? `Taunt puede cortar Protect, setup, Trick Room o soporte si ${target.name} depende de utilidad` : `Taunt can stop Protect, setup, Trick Room, or support if ${target.name} relies on utility`;
  if (isDoublesFormat() && candidate.setMoveIds.has("wideguard") && popularMoveDetails(target).some((entry) => entry.info.role === "spread")) return selectedLanguage === "es" ? "Wide Guard obliga al rival a dejar de spamear daño en área" : "Wide Guard forces the opponent to stop freely spamming spread damage";
  if (stats.spe > targetStats.spe && counterMove) return isDoublesFormat()
    ? (selectedLanguage === "es" ? "entra tras un KO, pivot o Protect aliado y amenaza el KO antes de recibir daño" : "bring it in after a KO, pivot, or allied Protect to threaten the KO before taking damage")
    : (selectedLanguage === "es" ? "entra tras un KO, pivot o cambio forzado y amenaza antes de recibir daño" : "bring it in after a KO, pivot, or forced switch and threaten before taking damage");
  if (counterMove?.calc?.maxPercent < 50) return isDoublesFormat()
    ? (selectedLanguage === "es" ? "no basta solo: úsalo como daño previo y acompáñalo de doble target o más presión" : "not enough alone: use it as chip and pair it with double targets or prior damage")
    : (selectedLanguage === "es" ? "no basta solo: úsalo como daño previo y acompáñalo de trampas, presión extra o revenge kill" : "not enough alone: use it as chip with hazards, prior damage, or revenge-kill lines");
  if (counterMove) return isDoublesFormat()
    ? (selectedLanguage === "es" ? "funciona mejor con speed control, Fake Out o redirección para asegurar el golpe" : "works best with speed control, Fake Out, or redirection to secure the hit")
    : (selectedLanguage === "es" ? "funciona mejor con control de velocidad, daño previo o entrando como revenge killer" : "works best with speed control, prior chip, or as a revenge killer");
  return selectedLanguage === "es" ? "úsalo como Pokémon de posicionamiento, no como switch-in automático" : "use it as a positioning Pokémon, not an automatic switch-in";
}

function counterCaution(mon, target, stats, targetStats, counterMove, targetPopularMoves) {
  const dangerous = targetPopularMoves
    .filter((entry) => entry.info.category !== "Status" && battleMultiplier(entry.info.type, mon, target) > 1)
    .slice(0, 2);
  if (dangerous.length) return selectedLanguage === "es" ? `${target.name} puede castigarlo con ${formatMoveList(dangerous)}` : `${target.name} can punish it with ${formatMoveList(dangerous)}`;
  if (stats.spe < targetStats.spe && counterMove) return isDoublesFormat()
    ? (selectedLanguage === "es" ? "necesita Tailwind, Trick Room, Fake Out o Protect para no comerse el golpe primero" : "needs Tailwind, Trick Room, Fake Out, or Protect to avoid taking the hit first")
    : (selectedLanguage === "es" ? "necesita speed control, aguantar el golpe o entrar después de un KO para no recibir primero" : "needs speed control, enough bulk to take the hit, or a post-KO entry to avoid moving second");
  if (counterMove && !counterMove.usage) return selectedLanguage === "es" ? `${moveUiName(counterMove.move)} no aparece como opción común en MunchStats; confirma que el set lo lleva` : `${moveUiName(counterMove.move)} is not a common MunchStats option; confirm the set actually runs it`;
  if (isDoublesFormat() && popularMoveDetails(target).some((entry) => toId(entry.move) === "protect")) return selectedLanguage === "es" ? "ten presente Protect: a veces conviene doblar al compañero o reposicionar" : "keep Protect in mind: sometimes doubling the partner or repositioning is better";
  return "";
}

function renderCounters() {
  const filled = team.filter((slot) => slot.pokemon);
  if (filled.length < MAX_TEAM) {
    els.counters.innerHTML = `<div class="editor-empty">${selectedLanguage === "es" ? "Completa los 6 slots y te diré qué amenazas populares parecen más incómodas." : "Fill all 6 slots and I will show which popular threats look most awkward."}</div>`;
    return;
  }

  els.counters.innerHTML = analyzeCounters()
    .slice(0, 6)
    .map(({ mon, score, reasons, explanation, advice, targetSlot, advanced }) => `<article class="counter-card">
      <span class="sprite-frame"><img src="${pokemonSprite(mon)}" alt="${mon.name}" data-fallback="${plannerSprite(mon)}"></span>
      <div>
        <span class="suggestion-name">${mon.name}</span>
        <span class="mini">${typeIconRow(mon.types)} · ${selectedLanguage === "es" ? "riesgo" : "risk"} ${Math.round(score)} · ${selectedLanguage === "es" ? "uso" : "usage"} ${pokemonUsage(mon).toFixed(2)}%</span>
        ${baseStatsHtml(mon, true)}
        ${targetSetSummaryHtml(mon, targetSlot, advanced)}
        ${majorThreatSetControlsHtml(mon)}
        ${collapsibleDetailsHtml(selectedLanguage === "es" ? "Análisis de amenaza" : "Threat analysis", `<p class="suggestion-explain">${localizeInlineTerms(explanation)}</p>${insightListHtml(advice)}`, "card-details", { detailScope: "majorThreat", detailId: mon.id, open: majorThreatDetailOpenIds.has(mon.id) })}
        <div class="tag-row">${reasons.slice(0, 4).map((reason) => `<span class="tag">${localizeInlineTerms(majorThreatReasonLabel(reason))}</span>`).join("")}</div>
      </div>
    </article>`)
    .join("");
  els.counters.querySelectorAll("[data-major-advanced]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.majorAdvanced;
      if (majorThreatAdvancedIds.has(id)) majorThreatAdvancedIds.delete(id);
      else majorThreatAdvancedIds.add(id);
      renderCounters();
    });
  });
  wireDetailOpenState(els.counters, "majorThreat", majorThreatDetailOpenIds);
  wireDetailsPersistence(els.counters);
  wireAdvancedSlotControls(els.counters);
}

function analyzeCounters() {
  const filled = team.filter((slot) => slot.pokemon);
  const teamMoveTypes = new Set(filled.flatMap((slot) => slot.moves.map((move) => moveInfo(move)?.type).filter(Boolean)));
  const teamIds = new Set(filled.map((slot) => slot.pokemon.id));
  const avgSpeed = filled.reduce((sum, slot) => sum + calculateStats(slot.pokemon, slot).spe, 0) / filled.length;
  const hasSpeedControl = filled.some((slot) => slot.moves.some((move) => moveInfo(move)?.role === "speedControl"));

  return POKEDEX.filter((mon) => !teamIds.has(mon.id))
    .map((mon) => {
      const advanced = majorThreatAdvancedIds.has(mon.id);
      const targetSlot = majorThreatSlot(mon);
      const targetStats = advanced ? calculateStats(mon, targetSlot) : neutralStats(mon);
      let score = pokemonUsage(mon) * 1.2;
      const reasons = [];
      const attackTypes = unique(mon.moves.map((move) => moveInfo(move)?.type).filter(Boolean));
      const damageAnswers = teamDamageAnswersTo(mon, filled, targetSlot, { advanced });
      const pressured = attackTypes.reduce((count, type) => count + filled.filter((slot) => battleMultiplier(type, { ...slot.pokemon, ability: slot.ability }, mon) > 1).length, 0);
      score += pressured * 5;
      if (pressured >= 4) reasons.push("golpea varias debilidades");

      const covered = damageAnswers.some((answer) => answer.calc.koTurns <= 2 || answer.calc.maxPercent >= 45);
      if (!covered) {
        score += 16;
        reasons.push("poca cobertura directa");
      }

      const monSpeed = targetStats.spe;
      if (monSpeed > avgSpeed + 20 && !hasSpeedControl) {
        score += 12;
        reasons.push("te supera en velocidad");
      }
      if (mon.roles.includes("weather") && !roleCounts().weather) {
        score += 8;
        reasons.push("clima incómodo");
      }
      if (isDoublesFormat() && mon.roles.includes("redirection") && !teamMoveTypes.has("Flying") && !teamMoveTypes.has("Poison")) {
        score += 5;
        reasons.push("redirección molesta");
      }
      if (reasons.length === 0) reasons.push("amenaza muy usada");
      const cleanReasons = unique(reasons);
      return {
        mon,
        score,
        reasons: cleanReasons,
        explanation: majorThreatExplanation(mon, cleanReasons, filled),
        advice: majorThreatAdvice(mon, cleanReasons, filled, targetSlot, advanced),
        targetSlot,
        advanced,
      };
    })
    .sort((a, b) => b.score - a.score);
}

function majorThreatExplanation(mon, reasons, filled) {
  const attackLine = reasons.includes("golpea varias debilidades")
    ? (selectedLanguage === "es" ? `${mon.name} amenaza demasiados slots de tu equipo con sus tipos de ataque habituales.` : `${mon.name} threatens too many slots on your team with its common attacking types.`)
    : (selectedLanguage === "es" ? `${mon.name} aparece como amenaza por uso y por cómo encaja contra tu equipo.` : `${mon.name} shows up as a threat because of usage and how it lines up into your team.`);
  const coverage = reasons.includes("poca cobertura directa")
    ? (selectedLanguage === "es" ? " Tu equipo no muestra una respuesta supereficaz clara en los moves actuales." : " Your current moves do not show a clear super-effective answer.")
    : "";
  const speed = reasons.includes("te supera en velocidad")
    ? (selectedLanguage === "es" ? " Además puede jugar por delante si no impones Tailwind, Trick Room o prioridad." : " It can also move first if you do not impose Tailwind, Trick Room, or priority.")
    : "";
  return `${attackLine}${coverage}${speed}`;
}

function majorThreatAdvice(mon, reasons, filled, targetSlot = null, advanced = false) {
  const answers = teamAnswersTo(mon, filled, targetSlot, advanced);
  const lines = [];
  if (answers.damage.length) {
    lines.push({ label: selectedLanguage === "es" ? "Cómo frenarlo" : "How to stop it", text: selectedLanguage === "es" ? `${answers.damage.slice(0, 2).join(" o ")} son tus líneas de daño más claras` : `${answers.damage.slice(0, 2).join(" or ")} are your clearest damage lines` });
  } else {
    lines.push({ label: selectedLanguage === "es" ? "Cómo frenarlo" : "How to stop it", text: isDoublesFormat()
      ? (selectedLanguage === "es" ? "busca doble target, daño previo o añade cobertura supereficaz en un slot flexible" : "look for a double target, prior chip, or add super-effective coverage in a flexible slot")
      : (selectedLanguage === "es" ? "busca daño previo, trampas, revenge kill o añade cobertura supereficaz en un slot flexible" : "look for chip, hazards, revenge-kill lines, or add super-effective coverage in a flexible slot"), tone: "warn" });
  }
  if (answers.utility.length) lines.push({ label: selectedLanguage === "es" ? "Apoyo útil" : "Useful support", text: answers.utility.slice(0, 2).join(". ") });
  const caution = majorThreatCaution(mon, reasons, filled);
  if (caution) lines.push({ label: selectedLanguage === "es" ? "Cuidado" : "Watch out", text: caution, tone: "warn" });
  return lines.slice(0, 3);
}

function majorThreatReasonLabel(reason) {
  const map = {
    "golpea varias debilidades": ["Golpea varias debilidades", "Hits several weaknesses"],
    "poca cobertura directa": ["Poca cobertura directa", "Low direct coverage"],
    "te supera en velocidad": ["Te supera en velocidad", "Outspeeds you"],
    "clima incómodo": ["Clima incómodo", "Awkward weather"],
    "redirección molesta": ["Redirección molesta", "Annoying redirection"],
    "amenaza muy usada": ["Amenaza muy usada", "Very common threat"],
  };
  const translated = map[reason];
  return translated ? translated[selectedLanguage === "es" ? 0 : 1] : sentenceCase(reason);
}

function teamAnswersTo(target, slots, targetSlot = null, advanced = false) {
  const damage = teamDamageAnswersTo(target, slots, targetSlot, { advanced }).map((answer) => selectedLanguage === "es"
    ? `${answer.mon.name} con ${moveUiName(answer.move)} (${damageSummary(answer.calc)}${answer.speedText ? `, ${answer.speedText}` : ""})`
    : `${answer.mon.name} with ${moveUiName(answer.move)} (${damageSummary(answer.calc)}${answer.speedText ? `, ${answer.speedText}` : ""})`);
  const utility = [];
  for (const slot of slots) {
    const stats = calculateStats(slot.pokemon, slot);
    for (const move of slot.moves.filter(Boolean)) {
      const info = moveInfo(move);
      if (!info) continue;
      if (info.role === "speedControl" && speedControlMoveUsefulAgainst(move, target, targetSlot, slot)) utility.push(selectedLanguage === "es" ? `${slot.pokemon.name} puede cambiar el orden de turnos con ${moveUiName(move)}` : `${slot.pokemon.name} can change turn order with ${moveUiName(move)}`);
      if (isDoublesFormat() && info.role === "fakeOut") utility.push(selectedLanguage === "es" ? `${slot.pokemon.name} puede comprar un turno con Fake Out` : `${slot.pokemon.name} can buy a turn with Fake Out`);
      if (toId(move) === "willowisp" && target.baseStats.atk >= target.baseStats.spa && utilityMoveAffectsTarget(move, target, targetSlot, slot)) utility.push(selectedLanguage === "es" ? `${slot.pokemon.name} puede quemarlo con ${moveUiName(move)}` : `${slot.pokemon.name} can burn it with ${moveUiName(move)}`);
      if (isDoublesFormat() && toId(move) === "wideguard" && popularMoveDetails(target).some((entry) => entry.info.role === "spread")) utility.push(selectedLanguage === "es" ? `${slot.pokemon.name} puede negar daño en área con ${moveUiName(move)}` : `${slot.pokemon.name} can block spread damage with ${moveUiName(move)}`);
    }
    if ((slot.ability || slot.pokemon.popularAbility) === "Intimidate" && target.baseStats.atk >= target.baseStats.spa) {
      utility.push(selectedLanguage === "es" ? `${slot.pokemon.name} baja presión física con Intimidate` : `${slot.pokemon.name} lowers physical pressure with Intimidate`);
    }
  }
  return { damage: unique(damage), utility: unique(utility) };
}

function candidateSpeedControlRelevant(candidate, target) {
  const moveIds = candidate?.setMoveIds || new Set();
  if (["tailwind", "trickroom"].some((id) => moveIds.has(id))) return true;
  return ["icywind", "electroweb", "thunderwave", "glare", "stunspore"].some((id) => moveIds.has(id) && utilityMoveAffectsTarget(id, target));
}

function speedControlMoveUsefulAgainst(move, target, targetSlot = null, attackerSlot = null) {
  const id = toId(move);
  if (["tailwind", "trickroom"].includes(id)) return true;
  return utilityMoveAffectsTarget(move, target, targetSlot, attackerSlot);
}

function utilityMoveAffectsTarget(move, target, targetSlot = null, attackerSlot = null) {
  if (!target) return false;
  const id = toId(move);
  const info = moveInfo(move);
  const targetEntity = {
    ...target,
    ability: targetSlot?.ability || target.popularAbility || target.abilities?.[0] || "",
  };
  const attackerEntity = attackerSlot?.pokemon
    ? { ...attackerSlot.pokemon, ability: attackerSlot.ability || attackerSlot.pokemon.popularAbility || attackerSlot.pokemon.abilities?.[0] || "" }
    : null;
  const types = new Set(target.types || []);
  const abilities = new Set(abilityIds(targetEntity));
  const attackerAbilities = new Set(abilityIds(attackerEntity));
  const targetItemId = toId(targetSlot?.item || "");
  const hasAnyAbility = (ids) => ids.some((ability) => abilities.has(ability));
  const magicBounceMoves = new Set(["willowisp", "thunderwave", "toxic", "spore", "sleeppowder", "stunspore", "leechseed", "taunt", "encore", "disable"]);
  if (magicBounceMoves.has(id) && abilities.has("magicbounce")) return false;
  if (info?.category === "Status" && attackerAbilities.has("prankster") && types.has("Dark") && magicBounceMoves.has(id)) return false;

  if (id === "thunderwave") {
    if (types.has("Ground") || types.has("Electric")) return false;
    return !hasAnyAbility(["limber", "voltabsorb", "lightningrod", "motordrive"]);
  }
  if (id === "glare") {
    if (types.has("Electric")) return false;
    return !hasAnyAbility(["limber"]);
  }
  if (id === "stunspore") {
    if (types.has("Electric") || !powderMoveAffectsTarget(types, abilities, targetItemId)) return false;
    return !hasAnyAbility(["limber"]);
  }
  if (id === "willowisp") {
    if (types.has("Fire")) return false;
    return !hasAnyAbility(["waterveil", "waterbubble", "thermalexchange", "flashfire"]);
  }
  if (["toxic", "toxicthread", "poisonpowder"].includes(id)) {
    if (types.has("Poison") || types.has("Steel")) return false;
    return !hasAnyAbility(["immunity", "pastelveil"]);
  }
  if (["spore", "sleeppowder"].includes(id)) {
    if (!powderMoveAffectsTarget(types, abilities, targetItemId)) return false;
    return !hasAnyAbility(["insomnia", "vitalspirit", "sweetveil"]);
  }
  if (id === "leechseed") return !types.has("Grass");

  if (info?.category !== "Status" && info?.role === "speedControl") {
    if (battleMultiplier(info.type, targetEntity, attackerEntity) === 0) return false;
    if (hasAnyAbility(["clearbody", "whitesmoke", "fullmetalbody", "mirrorarmor"])) return false;
    if (targetItemId === "covertcloak") return false;
  }
  return true;
}

function powderMoveAffectsTarget(types, abilities, itemId) {
  if (types.has("Grass")) return false;
  if (abilities.has("overcoat") || itemId === "safetygoggles") return false;
  return true;
}

function teamDamageAnswersTo(target, slots, targetSlot = null, options = {}) {
  const advanced = Boolean(options.advanced);
  const defensiveSlot = advanced ? targetSlot : null;
  const targetStats = defensiveSlot ? calculateStats(target, defensiveSlot) : neutralStats(target);
  return slots
    .flatMap((slot) => {
      const attackingSlot = advanced ? slot : null;
      const stats = attackingSlot ? calculateStats(slot.pokemon, attackingSlot) : neutralStats(slot.pokemon);
      return slot.moves.filter(Boolean).map((move) => {
        const calc = estimateNeutralDamage(slot.pokemon, move, target, attackingSlot, defensiveSlot);
        if (!calc || calc.multiplier <= 1) return null;
        const speedText = stats.spe >= targetStats.spe
          ? (selectedLanguage === "es" ? "ataca antes" : "moves first")
          : (selectedLanguage === "es" ? "con apoyo de velocidad" : "with speed support");
        return { mon: slot.pokemon, move, calc, speedText, score: calc.maxPercent + (calc.koTurns <= 2 ? 30 : 0) + (stats.spe >= targetStats.spe ? 8 : 0) };
      }).filter(Boolean);
    })
    .filter((answer) => answer.calc.maxPercent >= 28 || answer.calc.koTurns <= 3)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}

function majorThreatCaution(mon, reasons, filled) {
  const popular = popularMoveDetails(mon);
  const spread = popular.find((entry) => entry.info.role === "spread");
  if (spread) return isDoublesFormat()
    ? (selectedLanguage === "es" ? `su ${formatMoveWithUsage(spread)} presiona a los dos slots y castiga cambios dobles` : `${formatMoveWithUsage(spread)} pressures both slots and punishes double switches`)
    : (selectedLanguage === "es" ? `su ${formatMoveWithUsage(spread)} fuerza cambios y castiga entrar sin resistencia` : `${formatMoveWithUsage(spread)} forces switches and punishes entries without a resistance`);
  const setup = popular.find((entry) => ["setup", "speedControl"].includes(entry.info.role));
  if (setup) return selectedLanguage === "es" ? `no le regales turno libre: ${formatMoveWithUsage(setup)} puede cambiar el ritmo` : `do not give it a free turn: ${formatMoveWithUsage(setup)} can change the tempo`;
  if (reasons.includes("poca cobertura directa")) return isDoublesFormat()
    ? (selectedLanguage === "es" ? "si no puedes pegarle supereficaz, juega a negar turnos con Fake Out, Protect y posicionamiento" : "if you cannot hit it super effectively, deny turns with Fake Out, Protect, and positioning")
    : (selectedLanguage === "es" ? "si no puedes pegarle supereficaz, necesitas daño previo, trampas o una línea clara de revenge kill" : "if you cannot hit it super effectively, you need chip, hazards, or a clear revenge-kill line");
  return "";
}

function calculateStats(mon, slot) {
  const nature = NATURES[slot.nature] || {};
  return Object.fromEntries(
    STAT_KEYS.map((key) => {
      const sp = Number(slot.sp?.[key] || 0);
      const ev = championsSpToEffectiveEv(sp);
      const base = mon.baseStats[key];
      if (key === "hp") {
        return [key, Math.floor(((2 * base + IV + Math.floor(ev / 4)) * LEVEL) / 100) + LEVEL + 10];
      }
      let value = Math.floor(((2 * base + IV + Math.floor(ev / 4)) * LEVEL) / 100) + 5;
      if (nature.up === key) value = Math.floor(value * 1.1);
      if (nature.down === key) value = Math.floor(value * 0.9);
      return [key, value];
    })
  );
}

function championsSpToEffectiveEv(sp) {
  const points = clamp(Number(sp || 0), 0, MAX_SP_STAT);
  return points >= MAX_SP_STAT ? 252 : Math.round(points * 8);
}

function neutralStats(mon) {
  return calculateStats(mon, { nature: "Hardy", sp: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 } });
}

function estimateNeutralDamage(attacker, move, defender, attackerSlot = null, defenderSlot = null) {
  const info = moveInfo(move);
  const data = getMoveData(move) || {};
  if (!info || info.category === "Status") return null;
  const power = calcBasePower(move, data);
  if (!power) return null;

  const attackerStats = attackerSlot ? calculateStats(attacker, attackerSlot) : neutralStats(attacker);
  const defenderStats = defenderSlot ? calculateStats(defender, defenderSlot) : neutralStats(defender);
  const calcMode = attackerSlot || defenderSlot ? "advanced" : "neutral";
  const atkStat = info.category === "Special" ? attackerStats.spa : attackerStats.atk;
  const defStat = info.category === "Special" ? defenderStats.spd : defenderStats.def;
  const attackerAbility = attackerSlot?.ability || attacker.popularAbility || attacker.abilities?.[0] || "";
  const defenderAbility = defenderSlot?.ability || defender.popularAbility || defender.abilities?.[0] || "";
  const attackerEntity = { ...attacker, ability: attackerAbility };
  const defenderEntity = { ...defender, ability: defenderAbility };
  const multiplier = battleMultiplier(info.type, defenderEntity, attackerEntity);
  if (multiplier === 0) {
    return { min: 0, max: 0, minPercent: 0, maxPercent: 0, hp: defenderStats.hp, multiplier: 0, ko: "inmune", koTurns: Infinity, mode: calcMode };
  }

  const hits = moveHits(data);
  const baseDamage = Math.floor(Math.floor(Math.floor((Math.floor((2 * LEVEL) / 5) + 2) * power * atkStat / Math.max(defStat, 1)) / 50) + 2);
  const stab = attacker.types.includes(info.type) ? (toId(attackerAbility) === "adaptability" ? 2 : 1.5) : 1;
  const spread = isDoublesFormat() && isSpreadDamageMove(move, info, data) ? 0.75 : 1;
  const ability = offensiveAbilityModifier(move, info, data, attackerAbility, power);
  const modifier = stab * multiplier * spread * ability;
  const min = Math.max(1, Math.floor(baseDamage * modifier * 0.85)) * hits;
  const max = Math.max(1, Math.floor(baseDamage * modifier)) * hits;
  const hp = defenderStats.hp;
  const minPercent = Math.min(999, (min / hp) * 100);
  const maxPercent = Math.min(999, (max / hp) * 100);
  return { min, max, minPercent, maxPercent, hp, multiplier, ko: koLabel(minPercent, maxPercent), koTurns: koTurns(maxPercent), mode: calcMode };
}

function calcBasePower(move, data) {
  const power = Number(data?.basePower || 0);
  if (power > 0) return power;
  const id = toId(move);
  if (["lowkick", "grassknot", "heavyslam", "heatcrash"].includes(id)) return 80;
  if (["lastrespects", "ragefist"].includes(id)) return 100;
  return 0;
}

function moveHits(data) {
  const hits = data?.multihit;
  if (Array.isArray(hits)) return hits[0] === hits[1] ? hits[0] : Math.round((hits[0] + hits[1]) / 2);
  return Number(hits || 1);
}

function isSpreadDamageMove(move, info, data = {}) {
  const role = info.role || inferMoveRole(move, data);
  return role === "spread" || ["allAdjacent", "allAdjacentFoes", "all"].includes(data.target);
}

function offensiveAbilityModifier(move, info, data, ability, power) {
  const id = toId(ability);
  const flags = data.flags || {};
  let modifier = 1;
  if (id === "technician" && power <= 60) modifier *= 1.5;
  if (id === "toughclaws" && flags.contact) modifier *= 1.3;
  if (id === "sharpness" && flags.slicing) modifier *= 1.5;
  if (id === "strongjaw" && flags.bite) modifier *= 1.5;
  if (id === "ironfist" && flags.punch) modifier *= 1.2;
  if (id === "megalauncher" && flags.pulse) modifier *= 1.5;
  if (id === "sheerforce" && data.secondary) modifier *= 1.3;
  return modifier;
}

function koTurns(maxPercent) {
  if (maxPercent <= 0) return Infinity;
  return Math.ceil(100 / maxPercent);
}

function koLabel(minPercent, maxPercent) {
  if (minPercent >= 100) return "OHKO";
  if (maxPercent >= 100) return selectedLanguage === "es" ? "posible OHKO" : "possible OHKO";
  if (minPercent >= 50) return "2HKO";
  if (maxPercent >= 50) return selectedLanguage === "es" ? "posible 2HKO" : "possible 2HKO";
  const turns = koTurns(maxPercent);
  return Number.isFinite(turns) ? `${turns}HKO` : (selectedLanguage === "es" ? "sin daño" : "no damage");
}

function damageSummary(calc) {
  if (!calc) return selectedLanguage === "es" ? "daño sin calcular" : "damage not calculated";
  if (calc.multiplier === 0) return selectedLanguage === "es" ? "0% (inmune)" : "0% (immune)";
  const mode = calc.mode === "advanced"
    ? (selectedLanguage === "es" ? "calc. avanzado" : "advanced calc.")
    : (selectedLanguage === "es" ? "calc. neutro" : "neutral calc.");
  return `${formatDamagePercent(calc.minPercent)}-${formatDamagePercent(calc.maxPercent)}% (${calc.ko}, ${mode})`;
}

function formatDamagePercent(value) {
  return Number(value || 0).toFixed(1).replace(/\.0$/, "");
}

function exportShowdown() {
  return team
    .filter((slot) => slot.pokemon)
    .map((slot) => {
      const lines = [`${showdownPokemonName(slot.pokemon)}${slot.item ? ` @ ${slot.item}` : ""}`];
      if (slot.ability) lines.push(`Ability: ${slot.ability}`);
      lines.push(`Level: 50`);
      const spLine = STAT_KEYS.filter((key) => slot.sp[key] > 0).map((key) => `${slot.sp[key]} ${STAT_LABELS[key]}`).join(" / ");
      if (spLine) lines.push(`EVs: ${spLine}`);
      lines.push(`${slot.nature} Nature`);
      slot.moves.filter(Boolean).forEach((move) => lines.push(`- ${move}`));
      return lines.join("\n");
    })
    .join("\n\n");
}

function showdownPokemonName(mon) {
  const name = mon?.name || "";
  const megaPrefix = name.match(/^Mega (.+?)(?: ([XY]))?$/);
  if (megaPrefix) return `${megaPrefix[1]}-Mega${megaPrefix[2] ? `-${megaPrefix[2]}` : ""}`;

  const megaSuffix = name.match(/^(.+)-Mega(?:-([XY]))?$/);
  if (megaSuffix) return `${megaSuffix[1]}-Mega${megaSuffix[2] ? `-${megaSuffix[2]}` : ""}`;

  const rotomPrefix = name.match(/^(Heat|Wash|Frost|Fan|Mow) Rotom$/);
  if (rotomPrefix) return `Rotom-${rotomPrefix[1]}`;

  const paldeanTauros = name.match(/^(Combat|Blaze|Aqua) Tauros$/);
  if (paldeanTauros) return `Tauros-Paldea-${paldeanTauros[1]}`;

  const prefixedRegional = name.match(/^(Alolan|Galarian|Hisuian|Paldean)\s+(.+)$/);
  if (prefixedRegional) {
    const region = { Alolan: "Alola", Galarian: "Galar", Hisuian: "Hisui", Paldean: "Paldea" }[prefixedRegional[1]];
    return `${prefixedRegional[2]}-${region}`;
  }

  return name;
}

function importShowdown(text) {
  const blocks = text.split(/\n\s*\n/g).map((block) => block.trim()).filter(Boolean).slice(0, MAX_TEAM);
  for (let i = 0; i < MAX_TEAM; i++) team[i] = emptySlot();
  let insertIndex = 0;
  const importedIds = new Set();
  blocks.forEach((block) => {
    if (insertIndex >= MAX_TEAM) return;
    const lines = block.split(/\n/g).map((line) => line.trim()).filter(Boolean);
    const header = lines[0] || "";
    const name = header.split("@")[0].replace(/\(.*\)/g, "").trim();
    const importedItem = header.includes("@") ? normalizeItemName(header.split("@").slice(1).join("@").trim()) : "";
    let mon = findPokemon(name);
    const megaName = importedItem ? megaNameFromStone(importedItem) : "";
    if (megaName) mon = findPokemon(megaName) || mon;
    if (!mon) return;
    if (importedIds.has(mon.id)) return;
    importedIds.add(mon.id);
    const slot = emptySlot();
    slot.pokemon = mon;
    applyPopularSet(slot, mon);
    if (importedItem && isChampionsItem(importedItem, mon)) slot.item = importedItem;
    const moves = [];
    for (const line of lines.slice(1)) {
      if (/^Ability:/i.test(line)) {
        const ability = line.replace(/^Ability:/i, "").trim();
        if (!slot.pokemon.abilities?.length || slot.pokemon.abilities.some((known) => toId(known) === toId(ability))) slot.ability = ability;
      }
      else if (/Nature$/i.test(line)) {
        const nature = natureName(line.replace(/\s*Nature/i, "").trim());
        if (nature) slot.nature = nature;
      }
      else if (/^(SPs|EVs):/i.test(line)) slot.sp = parseSpread(line);
      else if (line.startsWith("-")) moves.push(line.replace(/^-+\s*/, "").trim());
      else if (isImportedMoveLine(line)) moves.push(line);
    }
    if (moves.length) slot.moves = [...moves, "", "", "", ""].slice(0, 4);
    slot.moves = sanitizeMovesForSlot(slot);
    team[insertIndex] = slot;
    insertIndex += 1;
  });
  selectedSlot = team.findIndex((slot) => slot.pokemon);
  if (selectedSlot < 0) selectedSlot = 0;
  threatSearchMode = "auto";
  syncThreatSearchFromSelected();
}

function parseSpread(line) {
  const isEv = /^EVs:/i.test(line);
  const spread = { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
  const map = { hp: "hp", atk: "atk", attack: "atk", def: "def", spa: "spa", spatk: "spa", spd: "spd", spdef: "spd", spe: "spe", speed: "spe" };
  const body = line.replace(/^(SPs|EVs):/i, "");
  const parts = body.split("/").map((part) => part.trim()).map((part) => {
    const match = part.trim().match(/(\d+)\s+(.+)/);
    if (!match) return null;
    const value = Number(match[1]);
    const key = map[toId(match[2])];
    return key ? { key, value } : null;
  }).filter(Boolean);
  const looksLikeChampionSp = isEv && parts.length > 0 && parts.every((part) => part.value <= MAX_SP_STAT);
  parts.forEach(({ key, value }) => {
    spread[key] = clamp(isEv && !looksLikeChampionSp ? Math.round(value / 8) : value, 0, MAX_SP_STAT);
  });
  return spread;
}

function isImportedMoveLine(line) {
  if (!line || line.includes(":")) return false;
  if (/^Level\b/i.test(line) || /Nature$/i.test(line)) return false;
  return Boolean(moveInfo(line) || getMoveData(line) || line.split(/\s+/).length <= 4);
}

function megaNameFromStone(item) {
  const data = itemData(item);
  const target = Object.values(data?.megaStone || {})[0];
  if (!target) return "";
  const match = String(target).match(/^(.+)-Mega(?:-([XY]))?$/);
  if (!match) return "";
  const base = match[1].replace(/-/g, " ");
  return `Mega ${base}${match[2] ? ` ${match[2]}` : ""}`;
}

function natureName(name) {
  const id = toId(name);
  return Object.keys(NATURES).find((nature) => toId(nature) === id) || "";
}

function roleCounts() {
  const counts = {};
  for (const slot of team) {
    if (!slot.pokemon) continue;
    for (const role of slot.pokemon.roles) counts[role] = (counts[role] || 0) + 1;
    for (const move of slot.moves) {
      const role = moveInfo(move)?.role;
      if (role) counts[role] = (counts[role] || 0) + 1;
    }
  }
  return counts;
}

function topWeaknesses() {
  const filled = team.filter((slot) => slot.pokemon);
  const types = Object.keys(TYPE_CHART);
  return types
    .map((type) => ({
      type,
      score: filled.reduce((sum, slot) => {
        const multiplier = battleMultiplier(type, { ...slot.pokemon, ability: slot.ability });
        return sum + (multiplier > 1 ? 1 : multiplier === 0 ? -1 : 0);
      }, 0),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);
}

function defensiveMultiplier(attackType, defenderTypes) {
  return defenderTypes.reduce((mult, defType) => mult * (TYPE_CHART[attackType]?.[defType] ?? 1), 1);
}

function battleMultiplier(attackType, defender, attacker = null) {
  const defenderTypes = Array.isArray(defender) ? defender : defender?.types || [];
  const attackerAbilityIds = abilityIds(attacker);
  const defenderAbilityIds = abilityIds(defender);
  const abilityBroken = breaksDefensiveAbilities(attackerAbilityIds);
  let multiplier = defensiveMultiplier(attackType, defenderTypes);

  if (multiplier === 0 && ignoresTypeImmunity(attackType, attackerAbilityIds)) {
    multiplier = defenderTypes.reduce((mult, defType) => {
      const value = TYPE_CHART[attackType]?.[defType] ?? 1;
      return mult * (value === 0 ? 1 : value);
    }, 1);
  }

  if (!abilityBroken) {
    if (isAbilityImmune(attackType, defenderAbilityIds)) return 0;
    multiplier *= abilityDamageModifier(attackType, defenderAbilityIds, multiplier);
  }

  return multiplier;
}

function abilityIds(entity) {
  if (!entity) return [];
  if (Array.isArray(entity)) return entity.map(toId);
  if (entity.ability) return [toId(entity.ability)];
  return (entity.abilities || []).map(toId);
}

function breaksDefensiveAbilities(abilityIdList) {
  return abilityIdList.some((id) => ["moldbreaker", "teravolt", "turboblaze", "myceliummight"].includes(id));
}

function ignoresTypeImmunity(attackType, abilityIdList) {
  return ["Normal", "Fighting"].includes(attackType) && abilityIdList.some((id) => ["scrappy", "mindseye", "intrepido", "intrpido"].includes(id));
}

function isAbilityImmune(attackType, abilityIdList) {
  const immunities = {
    Ground: ["levitate", "eartheater"],
    Fire: ["flashfire", "wellbakedbody"],
    Water: ["waterabsorb", "stormdrain", "dryskin"],
    Electric: ["voltabsorb", "lightningrod", "motordrive"],
    Grass: ["sapsipper"],
  };
  return (immunities[attackType] || []).some((id) => abilityIdList.includes(id));
}

function abilityDamageModifier(attackType, abilityIdList, multiplier) {
  let modifier = 1;
  if (["Fire", "Ice"].includes(attackType) && abilityIdList.includes("thickfat")) modifier *= 0.5;
  if (attackType === "Fire" && abilityIdList.includes("heatproof")) modifier *= 0.5;
  if (attackType === "Ghost" && abilityIdList.includes("purifyingsalt")) modifier *= 0.5;
  if (multiplier > 1 && abilityIdList.some((id) => ["filter", "solidrock", "prismarmor"].includes(id))) modifier *= 0.75;
  return modifier;
}

function roleUserCount(roleNames) {
  const names = new Set(roleNames);
  return team.filter((slot) => {
    if (!slot.pokemon) return false;
    const monRoles = slot.pokemon.roles.some((role) => names.has(role));
    const moveRoles = slot.moves.some((move) => names.has(moveInfo(move)?.role));
    return monRoles || moveRoles;
  }).length;
}

function moveRoleUserCount(roleNames) {
  const names = new Set(roleNames);
  return team.filter((slot) => slot.pokemon && slot.moves.some((move) => names.has(moveInfo(move)?.role))).length;
}

function formatUsers(count) {
  if (selectedLanguage === "en") return count === 1 ? "1 user" : `${count} users`;
  return count === 1 ? "1 usuario" : `${count} usuarios`;
}

function repeatedTypeSummary() {
  const counts = countTeamTypes(team.filter((slot) => slot.pokemon).map((slot) => slot.pokemon));
  const repeated = Object.entries(counts).filter(([, count]) => count >= 2);
  if (!repeated.length) return selectedLanguage === "es" ? "Sin repetir" : "No repeats";
  return repeated.map(([type, count]) => `${typeLabel(type)} x${count}`).join(" · ");
}

function typePlannerHtml() {
  const filled = team.filter((slot) => slot.pokemon);
  if (!filled.length) return "";
  const rows = Object.keys(TYPE_CHART).map((type) => {
    const matchups = filled.map((slot) => battleMultiplier(type, { ...slot.pokemon, ability: slot.ability }));
    const weak = matchups.filter((multiplier) => multiplier > 1).length;
    const weak4 = matchups.filter((multiplier) => multiplier >= 4).length;
    const weak2 = weak - weak4;
    const immune = matchups.filter((multiplier) => multiplier === 0).length;
    const resistOnly = matchups.filter((multiplier) => multiplier > 0 && multiplier < 1).length;
    const resist = resistOnly + immune;
    return { type, weak, weak2, weak4, resist, resistOnly, immune };
  });
  const sortedRows = rows.sort((a, b) =>
    b.weak - a.weak ||
    b.weak4 - a.weak4 ||
    b.resist - a.resist ||
    a.type.localeCompare(b.type)
  );
  return `<details class="type-planner type-planner-collapse" data-detail-key="team:type-analysis"${detailsOpenAttr("team:type-analysis")}>
    <summary class="type-planner-head">
      <strong>${selectedLanguage === "es" ? "Análisis de tipos" : "Type analysis"}</strong>
      <span><b>${selectedLanguage === "es" ? "D" : "W"}</b> ${selectedLanguage === "es" ? "débiles" : "weak"} · <b>R</b> ${selectedLanguage === "es" ? "resisten" : "resist"} · <b>I</b> ${selectedLanguage === "es" ? "inmunes" : "immune"}</span>
    </summary>
    <div class="type-planner-body">
      ${typeBalanceSummaryHtml(sortedRows)}
      <div class="type-balance-grid">
        ${sortedRows.map(typeBalanceCardHtml).join("")}
      </div>
    </div>
  </details>`;
}

function typeBalanceSummaryHtml(rows) {
  const risky = rows
    .filter((row) => row.weak > 0)
    .slice(0, 8)
    .map((row) => `${typeLabel(row.type)} ${row.weak}${row.weak4 ? ` (${row.weak4} x4)` : ""}`);
  const covered = [...rows]
    .filter((row) => row.resist > 0)
    .sort((a, b) => b.resist - a.resist || a.weak - b.weak)
    .slice(0, 5)
    .map((row) => `${typeLabel(row.type)} ${row.resist}${row.immune ? `, ${row.immune} ${selectedLanguage === "es" ? "inm" : "imm"}` : ""}`);
  return `<div class="type-balance-summary">
    <span><b>${selectedLanguage === "es" ? "Riesgos" : "Risks"}:</b> ${risky.join(" · ") || (selectedLanguage === "es" ? "sin acumulaciones fuertes" : "no major stacking")}</span>
    <span><b>${selectedLanguage === "es" ? "Entradas" : "Entries"}:</b> ${covered.join(" · ") || (selectedLanguage === "es" ? "faltan resistencias claras" : "no clear resistances")}</span>
  </div>`;
}

function typeBalanceCardHtml(row) {
  const status = row.weak >= 3 || row.weak4 ? "danger" : row.weak ? "warn" : row.resist ? "safe" : "neutral";
  const weakLabel = selectedLanguage === "es" ? "D" : "W";
  return `<div class="type-balance-card ${status}" title="${typeBalanceTitle(row)}">
    ${typeIconHtml(row.type)}
    <span class="balance-badges">
      ${row.weak ? `<span class="balance-badge weak">${weakLabel} ${row.weak}${row.weak4 ? ` · ${row.weak4}x4` : ""}</span>` : ""}
      ${row.resistOnly ? `<span class="balance-badge resist">R ${row.resistOnly}</span>` : ""}
      ${row.immune ? `<span class="balance-badge immune">I ${row.immune}</span>` : ""}
      ${!row.weak && !row.resist ? `<span class="balance-badge neutral">${selectedLanguage === "es" ? "neutral" : "neutral"}</span>` : ""}
    </span>
  </div>`;
}

function typeBalanceTitle(row) {
  const parts = [];
  if (row.weak) parts.push(selectedLanguage === "es" ? `${row.weak} miembros débiles${row.weak4 ? `, ${row.weak4} reciben x4` : ""}` : `${row.weak} weak members${row.weak4 ? `, ${row.weak4} take x4` : ""}`);
  if (row.resistOnly) parts.push(selectedLanguage === "es" ? `${row.resistOnly} resisten` : `${row.resistOnly} resist`);
  if (row.immune) parts.push(selectedLanguage === "es" ? `${row.immune} inmunes` : `${row.immune} immune`);
  return `${typeLabel(row.type)}: ${parts.join(" · ") || (selectedLanguage === "es" ? "sin debilidades ni resistencias relevantes" : "no relevant weaknesses or resistances")}`;
}

function weaknessTableText(row) {
  if (row.weak4 && row.weak2) return `x2 ${row.weak2} · x4 ${row.weak4}`;
  if (row.weak4) return `${row.weak4} x4`;
  return `${row.weak} x2`;
}

function resistanceTableText(row) {
  if (row.immune && row.resistOnly) return `${row.resistOnly} res · ${row.immune} inm`;
  if (row.immune) return `${row.immune} inm`;
  return `${row.resist} res`;
}

function typeTable(title, rows, kind, detailText, helpText) {
  if (!rows.length) return `<section class="type-table type-table-${kind}"><strong>${title}</strong><span class="empty-note">Sin datos relevantes</span></section>`;
  const visibleRows = rows.slice(0, 8);
  const hiddenCount = Math.max(0, rows.length - visibleRows.length);
  return `<section class="type-table type-table-${kind}">
    <div class="type-table-title">
      <strong>${title}</strong>
      <span>${helpText}</span>
    </div>
    <div class="type-table-rows">
      ${visibleRows.map((row) => `<div class="type-table-row">${typeIconHtml(row.type)}<strong>${detailText(row)}</strong></div>`).join("")}
      ${hiddenCount ? `<div class="type-table-row type-table-more"><strong>+${hiddenCount} más</strong></div>` : ""}
    </div>
  </section>`;
}

function typeIconHtml(type, suffix = "", suffixTitle = "") {
  const label = typeLabel(type);
  const suffixHtml = suffix ? `<span class="type-count" title="${suffixTitle || label}">${suffix}</span>` : "";
  return `<span class="type-icon type-${type}" title="${label}" aria-label="${label}">
    <span class="type-name">${label}</span>${suffixHtml}
  </span>`;
}

function typeIconRow(types) {
  return `<span class="type-icon-row">${types.map((type) => typeIconHtml(type)).join("")}</span>`;
}

function baseStatsHtml(mon, labeled = false) {
  if (!mon?.baseStats) return "";
  const stats = [
    ["HP", mon.baseStats.hp],
    ["Atk", mon.baseStats.atk],
    ["Def", mon.baseStats.def],
    ["SpA", mon.baseStats.spa],
    ["SpD", mon.baseStats.spd],
    ["Spe", mon.baseStats.spe],
  ];
  return `<span class="base-stats-line">${labeled ? `<span class="base-stats-label">${selectedLanguage === "es" ? "Stats base" : "Base stats"}</span>` : ""}${stats.map(([label, value]) => `<span><b>${label}</b> ${value}</span>`).join("")}</span>`;
}

function typeLabel(type) {
  if (selectedLanguage === "en") return type;
  return {
    Normal: "Normal",
    Fire: "Fuego",
    Water: "Agua",
    Electric: "Eléctrico",
    Grass: "Planta",
    Ice: "Hielo",
    Fighting: "Lucha",
    Poison: "Veneno",
    Ground: "Tierra",
    Flying: "Volador",
    Psychic: "Psíquico",
    Bug: "Bicho",
    Rock: "Roca",
    Ghost: "Fantasma",
    Dragon: "Dragón",
    Dark: "Siniestro",
    Steel: "Acero",
    Fairy: "Hada",
  }[type] || type;
}

function formatTypeList(types) {
  return types.map(typeLabel).join("/");
}

function weatherLabel(weather) {
  if (selectedLanguage === "en") {
    return {
      Sun: "sun",
      Rain: "rain",
      Sand: "sand",
      Snow: "snow",
    }[weather] || weather;
  }
  return {
    Sun: "sol",
    Rain: "lluvia",
    Sand: "arena",
    Snow: "nieve",
  }[weather] || weather;
}

function pokemonSprite(mon) {
  const name = spriteId(mon.name, mon);
  return `https://play.pokemonshowdown.com/sprites/gen5/${name}.png`;
}

function plannerSprite(mon) {
  if (!mon?.num) return "";
  const num = String(mon.num).padStart(4, "0");
  const form = mon.isMega ? "001" : "000";
  return `https://raw.githubusercontent.com/richi3f/pokemon-team-planner/master/static/img/pokemon/${num}_${form}_mf_n.png`;
}

function wireSpriteFallbacks(root = document) {
  root.querySelectorAll?.("img[data-fallback]").forEach((img) => {
    if (img.dataset.fallbackBound) return;
    img.dataset.fallbackBound = "1";
    img.addEventListener("error", () => fallbackSprite(img));
  });
}

function fallbackSprite(img, fallbackUrl = img?.dataset?.fallback) {
  if (!fallbackUrl || img.dataset.fallbackTried) {
    img.style.display = "none";
    return;
  }
  img.dataset.fallbackTried = "1";
  img.src = fallbackUrl;
}

function spriteId(name, mon = null) {
  const text = String(name || "").toLowerCase();
  const special = {
    "combat tauros": "tauros-paldeacombat",
    "blaze tauros": "tauros-paldeablaze",
    "aqua tauros": "tauros-paldeaaqua",
  }[text];
  if (special) return special;
  const rotomForm = text.match(/^(heat|wash|frost|fan|mow) rotom$/);
  if (rotomForm) return `rotom-${rotomForm[1]}`;
  const mega = text.match(/^mega (.+?)(?: ([xy]))?$/);
  if (mega) {
    const base = mega[1].replace(/[^a-z0-9]+/g, "");
    const suffix = mega[2] || (base === "charizard" && mon?.types.includes("Dragon") ? "x" : base === "charizard" ? "y" : "");
    if (suffix) return `${base}-mega${suffix}`;
    return `${base}-mega`;
  }
  return text
    .replace(/\((.*)\)/g, "-$1")
    .replace("alolan ", "")
    .replace("hisuian ", "")
    .replace("galarian ", "")
    .replace("paldean ", "")
    .replace("charizard-mega-y", "charizard-megay")
    .replace("charizard-mega-x", "charizard-megax")
    .replace("floette-eternal", "floette-eternal")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function itemDatabase() {
  return typeof PS_ITEMS !== "undefined" ? PS_ITEMS : {};
}

function championsItemPool() {
  const common = typeof COMMON_ITEMS !== "undefined" ? COMMON_ITEMS : [];
  return unique(common.map(normalizeItemName).filter((item) => itemData(item)));
}

function availableItemsFor(mon) {
  const megaStone = mon?.isMega ? megaStoneName(mon.name, mon.types) : "";
  if (mon?.isMega) return megaStone ? [normalizeItemName(megaStone)] : [];
  return championsItemPool().filter((item) => !itemData(item)?.megaStone);
}

function defaultItemFor(mon) {
  const available = availableItemsFor(mon);
  const live = munchStatsForName(mon?.name);
  const preferred = [...(live?.items || []), ...(mon.items || [])].map(normalizeItemName).find((item) => available.includes(item));
  const roleSuggestion = normalizeItemName(suggestedItem(mon.roles || [], mon.baseStats || {}));
  return preferred || (available.includes(roleSuggestion) ? roleSuggestion : "") || available[0] || "";
}

function isChampionsItem(item, mon) {
  return availableItemsFor(mon).includes(normalizeItemName(item));
}

function itemData(item) {
  const normalized = normalizeItemName(item);
  return itemDatabase()[toId(normalized)] || null;
}

function isMegaSlot(slot) {
  return Boolean(slot?.pokemon?.isMega || itemData(slot?.item)?.megaStone);
}

function normalizeItemName(item) {
  const text = String(item || "").trim();
  if (!text) return "";
  const aliases = {
    blastoiseite: "Blastoisinite",
    sceptileite: "Sceptilite",
    audinoite: "Audinite",
    glalieite: "Glalitite",
    slowbroite: "Slowbronite",
    altariaite: "Altarianite",
    dragonitite: "Dragoninite",
  };
  const alias = aliases[toId(text)];
  if (alias) return alias;
  return itemDatabase()[toId(text)]?.name || text;
}

function displayItemName(item) {
  return itemData(item)?.name || normalizeItemName(item);
}

function itemIconHtml(item) {
  const data = itemData(item);
  if (typeof data?.spritenum !== "number") return "";
  const x = (data.spritenum % 16) * 16;
  const y = Math.floor(data.spritenum / 16) * 16;
  return `<span class="item-icon" style="background-position: -${x}px -${y}px" aria-hidden="true"></span>`;
}

function roleLabel(role) {
  const singles = !isDoublesFormat();
  if (selectedLanguage === "en") {
    if (singles) {
      const singlesLabels = {
        spreadDamage: "offensive pressure",
        redirection: "defensive utility",
        fakeOut: "early pressure",
        wideGuard: "utility",
      };
      if (singlesLabels[role]) return singlesLabels[role];
    }
    return {
      fakeOut: moveUiName("Fake Out"),
      intimidate: abilityUiName("Intimidate"),
      pivot: "pivot",
      speedControl: "speed control",
      fastOffense: "fast offense",
      bulkyOffense: "bulky offense",
      priority: "priority",
      spreadDamage: "spread damage",
      redirection: "redirection",
      support: "support",
      weather: "weather",
      mega: "Mega",
      specialOffense: "special offense",
      trickRoom: "Trick Room",
      priorityBlock: "priority block",
      rainOffense: "rain",
      sandOffense: "sand",
      sunOffense: "sun",
      antiIntimidate: "anti-Intimidate",
      setup: "setup",
      sleep: "sleep",
      burn: "burn",
      bulkyPivot: "bulky pivot",
    }[role] || role;
  }
  if (singles) {
    const singlesLabels = {
      spreadDamage: "presión ofensiva",
      redirection: "utilidad defensiva",
      fakeOut: "presión inicial",
      wideGuard: "utilidad",
    };
    if (singlesLabels[role]) return singlesLabels[role];
  }
  return {
    fakeOut: moveUiName("Fake Out"),
    intimidate: abilityUiName("Intimidate"),
    pivot: "pivote",
    speedControl: "control de velocidad",
    fastOffense: "ofensiva rápida",
    bulkyOffense: "ofensiva resistente",
    priority: "prioridad",
    spreadDamage: "daño en área",
    redirection: "redirección",
    support: "apoyo",
    weather: "clima",
    mega: "Mega",
    specialOffense: "ofensiva especial",
    trickRoom: moveUiName("Trick Room"),
    priorityBlock: "bloquea prioridad",
    rainOffense: "lluvia",
    sandOffense: "arena",
    sunOffense: "sol",
    antiIntimidate: `anti-${abilityUiName("Intimidate")}`,
    setup: "setup",
    sleep: "sueño",
    burn: "quemaduras",
    bulkyPivot: "pivote resistente",
  }[role] || role;
}

function totalSp(slot) {
  return STAT_KEYS.reduce((sum, key) => sum + Number(slot.sp[key] || 0), 0);
}

function toId(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "");
}

function titleCase(text) {
  return String(text || "").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function sentenceCase(text) {
  const value = String(text || "");
  return value ? value[0].toUpperCase() + value.slice(1) : "";
}

function lowerFirst(text) {
  const value = String(text || "");
  return value ? value[0].toLowerCase() + value.slice(1) : "";
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function unique(items) {
  return [...new Set(items.filter(Boolean))];
}

function persist() {
  localStorage.setItem(
    "champions-core-builder",
    JSON.stringify({
      selectedSlot,
      selectedFormat,
      selectedLanguage,
      team: team.map((slot) => ({ ...slot, pokemon: slot.pokemon?.name || null })),
    })
  );
}

function loadTeam() {
  const saved = localStorage.getItem("champions-core-builder");
  if (!saved) return;
  try {
    const parsed = JSON.parse(saved);
    if (parsed.selectedFormat && hasMunchFormat(parsed.selectedFormat)) selectedFormat = parsed.selectedFormat;
    if (LANGUAGES[parsed.selectedLanguage]) selectedLanguage = parsed.selectedLanguage;
    selectedSlot = parsed.selectedSlot || 0;
    parsed.team?.slice(0, MAX_TEAM).forEach((slot, index) => {
      team[index] = { ...emptySlot(), ...slot, pokemon: slot.pokemon ? findPokemon(slot.pokemon) : null };
    });
  } catch {
    localStorage.removeItem("champions-core-builder");
  }
}


