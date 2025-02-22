onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/recipes/replace_input/';

    const recipes = [
        {
            filter: { id: 'entangled:block' },
            toReplace: 'minecraft:chest',
            replaceWith: '#forge:chests/wooden'
        },
        {
            filter: { id: 'constructionwand:stone_wand' },
            toReplace: '#minecraft:stone_tool_materials',
            replaceWith: '#quark:stone_tool_materials'
        },
        {
            filter: { id: 'archers_paradox:lightning_arrow' },
            toReplace: 'minecraft:nether_star',
            replaceWith: 'thermal:lightning_charge'
        },
        {
            filter: {
                not: [{ id: 'minecraft:dried_kelp_block' }]
            },
            toReplace: 'minecraft:dried_kelp',
            replaceWith: ['minecraft:dried_kelp', 'sushigocrafting:dried_seaweed']
        },
        {
            filter: { id: 'culinaryconstruct:culinary_station' },
            toReplace: 'minecraft:stone_slab',
            replaceWith: '#enigmatica:crafting_slabs'
        },
        {
            filter: { id: 'minecraft:grindstone' },
            toReplace: 'minecraft:stone_slab',
            replaceWith: '#enigmatica:crafting_slabs'
        },
        {
            toReplace: 'emendatusenigmatica:coke_block',
            replaceWith: '#forge:storage_blocks/coke'
        },
        {
            toReplace: 'emendatusenigmatica:arcane_block',
            replaceWith: '#forge:storage_blocks/mana'
        },
        {
            toReplace: 'emendatusenigmatica:sulfur_gem',
            replaceWith: '#forge:gems/sulfur'
        },
        {
            toReplace: 'emendatusenigmatica:steel_block',
            replaceWith: '#forge:storage_blocks/steel'
        },
        { toReplace: 'thermal:sawdust', replaceWith: 'emendatusenigmatica:wood_dust' },
        {
            toReplace: 'architects_palette:withered_bone',
            replaceWith: '#forge:bones/wither'
        },
        { toReplace: 'appliedenergistics2:silicon', replaceWith: '#forge:silicon' },
        {
            toReplace: 'betterendforge:thallasium_ore',
            replaceWith: '#forge:ores/thallasium'
        },
        {
            toReplace: 'astralsorcery:starmetal_ore',
            replaceWith: '#forge:ores/starmetal'
        },
        {
            toReplace: 'mythicbotany:elementium_ore',
            replaceWith: '#forge:ores/elementium'
        },
        { toReplace: 'thermal:rubber', replaceWith: 'industrialforegoing:dryrubber' },
        { toReplace: 'thermal:cinnabar', replaceWith: '#forge:gems/cinnabar' },
        { toReplace: 'thermal:sulfur', replaceWith: '#forge:gems/sulfur' },
        { toReplace: 'thermal:apatite', replaceWith: '#forge:gems/apatite' },
        { toReplace: 'thermal:niter', replaceWith: '#forge:gems/niter' },
        { toReplace: 'thermal:coal_coke', replaceWith: '#forge:gems/coal_coke' },
        {
            toReplace: 'rftoolsbase:dimensionalshard',
            replaceWith: '#forge:gems/dimensional'
        },
        { toReplace: 'ars_nouveau:mana_gem', replaceWith: '#forge:gems/mana' },
        { toReplace: 'immersiveengineering:slag', replaceWith: '#forge:slag' },
        { toReplace: 'thermal:slag', replaceWith: '#forge:slag' },
        { toReplace: 'farmersdelight:fried_egg', replaceWith: '#forge:cooked_eggs' },
        {
            toReplace: 'farmersdelight:brown_mushroom_colony',
            replaceWith: '#forge:mushroom_colonies/brown'
        },
        {
            toReplace: 'farmersdelight:red_mushroom_colony',
            replaceWith: '#forge:mushroom_colonies/red'
        },
        { toReplace: 'betterendforge:ender_dust', replaceWith: '#forge:dusts/ender_pearl' },
        { toReplace: 'minecraft:iron_ore', replaceWith: '#forge:ores/iron' },
        { toReplace: 'minecraft:gold_ore', replaceWith: '#forge:ores/gold' },
        { toReplace: 'upgrade_aquatic:beachgrass', replaceWith: '#forge:beach_grass' },
        { toReplace: 'environmental:cattail', replaceWith: '#forge:cattails' },
        { toReplace: 'pneumaticcraft:wheat_flour', replaceWith: '#forge:dusts/flour' },
        { toReplace: 'create:wheat_flour', replaceWith: '#forge:dusts/flour' },
        { toReplace: 'create:dough', replaceWith: '#forge:doughs' },
        { toReplace: 'farmersdelight:wheat_dough', replaceWith: '#forge:doughs' },
        { toReplace: 'create:bar_of_chocolate', replaceWith: '#forge:chocolate_bars' },
        { toReplace: 'neapolitan:chocolate_bar', replaceWith: '#forge:chocolate_bars' },
        {
            filter: { mod: 'simplefarming' },
            toReplace: 'minecraft:cooked_chicken',
            replaceWith: '#forge:cooked_chicken'
        },
        { toReplace: 'tconstruct:cobalt_nugget', replaceWith: '#forge:nuggets/cobalt' }
    ];
    event.replaceInput({}, 'thermal:bitumen', '#forge:gems/bitumen', true);
    event.replaceInput({}, 'immersivepetroleum:bitumen', '#forge:gems/bitumen', true);
    event.replaceInput(
        {
            not: [{ type: 'ars_nouveau:glyph_recipe' }]
        },
        'minecraft:nether_brick',
        '#forge:ingots/nether_brick'
    );
    event.replaceInput({}, 'minecraft:nether_bricks', '#forge:netherbricks');
    event.replaceInput(
        {
            type: 'minecraft:crafting_shaped',
            not: [{ id: 'minecraft:stone_slab' }, { id: 'minecraft:stone_stairs' }]
        },
        'minecraft:stone',
        '#forge:stone',
        true
    );
    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'minecraft:stone', '#forge:stone', true);
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'powah:uraninite', '#forge:ingots/radioactive');
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'minecraft:netherrack', '#forge:netherrack');
    event.replaceInput({ id: 'tetra:hammer/stone' }, 'minecraft:cobblestone', '#quark:stone_tool_materials');
    event.replaceInput({ id: 'dustrial_decor:sheet_metal' }, '#forge:ingots/iron', '#forge:plates/iron');
    event.replaceInput({ mod: 'buildinggadgets' }, '#forge:ingots/iron', '#forge:ingots/iron_aluminum');

    event.replaceInput({ mod: 'powah' }, '#forge:ingots/iron', '#forge:ingots/iron_copper');
    event.replaceInput({ mod: 'powah' }, '#forge:nuggets/iron', '#forge:nuggets/iron_copper');

    powahTiers.forEach((tier) => {
        let capacitor = `powah:capacitor_${tier}`;
        event.replaceInput({ id: `powah:crafting/energy_cell_${tier}` }, '#powah:energy_cell', capacitor);
        if (tier == 'basic') {
            capacitor = `powah:capacitor_${tier}_large`;
        }
        event.replaceInput({ id: `powah:crafting/battery_${tier}` }, '#powah:battery', capacitor);
    });

    event.replaceInput({ mod: 'powah' }, '#powah:magmator', 'mekanism:dynamic_tank');
    event.replaceInput({ mod: 'powah' }, '#powah:thermo_generator', 'powah:thermoelectric_plate');
    event.replaceInput({ mod: 'powah' }, '#powah:solar_panel', 'powah:photoelectric_pane');

    event.replaceInput(
        { id: 'powah:crafting/solar_panel_basic' },
        'powah:solar_panel_starter',
        'powah:photoelectric_pane'
    );

    event.replaceInput(
        { type: 'minecraft:crafting_shaped', output: 'minecraft:piston' },
        '#forge:cobblestone',
        '#quark:stone_tool_materials'
    );

    ['quark:tallow', 'occultism:tallow'].forEach((tallow) => {
        event.replaceInput(tallow, '#forge:tallow');
    });

    event.replaceInput(
        { id: 'dustrial_decor:iron_bar_trapdoor' },
        'minecraft:iron_bars',
        'dustrial_decor:barbed_iron_bars'
    );

    event.replaceInput(
        { id: 'bloodmagic:alchemytable/basic_cutting_fluid' },
        'minecraft:potion',
        Item.of('minecraft:potion', { Potion: 'minecraft:water' })
    );

    event.replaceInput(
        { id: 'create:mixing/chromatic_compound' },
        'create:powdered_obsidian',
        '#forge:dusts/obsidian'
    );

    event.replaceInput({ id: 'fluxnetworks:fluxconfigurator' }, 'minecraft:ender_eye', 'powah:ender_core');

    event.replaceInput(
        { id: 'fluxnetworks:fluxpoint' },
        'minecraft:redstone_block',
        'powah:ender_gate_nitro'
    );
    event.replaceInput(
        { not: { type: 'ars_nouveau:glyph_recipe' } },
        'minecraft:crafting_table',
        '#forge:workbenches'
    );

    event.replaceInput(
        { id: 'minecraft:nether_bricks' },
        '#forge:ingots/nether_brick',
        'minecraft:nether_brick'
    );
    event.replaceInput(
        { id: 'thermal:machine/press/packing2x2/press_nether_bricks_packing' },
        '#forge:ingots/nether_brick',
        'minecraft:nether_brick'
    );
    event.replaceInput(
        { id: 'thermal:machine/press/unpacking/press_wool_unpacking' },
        'minecraft:white_wool',
        '#forge:wool'
    );

    sharedDies.forEach((die) => {
        const dieTag = `#thermal:crafting/dies/${die.thermalName}`;
        event.replaceInput(`immersiveengineering:mold_${die.immersiveEngineeringName}`, dieTag);
        event.replaceInput(`thermal:press_${die.thermalName}_die`, dieTag);
    });
    thermalDies.forEach((dieName) => {
        event.replaceInput(`thermal:press_${dieName}_die`, `#thermal:crafting/dies/${dieName}`);
    });
    immersiveEngineeringDies.forEach((dieName) => {
        event.replaceInput(`immersiveengineering:mold_${dieName}`, `#thermal:crafting/dies/${dieName}`);
    });

    colors.forEach((color) => {
        const dyeTag = `#forge:dyes/${color}`;

        // Replaces recipes not using forge:dyes tag for inputs
        event.replaceInput({}, `minecraft:${color}_dye`, dyeTag, true);

        event.remove({
            id: `minecraft:${color}_carpet_from_white_carpet`
        });

        ['stained_glass', 'stained_glass_pane', 'terracotta', 'concrete_powder', 'wool', 'carpet'].forEach(
            (blockName) => {
                const itemTag = `#forge:${blockName}`;
                const block = `minecraft:${color}_${blockName}`;

                if (blockName == 'stained_glass_pane') {
                    event.remove({ id: `${block}_from_glass_pane` });
                } else {
                    event.remove({ id: block });
                }

                event
                    .shaped(Item.of(block, 8), ['SSS', 'SDS', 'SSS'], {
                        S: itemTag,
                        D: dyeTag
                    })
                    .id(id_prefix + blockName + '_batch_dyeing_' + color);
                event
                    .shapeless(Item.of(block), [dyeTag, itemTag])
                    .id(id_prefix + blockName + '_dyeing_' + color);
            }
        );

        ['linen', 'linen_carpet'].forEach((blockName) => {
            const itemTag = `#atum:${blockName}`;
            const block = `atum:${blockName}_${color}`;

            if (blockName == 'linen_carpet') {
                event.remove({ id: `atum:${color}_linen_carpet_from_white_linen_carpet` });
            } else if (blockName == 'linen') {
                if (color != 'white') {
                    // linen_white is Atum's linen cloth -> linen recipe
                    event.remove({ id: `atum:linen_${color}` });
                }
            }

            event
                .shaped(Item.of(block, 8), ['SSS', 'SDS', 'SSS'], {
                    S: itemTag,
                    D: dyeTag
                })
                .id(`kubejs:${blockName}_${color}_bulk`);
            event.shapeless(Item.of(block, 1), [dyeTag, itemTag]).id(`kubejs:${blockName}_${color}`);
        });

        fallback_id(
            event.shapeless(Item.of(`minecraft:${color}_concrete_powder`, 8), [
                dyeTag,
                '#forge:sand',
                '#forge:sand',
                '#forge:sand',
                '#forge:sand',
                '#forge:gravel',
                '#forge:gravel',
                '#forge:gravel',
                '#forge:gravel'
            ]),
            id_prefix
        );
    });

    const alt_material_tag_replacements = [
        {
            type: 'storage_blocks',
            replace: 'iron',
            replaceWith: 'aluminum',
            items: ['bloodmagic:soulforge', 'resourcefulbees:centrifuge_casing', 'xnet:antenna_base']
        },
        {
            type: 'storage_blocks',
            replace: 'iron',
            replaceWith: 'brass',
            items: ['ars_nouveau:glyph_press']
        },
        {
            type: 'storage_blocks',
            replace: 'iron',
            replaceWith: 'invar',
            items: ['resourcefulbees:centrifuge_controller']
        },
        {
            type: 'storage_blocks',
            replace: 'iron',
            replaceWith: 'lead',
            items: [
                'travel_anchors:travel_anchor',
                'thermal:machine_press',
                'bloodmagic:alchemicalreactionchamber',
                'integrateddynamics:squeezer'
            ]
        },
        {
            type: 'storage_blocks',
            replace: 'iron',
            replaceWith: 'tin',
            items: ['aquaculture:tackle_box']
        },
        {
            type: 'dusts',
            replace: 'gold',
            replaceWith: 'copper',
            items: ['mekanism:upgrade_energy']
        },
        {
            type: 'gears',
            replace: 'gold',
            replaceWith: 'bronze',
            items: ['thermal:upgrade_augment_1']
        },
        {
            type: 'gears',
            replace: 'gold',
            replaceWith: 'copper',
            items: ['thermal:flux_drill', 'thermal:flux_saw']
        },
        {
            type: 'gears',
            replace: 'gold',
            replaceWith: 'silver',
            items: ['thermal:dynamo_lapidary']
        },
        {
            type: 'ingots',
            replace: 'gold',
            replaceWith: 'brass',
            items: [
                'ars_nouveau:arcane_core',
                'ars_nouveau:crystallizer',
                'ars_nouveau:volcanic_accumulator',
                'pneumaticcraft:gun_ammo',
                'ars_nouveau:marvelous_clay',
                'ars_nouveau:ritual',
                'ars_nouveau:sconce',
                'ars_nouveau:mycelial_sourcelink',
                'ars_nouveau:vitalic_sourcelink',
                'ars_nouveau:alchemical_sourcelink',
                'ars_nouveau:mana_condenser'
            ]
        },
        {
            type: 'ingots',
            replace: 'gold',
            replaceWith: 'bronze',
            items: [
                'bloodmagic:alchemytable',
                'bloodmagic:altar',
                'bloodmagic:sacrificialdagger',
                'bloodmagic:experiencebook',
                'bloodmagic:soulforge',
                'pneumaticcraft:minigun',
                'pneumaticcraft:pressure_gauge',
                'thermal:diving_helmet',
                'thermal:diving_chestplate',
                'thermal:diving_leggings',
                'thermal:diving_boots',
                'minecraft:clock'
            ]
        },
        {
            type: 'ingots',
            replace: 'gold',
            replaceWith: 'copper',
            items: [
                'mekanismgenerators:electromagnetic_coil',
                'mekanism:energy_tablet',
                'xnet:controller',
                'thermal:rf_coil_xfer_augment',
                'thermal:rf_coil_storage_augment',
                'thermal:rf_coil_augment',
                'thermal:rf_coil',
                'rftoolsstorage:storage_scanner',
                'rftoolsbuilder:shield_block1',
                'pneumaticcraft:vortex_tube',
                'pneumaticcraft:heat_sink',
                'modularrouters:speed_upgrade',
                'xnet:connector_blue',
                'xnet:connector_red',
                'xnet:connector_green',
                'farsight_spyglasses:spyglass'
            ]
        },
        {
            type: 'ingots',
            replace: 'gold',
            replaceWith: 'silver',
            items: ['torchmaster:feral_flare_lantern', 'mekanism:teleportation_core', 'botania:mana_spreader']
        },
        {
            type: 'ingots',
            replace: 'gold',
            replaceWith: 'tin',
            items: ['pneumaticcraft:memory_stick']
        },
        {
            type: 'ingots',
            replace: 'iron',
            replaceWith: 'aluminum',
            items: [
                'immersiveengineering:conveyor_splitter',
                'immersiveengineering:conveyor_vertical',
                'immersiveengineering:conveyor_basic',
                'immersiveengineering:current_transformer',
                'immersiveengineering:transformer_hv',
                'immersiveengineering:transformer',
                'immersiveengineering:dynamo',
                'immersiveengineering:furnace_heater',
                'immersiveengineering:toolupgrade_drill_lube',
                'endermail:locker',
                'endermail:package_controller',
                'cookingforblockheads:preservation_chamber',
                'minecraft:compass',
                'minecraft:piston',
                'xnet:antenna_dish',
                'xnet:antenna_base',
                'xnet:antenna',
                'resourcefulbees:centrifuge_casing',
                'engineersdecor:metal_bar',
                'integrateddynamics:drying_basin'
            ]
        },
        {
            type: 'ingots',
            replace: 'iron',
            replaceWith: 'brass',
            items: ['ars_nouveau:mana_condenser', 'ars_nouveau:enchanting_apparatus']
        },
        {
            type: 'ingots',
            replace: 'iron',
            replaceWith: 'copper',
            items: [
                'shrink:shrinking_device',
                'immersiveengineering:charging_station',
                'cookingforblockheads:heating_unit',
                'aquaculture:tackle_box'
            ]
        },
        {
            type: 'ingots',
            replace: 'iron',
            replaceWith: 'lead',
            items: [
                'travel_anchors:travel_anchor',
                'travel_anchors:travel_staff',
                'integrateddynamics:squeezer'
            ]
        },
        {
            type: 'ingots',
            replace: 'iron',
            replaceWith: 'osmium',
            items: [
                'integrateddynamics:part_machine_reader',
                'integratedcrafting:crafting/part_interface_crafting'
            ]
        },
        {
            type: 'nuggets',
            replace: 'gold',
            replaceWith: 'bronze',
            items: ['rftoolsstorage:storage_module0']
        },
        {
            type: 'nuggets',
            replace: 'gold',
            replaceWith: 'copper',
            items: [
                'xnet:connector_routing',
                'xnet:netcable_routing',
                'xnet:netcable_yellow',
                'xnet:netcable_blue',
                'xnet:netcable_green',
                'xnet:netcable_red',
                'rftoolsbase:machine_base',
                'rftoolsbase:machine_frame',
                'rftoolscontrol:card_base',
                'modularrouters:speed_upgrade',
                'modularrouters:blank_upgrade',
                'modularrouters:blank_module'
            ]
        }
    ];

    alt_material_tag_replacements.forEach((recipe) => {
        recipe.items.forEach((item) => {
            event.replaceInput(
                { output: item },
                `#forge:${recipe.type}/${recipe.replace}`,
                `#forge:${recipe.type}/${recipe.replace}_${recipe.replaceWith}`
            );
        });
    });
    recipes.forEach((recipe) => {
        if (recipe.filter) {
            event.replaceInput(recipe.filter, recipe.toReplace, recipe.replaceWith);
        } else {
            event.replaceInput(recipe.toReplace, recipe.replaceWith);
        }
    });
});
