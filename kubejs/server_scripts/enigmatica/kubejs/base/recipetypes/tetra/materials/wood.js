'use strict';
onEvent('server.datapack.low_priority', (event) => {
    let data = [
        {
            type: 'base',
            recipes: [
                {
                    key: 'acacia',
                    category: 'wood',
                    primary: '3',
                    secondary: '1.7',
                    tertiary: '6',
                    durability: '59',
                    integrityCost: '1',
                    integrityGain: '4',
                    magicCapacity: '90',
                    toolLevel: '1',
                    toolEfficiency: '2',
                    tints: { glyph: 'acacia_glyph', texture: 'acacia' },
                    textures: ['crude', 'wooden'],
                    material: { item: 'minecraft:acacia_planks' },
                    requiredTools: { axe: 1 }
                },
                {
                    key: 'warped',
                    category: 'wood',
                    primary: '3',
                    secondary: '1.2',
                    tertiary: '8.5',
                    durability: '65',
                    integrityCost: '2',
                    integrityGain: '6',
                    magicCapacity: '90',
                    toolLevel: '2',
                    toolEfficiency: '4',
                    tints: { glyph: 'warped_glyph', texture: 'warped' },
                    textures: ['crude', 'wooden'],
                    material: { item: 'minecraft:warped_planks' },
                    effects: { unstable: 20 },
                    requiredTools: { axe: 3 }
                },
                {
                    key: 'spruce',
                    category: 'wood',
                    primary: '3',
                    secondary: '1.7',
                    tertiary: '6',
                    durability: '59',
                    integrityCost: '1',
                    integrityGain: '4',
                    magicCapacity: '90',
                    toolLevel: '1',
                    toolEfficiency: '2',
                    tints: { glyph: 'spruce_glyph', texture: 'spruce' },
                    textures: ['crude', 'wooden'],
                    material: { item: 'minecraft:spruce_planks' },
                    requiredTools: { axe: 1 }
                },
                {
                    key: 'oak',
                    category: 'wood',
                    primary: '3',
                    secondary: '1.7',
                    tertiary: '6',
                    durability: '59',
                    integrityCost: '1',
                    integrityGain: '4',
                    magicCapacity: '90',
                    toolLevel: '1',
                    toolEfficiency: '2',
                    tints: { glyph: 'oak_glyph', texture: 'oak' },
                    textures: ['crude', 'wooden'],
                    material: { tag: 'minecraft:planks' },
                    requiredTools: { axe: 1 }
                },
                {
                    key: 'jungle',
                    category: 'wood',
                    primary: '3',
                    secondary: '1.7',
                    tertiary: '6',
                    durability: '59',
                    integrityCost: '1',
                    integrityGain: '4',
                    magicCapacity: '90',
                    toolLevel: '1',
                    toolEfficiency: '2',
                    tints: { glyph: 'jungle_glyph', texture: 'jungle' },
                    textures: ['crude', 'wooden'],
                    material: { item: 'minecraft:jungle_planks' },
                    requiredTools: { axe: 1 }
                },
                {
                    key: 'dark_oak',
                    category: 'wood',
                    primary: '3',
                    secondary: '1.7',
                    tertiary: '6',
                    durability: '59',
                    integrityCost: '1',
                    integrityGain: '4',
                    magicCapacity: '90',
                    toolLevel: '1',
                    toolEfficiency: '2',
                    tints: { glyph: 'dark_oak_glyph', texture: 'dark_oak' },
                    textures: ['crude', 'wooden'],
                    material: { item: 'minecraft:dark_oak_planks' },
                    requiredTools: { axe: 1 }
                },
                {
                    key: 'crimson',
                    category: 'wood',
                    primary: '4',
                    secondary: '2.5',
                    tertiary: '7.5',
                    durability: '150',
                    integrityCost: '2',
                    integrityGain: '5',
                    magicCapacity: '90',
                    toolLevel: '2',
                    toolEfficiency: '4',
                    tints: { glyph: 'crimson_glyph', texture: 'crimson' },
                    textures: ['crude', 'wooden'],
                    material: { item: 'minecraft:crimson_planks' },
                    requiredTools: { axe: 3 }
                },
                {
                    key: 'birch',
                    category: 'wood',
                    primary: '3',
                    secondary: '1.7',
                    tertiary: '6',
                    durability: '59',
                    integrityCost: '1',
                    integrityGain: '4',
                    magicCapacity: '90',
                    toolLevel: '1',
                    toolEfficiency: '2',
                    tints: { glyph: 'birch_glyph', texture: 'birch' },
                    textures: ['crude', 'wooden'],
                    material: { item: 'minecraft:birch_planks' },
                    requiredTools: { axe: 1 }
                }
            ],
            type: 'compat',
            recipes: [
                // todo: more?
                {
                    key: 'ancient_wood',
                    category: 'wood',
                    primary: '3',
                    secondary: '1.7',
                    tertiary: '6',
                    durability: '60',
                    integrityCost: '1',
                    integrityGain: '4',
                    magicCapacity: '102',
                    toolLevel: '1',
                    toolEfficiency: '2',
                    tints: { glyph: '99537d', texture: '663753' },
                    textures: ['crude', 'wooden'],
                    material: { item: 'naturesaura:ancient_planks' },
                    improvements: { naturesaura_aura_mending_innate: 1 },
                    requiredTools: { axe: 2 }
                },
                {
                    key: 'treated_wood',
                    category: 'wood',
                    primary: '4',
                    secondary: '2',
                    tertiary: '6.5',
                    durability: '70',
                    integrityCost: '2',
                    integrityGain: '5',
                    magicCapacity: '82',
                    toolLevel: '2',
                    toolEfficiency: '3',
                    tints: { glyph: '643927', texture: '643927' },
                    textures: ['crude', 'wooden'],
                    material: { tag: 'forge:treated_wood' },
                    improvements: { workable: 1 },
                    requiredTools: { axe: 3 }
                },
                {
                    key: 'maple',
                    category: 'wood',
                    primary: '4.5',
                    secondary: '2',
                    tertiary: '7.5',
                    durability: '70',
                    integrityCost: '2',
                    integrityGain: '5',
                    magicCapacity: '96',
                    toolLevel: '2',
                    toolEfficiency: '4',
                    tints: { glyph: 'maple_glyph', texture: 'maple' },
                    textures: ['crude', 'wooden'],
                    material: { tag: 'forge:planks/maple' },
                    requiredTools: { axe: 3 }
                },
                {
                    key: 'livingwood',
                    category: 'wood',
                    primary: '3',
                    secondary: '1.7',
                    tertiary: '6',
                    durability: '70',
                    integrityCost: '1',
                    integrityGain: '4',
                    magicCapacity: '120',
                    toolLevel: '1',
                    toolEfficiency: '2',
                    tints: { glyph: '803413', texture: '2b1207' },
                    textures: ['crude'],
                    material: { item: 'botania:livingwood_planks' },
                    improvements: { mana_repair: 3 },
                    requiredTools: { axe: 2 }
                },
                {
                    key: 'dreamwood',
                    category: 'wood',
                    primary: '4',
                    secondary: '2.5',
                    tertiary: '7.5',
                    durability: '150',
                    integrityCost: '2',
                    integrityGain: '5',
                    magicCapacity: '120',
                    toolLevel: '2',
                    toolEfficiency: '4',
                    tints: { glyph: 'adbbbf', texture: '808a8c' },
                    textures: ['crude'],
                    material: { item: 'botania:dreamwood_planks' },
                    improvements: { mana_repair: 3 },
                    requiredTools: { axe: 2 }
                },
                {
                    key: 'cherry',
                    category: 'wood',
                    primary: '4.5',
                    secondary: '2',
                    tertiary: '7.5',
                    durability: '70',
                    integrityCost: '2',
                    integrityGain: '6',
                    magicCapacity: '72',
                    toolLevel: '2',
                    toolEfficiency: '4',
                    tints: { glyph: 'cherry_glyph', texture: 'cherry' },
                    textures: ['crude', 'wooden'],
                    material: { tag: 'forge:planks/cherry' },
                    requiredTools: { axe: 3 }
                },
                {
                    key: 'baobab',
                    category: 'wood',
                    primary: '4.5',
                    secondary: '2',
                    tertiary: '7.5',
                    durability: '180',
                    integrityCost: '2',
                    integrityGain: '7',
                    magicCapacity: '78',
                    toolLevel: '2',
                    toolEfficiency: '4',
                    tints: { glyph: 'baobab_glyph', texture: 'baobab' },
                    textures: ['crude', 'wooden'],
                    material: { tag: 'forge:planks/baobab' },
                    requiredTools: { axe: 3 }
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
