onEvent('server.datapack.low_priority', (event) => {
    var data = [
        {
            type: 'base',
            recipes: [
                {
                    key: 'iron',
                    category: 'metal',
                    primary: '5',
                    secondary: '3.8',
                    tertiary: '3',
                    durability: '250',
                    integrityCost: '2',
                    integrityGain: '5',
                    magicCapacity: '84',
                    toolLevel: '3',
                    toolEfficiency: '6',
                    tints: { glyph: 'iron_glyph', texture: 'iron' },
                    textures: ['metal', 'default'],
                    material: { item: 'minecraft:iron_ingot' },
                    requiredTools: { hammer: 2 }
                },
                {
                    key: 'gold',
                    category: 'metal',
                    primary: '3',
                    secondary: '4.6',
                    tertiary: '1',
                    durability: '32',
                    integrityCost: '2',
                    integrityGain: '3',
                    magicCapacity: '132',
                    toolLevel: '1',
                    toolEfficiency: '12',
                    tints: { glyph: 'gold_glyph', texture: 'gold' },
                    textures: ['shiny', 'metal', 'default'],
                    material: { item: 'minecraft:gold_ingot' },
                    effects: { stabilizing: 15 },
                    requiredTools: { hammer: 1 }
                },
                {
                    key: 'netherite',
                    category: 'metal',
                    primary: '7.24',
                    secondary: '2.9',
                    tertiary: '3.5',
                    durability: '2031',
                    integrityCost: '2',
                    integrityGain: '8',
                    magicCapacity: '90',
                    toolLevel: '5',
                    toolEfficiency: '9',
                    tints: { glyph: 'netherite_glyph', texture: 'netherite' },
                    textures: ['metal', 'default'],
                    material: { item: 'minecraft:netherite_ingot' },
                    requiredTools: { hammer: 4 }
                },
                {
                    key: 'andesite_alloy',
                    category: 'metal',
                    primary: '5.1',
                    secondary: '3.9',
                    tertiary: '3.2',
                    durability: '275',
                    integrityCost: '2',
                    integrityGain: '5',
                    magicCapacity: '60',
                    toolLevel: '3',
                    toolEfficiency: '6.3',
                    tints: { glyph: '656565', texture: '656565' },
                    textures: ['shiny', 'default'],
                    material: { tag: 'forge:ingots/andesite_alloy', count: 1 },
                    requiredTools: { hammer: 2 }
                }
            ],
            type: 'compat',
            recipes: [
                {
                    key: 'nickel',
                    category: 'metal',
                    primary: '5.5',
                    secondary: '3.8',
                    tertiary: '3',
                    durability: '200',
                    integrityCost: '2',
                    integrityGain: '5',
                    magicCapacity: '72',
                    toolLevel: '3',
                    toolEfficiency: '6',
                    tints: { glyph: 'nickel_glyph', texture: 'nickel' },
                    textures: ['metal', 'default'],
                    material: { tag: 'forge:ingots/nickel' },
                    requiredTools: { hammer: 2 }
                },
                {
                    key: 'lead',
                    category: 'metal',
                    primary: '6',
                    secondary: '5.5',
                    tertiary: '2',
                    durability: '120',
                    integrityCost: '2',
                    integrityGain: '5',
                    magicCapacity: '66',
                    toolLevel: '3',
                    toolEfficiency: '6',
                    tints: { glyph: 'lead_glyph', texture: 'lead' },
                    textures: ['metal', 'default'],
                    material: { tag: 'forge:ingots/lead' },
                    requiredTools: { hammer: 2 }
                },
                {
                    key: 'infused_iron',
                    category: 'metal',
                    primary: '5',
                    secondary: '3.8',
                    tertiary: '3',
                    durability: '250',
                    integrityCost: '2',
                    integrityGain: '5',
                    magicCapacity: '96',
                    toolLevel: '3',
                    toolEfficiency: '6',
                    tints: { glyph: '299831', texture: '187d1d' },
                    textures: ['metal', 'default'],
                    material: { item: 'naturesaura:infused_iron' },
                    improvements: { naturesaura_aura_mending_innate: 1 },
                    requiredTools: { hammer: 2 }
                },
                {
                    key: 'electrum',
                    category: 'metal',
                    primary: '5',
                    secondary: '4.6',
                    tertiary: '1',
                    durability: '58',
                    integrityCost: '2',
                    integrityGain: '1',
                    magicCapacity: '144',
                    toolLevel: '2',
                    toolEfficiency: '13',
                    tints: { glyph: 'electrum_glyph', texture: 'electrum' },
                    textures: ['shiny', 'metal'],
                    material: { tag: 'forge:ingots/electrum' },
                    effects: { stabilizing: 15 },
                    requiredTools: { hammer: 1 }
                },
                {
                    key: 'copper',
                    category: 'metal',
                    primary: '4.5',
                    secondary: '4.2',
                    tertiary: '3',
                    durability: '148',
                    integrityCost: '2',
                    integrityGain: '5',
                    magicCapacity: '78',
                    toolLevel: '3',
                    toolEfficiency: '6',
                    tints: { glyph: 'copper_glyph', texture: 'copper' },
                    textures: ['metal'],
                    material: { tag: 'forge:ingots/copper' },
                    requiredTools: { hammer: 1 }
                },
                {
                    key: 'bronze',
                    category: 'metal',
                    primary: '5',
                    secondary: '3.8',
                    tertiary: '3',
                    durability: '250',
                    integrityCost: '1',
                    integrityGain: '5',
                    magicCapacity: '78',
                    toolLevel: '3',
                    toolEfficiency: '6',
                    tints: { glyph: 'bronze_glyph', texture: 'bronze' },
                    textures: ['metal', 'default'],
                    material: { tag: 'forge:ingots/bronze' },
                    improvements: { workable: 1 },
                    requiredTools: { hammer: 3 }
                },
                {
                    key: 'tin',
                    category: 'metal',
                    primary: '4',
                    secondary: '3.2',
                    tertiary: '3',
                    durability: '126',
                    integrityCost: '1',
                    integrityGain: '5',
                    magicCapacity: '72',
                    toolLevel: '3',
                    toolEfficiency: '6',
                    tints: { glyph: 'tin_glyph', texture: 'tin' },
                    textures: ['metal'],
                    material: { tag: 'forge:ingots/tin' },
                    improvements: { workable: 1 },
                    requiredTools: { hammer: 1 }
                },
                {
                    key: 'steel',
                    category: 'metal',
                    primary: '6',
                    secondary: '3.8',
                    tertiary: '3',
                    durability: '650',
                    integrityCost: '2',
                    integrityGain: '5',
                    magicCapacity: '72',
                    toolLevel: '3',
                    toolEfficiency: '8',
                    tints: { glyph: 'steel_glyph', texture: 'steel' },
                    textures: ['metal', 'default'],
                    material: { tag: 'forge:ingots/steel' },
                    requiredTools: { hammer: 3 }
                },
                {
                    key: 'sky',
                    category: 'metal',
                    primary: '6',
                    secondary: '3',
                    tertiary: '3.5',
                    durability: '1500',
                    integrityCost: '2',
                    integrityGain: '6',
                    magicCapacity: '72',
                    toolLevel: '4',
                    toolEfficiency: '8',
                    tints: { glyph: '00d5c2', texture: '00b59f' },
                    textures: ['metal', 'default'],
                    material: { item: 'naturesaura:sky_ingot' },
                    improvements: { naturesaura_aura_mending_innate: 1 },
                    requiredTools: { hammer: 3 }
                },
                {
                    key: 'silver',
                    category: 'metal',
                    primary: '4',
                    secondary: '4.2',
                    tertiary: '1',
                    durability: '50',
                    integrityCost: '2',
                    integrityGain: '1',
                    magicCapacity: '126',
                    toolLevel: '1',
                    toolEfficiency: '11',
                    tints: { glyph: 'silver_glyph', texture: 'silver' },
                    textures: ['shiny', 'metal'],
                    material: { tag: 'forge:ingots/silver' },
                    effects: { stabilizing: 10 },
                    requiredTools: { hammer: 1 }
                },
                {
                    key: 'osmium',
                    category: 'metal',
                    primary: '7',
                    secondary: '4',
                    tertiary: '1',
                    durability: '500',
                    integrityCost: '2',
                    integrityGain: '5',
                    magicCapacity: '80',
                    toolLevel: '3',
                    toolEfficiency: '10',
                    tints: { glyph: '7d91a0', texture: '7d91a0' },
                    textures: ['metal', 'default'],
                    material: { tag: 'forge:ingots/osmium' },
                    requiredTools: { hammer: 4 }
                },

                {
                    key: 'aluminum',
                    category: 'metal',
                    primary: '4',
                    secondary: '3.1',
                    tertiary: '3.4',
                    durability: '223',
                    integrityCost: '2',
                    integrityGain: '4',
                    magicCapacity: '78',
                    toolLevel: '2',
                    toolEfficiency: '5.5',
                    tints: { glyph: 'ecf1f8', texture: 'ecf1f8' },
                    textures: ['shiny', 'default'],
                    material: { tag: 'forge:ingots/aluminum', count: 1 },
                    requiredTools: { hammer: 2 }
                },
                {
                    key: 'zinc',
                    category: 'metal',
                    primary: '6',
                    secondary: '4.2',
                    tertiary: '2.8',
                    durability: '320',
                    integrityCost: '2',
                    integrityGain: '4',
                    magicCapacity: '86',
                    toolLevel: '2',
                    toolEfficiency: '6',
                    tints: { glyph: 'a4ab6a', texture: 'a4ab6a' },
                    textures: ['shiny', 'default'],
                    material: { tag: 'forge:ingots/zinc', count: 1 },
                    requiredTools: { hammer: 2 }
                },
                {
                    key: 'constantan',
                    category: 'metal',
                    primary: '4',
                    secondary: '3.5',
                    tertiary: '2.8',
                    durability: '232',
                    integrityCost: '2',
                    integrityGain: '4',
                    magicCapacity: '110',
                    toolLevel: '2',
                    toolEfficiency: '7',
                    tints: { glyph: 'd5856a', texture: 'd5856a' },
                    textures: ['shiny', 'default'],
                    material: { tag: 'forge:ingots/constantan', count: 1 },
                    requiredTools: { hammer: 2 }
                },
                {
                    key: 'invar',
                    category: 'metal',
                    primary: '6.5',
                    secondary: '5.7',
                    tertiary: '3.3',
                    durability: '535',
                    integrityCost: '2',
                    integrityGain: '3',
                    magicCapacity: '126',
                    toolLevel: '2',
                    toolEfficiency: '7.5',
                    tints: { glyph: 'b6c2bd', texture: 'b6c2bd' },
                    textures: ['shiny', 'default'],
                    material: { tag: 'forge:ingots/invar', count: 1 },
                    requiredTools: { hammer: 2 }
                },
                {
                    key: 'signalum',
                    category: 'metal',
                    primary: '7.5',
                    secondary: '6',
                    tertiary: '8',
                    durability: '1100',
                    integrityCost: '3',
                    integrityGain: '5',
                    magicCapacity: '152',
                    toolLevel: '3',
                    toolEfficiency: '9.5',
                    tints: { glyph: 'fa631a', texture: 'fa631a' },
                    textures: ['shiny', 'default'],
                    material: { tag: 'forge:ingots/signalum', count: 1 },
                    requiredTools: { hammer: 3 }
                },
                {
                    key: 'lumium',
                    category: 'metal',
                    primary: '4.6',
                    secondary: '4.2',
                    tertiary: '9',
                    durability: '545',
                    integrityCost: '2',
                    integrityGain: '6',
                    magicCapacity: '146',
                    toolLevel: '2',
                    toolEfficiency: '10',
                    tints: { glyph: 'e2f0b3', texture: 'e2f0b3' },
                    textures: ['shiny', 'default'],
                    material: { tag: 'forge:ingots/lumium', count: 1 },
                    requiredTools: { hammer: 2 }
                },
                {
                    key: 'enderium',
                    category: 'metal',
                    primary: '9.5',
                    secondary: '8',
                    tertiary: '8',
                    durability: '1991',
                    integrityCost: '4',
                    integrityGain: '8',
                    magicCapacity: '168',
                    toolLevel: '4',
                    toolEfficiency: '11',
                    tints: { glyph: '0a4949', texture: '0a4949' },
                    textures: ['shiny', 'default'],
                    material: { tag: 'forge:ingots/enderium', count: 1 },
                    requiredTools: { hammer: 4 }
                },
                {
                    key: 'energized_steel',
                    category: 'metal',
                    primary: '5',
                    secondary: '4.6',
                    tertiary: '4',
                    durability: '505',
                    integrityCost: '2',
                    integrityGain: '5',
                    magicCapacity: '108',
                    toolLevel: '4',
                    toolEfficiency: '8',
                    tints: { glyph: 'dac5ab', texture: 'dac5ab' },
                    textures: ['shiny', 'default'],
                    material: { tag: 'forge:ingots/energized_steel', count: 1 },
                    requiredTools: { hammer: 4 }
                },
                {
                    key: 'starmetal',
                    category: 'metal',
                    primary: '8.5',
                    secondary: '8.3',
                    tertiary: '1.2',
                    durability: '1600',
                    integrityCost: '2',
                    integrityGain: '4',
                    magicCapacity: '156',
                    toolLevel: '3',
                    toolEfficiency: '8.8',
                    tints: { glyph: '07186e', texture: '07186e' },
                    textures: ['shiny', 'default'],
                    material: { tag: 'forge:ingots/starmetal', count: 1 },
                    requiredTools: { hammer: 4 }
                },
                {
                    key: 'manasteel',
                    category: 'metal',
                    primary: '6',
                    secondary: '4.1',
                    tertiary: '3.6',
                    durability: '300',
                    integrityCost: '2',
                    integrityGain: '6',
                    magicCapacity: '150',
                    toolLevel: '3',
                    toolEfficiency: '7',
                    tints: { glyph: '3287fc', texture: '3287fc' },
                    textures: ['shiny', 'default'],
                    material: { tag: 'forge:ingots/manasteel', count: 1 },
                    improvements: { mana_repair: 3 },
                    requiredTools: { hammer: 3 }
                },
                {
                    key: 'elementium',
                    category: 'metal',
                    primary: '7.5',
                    secondary: '4.3',
                    tertiary: '4.2',
                    durability: '720',
                    integrityCost: '2',
                    integrityGain: '7',
                    magicCapacity: '178',
                    toolLevel: '4',
                    toolEfficiency: '9',
                    tints: { glyph: 'e6007f', texture: 'e6007f' },
                    textures: ['shiny', 'default'],
                    material: { tag: 'forge:ingots/elementium', count: 1 },
                    improvements: { mana_repair: 2 },
                    requiredTools: { hammer: 4 }
                },
                {
                    key: 'terrasteel',
                    category: 'metal',
                    primary: '12',
                    secondary: '5.1',
                    tertiary: '7.9',
                    durability: '2300',
                    integrityCost: '3',
                    integrityGain: '8',
                    magicCapacity: '192',
                    toolLevel: '4',
                    toolEfficiency: '11',
                    tints: { glyph: '5bfc12', texture: '5bfc12' },
                    textures: ['shiny', 'default'],
                    material: { tag: 'forge:ingots/terrasteel', count: 1 },
                    improvements: { mana_repair: 1 },
                    requiredTools: { hammer: 5 }
                },
                {
                    key: 'gaia',
                    category: 'metal',
                    primary: '11',
                    secondary: '4.7',
                    tertiary: '10.8',
                    durability: '2730',
                    integrityCost: '4',
                    integrityGain: '8',
                    magicCapacity: '208',
                    toolLevel: '4',
                    toolEfficiency: '13.5',
                    tints: { glyph: 'cebdf5', texture: 'cebdf5' },
                    textures: ['shiny', 'default'],
                    material: { tag: 'forge:ingots/gaia', count: 1 },
                    requiredTools: { hammer: 5 }
                },
                {
                    key: 'alfsteel',
                    category: 'metal',
                    primary: '13',
                    secondary: '5.3',
                    tertiary: '8.6',
                    durability: '2950',
                    integrityCost: '4',
                    integrityGain: '9',
                    magicCapacity: '216',
                    toolLevel: '4',
                    toolEfficiency: '12.5',
                    tints: { glyph: 'f5b540', texture: 'f28a3f' },
                    textures: ['shiny', 'default'],
                    material: { tag: 'forge:ingots/alfsteel', count: 1 },
                    requiredTools: { hammer: 6 }
                },
                {
                    key: 'refined_glowstone',
                    category: 'metal',
                    primary: '10',
                    secondary: '4.5',
                    tertiary: '6.7',
                    durability: '239',
                    integrityCost: '3',
                    integrityGain: '7',
                    magicCapacity: '154',
                    toolLevel: '3',
                    toolEfficiency: '11',
                    tints: { glyph: 'fce599', texture: 'fce599' },
                    textures: ['shiny', 'default'],
                    material: { tag: 'forge:ingots/refined_glowstone', count: 1 },
                    requiredTools: { hammer: 3 }
                },
                {
                    key: 'refined_obsidian',
                    category: 'metal',
                    primary: '9.5',
                    secondary: '7',
                    tertiary: '4.8',
                    durability: '2377',
                    integrityCost: '4',
                    integrityGain: '8',
                    magicCapacity: '168',
                    toolLevel: '4',
                    toolEfficiency: '10',
                    tints: { glyph: '7f67ab', texture: '7f67ab' },
                    textures: ['shiny', 'default'],
                    material: { tag: 'forge:ingots/refined_obsidian', count: 1 },
                    requiredTools: { hammer: 4 }
                },
                {
                    key: 'compressed_iron',
                    category: 'metal',
                    primary: '6',
                    secondary: '6',
                    tertiary: '2.8',
                    durability: '380',
                    integrityCost: '2',
                    integrityGain: '6',
                    magicCapacity: '112',
                    toolLevel: '4',
                    toolEfficiency: '8',
                    tints: { glyph: '868686', texture: '868686' },
                    textures: ['shiny', 'default'],
                    material: { tag: 'forge:ingots/compressed_iron', count: 1 },
                    requiredTools: { hammer: 4 }
                },
                {
                    key: 'pink_slime',
                    category: 'metal',
                    primary: '2',
                    secondary: '1.6',
                    tertiary: '9.8',
                    durability: '1850',
                    integrityCost: '2',
                    integrityGain: '6',
                    magicCapacity: '108',
                    toolLevel: '2',
                    toolEfficiency: '4.5',
                    tints: { glyph: 'c078b4', texture: 'c078b4' },
                    textures: ['shiny', 'default'],
                    material: { tag: 'forge:ingots/pink_slime', count: 1 },
                    requiredTools: { hammer: 2 }
                },
                {
                    key: 'pewter',
                    category: 'metal',
                    primary: '6',
                    secondary: '5.8',
                    tertiary: '3.9',
                    durability: '365',
                    integrityCost: '2',
                    integrityGain: '5',
                    magicCapacity: '124',
                    toolLevel: '3',
                    toolEfficiency: '7.4',
                    tints: { glyph: '72726a', texture: '72726a' },
                    textures: ['metal', 'default'],
                    material: { tag: 'forge:ingots/pewter' },
                    requiredTools: { hammer: 3 }
                },
                {
                    key: 'arcane_gold',
                    category: 'metal',
                    primary: '5.7',
                    secondary: '7.8',
                    tertiary: '6.4',
                    durability: '144',
                    integrityCost: '3',
                    integrityGain: '6',
                    magicCapacity: '131',
                    toolLevel: '3',
                    toolEfficiency: '8.8',
                    tints: { glyph: 'cd7b4b', texture: 'cd7b4b' },
                    textures: ['metal', 'default'],
                    material: { tag: 'forge:ingots/arcane_gold' },
                    requiredTools: { hammer: 4 }
                },
                {
                    key: 'neptunium',
                    category: 'metal',
                    primary: '9',
                    secondary: '4.2',
                    tertiary: '4.9',
                    durability: '2100',
                    integrityCost: '2',
                    integrityGain: '4',
                    magicCapacity: '158',
                    toolLevel: '4',
                    toolEfficiency: '9.1',
                    tints: { glyph: '17f1b6', texture: '17f1b6' },
                    textures: ['shiny', 'default'],
                    material: { tag: 'forge:ingots/neptunium', count: 1 },
                    requiredTools: { hammer: 3 }
                },
                {
                    key: 'iesnium',
                    category: 'metal',
                    primary: '9.5',
                    secondary: '7.3',
                    tertiary: '4.2',
                    durability: '1920',
                    integrityCost: '3',
                    integrityGain: '6',
                    magicCapacity: '178',
                    toolLevel: '4',
                    toolEfficiency: '9.5',
                    tints: { glyph: '92d1d8', texture: '92d1d8' },
                    textures: ['shiny', 'default'],
                    material: { tag: 'forge:ingots/iesnium', count: 1 },
                    requiredTools: { hammer: 5 }
                },
                {
                    key: 'hop_graphite',
                    category: 'metal',
                    primary: '6',
                    secondary: '5.8',
                    tertiary: '1',
                    durability: '1575',
                    integrityCost: '2',
                    integrityGain: '6',
                    magicCapacity: '124',
                    toolLevel: '3',
                    toolEfficiency: '8',
                    tints: { glyph: '1e1e1e', texture: '1e1e1e' },
                    textures: ['shiny', 'default'],
                    material: { tag: 'forge:ingots/hop_graphite', count: 1 },
                    requiredTools: { hammer: 3 }
                }
            ]
        }
    ];

    data.forEach((recipeType) => {
        let type = '/';
        if (recipeType.type == 'compat') {
            type = '/compat/';
        }

        recipeType.recipes.forEach((recipe) => {
            recipe.durability = recipe.durability * 1.2;
            recipe.magicCapacity = recipe.magicCapacity * 1.2;

            event.addJson(`tetra:materials/${recipe.category}${type}${recipe.key}.json`, recipe);
        });
    });
});
