

onEvent('recipes', (event) => {
    if (!Platform.getMods().containsKey("appliedenergistics2")) {
        return;
    }
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/ae2_compat/blocks/';
    const recipesIDs = [
        "appliedenergistics2:network/blocks/interfaces_interface",
        "appliedenergistics2:network/blocks/fluid_interfaces_interface",
        "appliedenergistics2:network/blocks/quantum_link",
        "appliedenergistics2:network/blocks/energy_energy_acceptor",
        "appliedenergistics2:network/blocks/controller",
        "appliedenergistics2:network/blocks/energy_energy_cell",
        "appliedenergistics2:network/blocks/storage_drive",
        "appliedenergistics2:network/parts/storage_bus",
        "appliedenergistics2:network/parts/import_bus",
        "appliedenergistics2:network/parts/export_bus",
        "appliedenergistics2:network/cables/glass_fluix",
        // "appliedenergistics2:network/crafting/molecular_assembler",
        "appliedenergistics2:network/wireless_access_point",
    ]
    recipesIDs.forEach((recipesID) => {
        event.remove({ id: recipesID });
    });
    const recipes = [
        {
            output: 'fluid_interface',
            inputs: [
                'IA ',
                'GB ',
                '   '
            ],
            patterns: {
                I: 'appliedenergistics2:interface',
                G: 'minecraft:green_dye',
                A: 'refinedstorage:advanced_processor',
                B: 'minecraft:bucket'
            }
        },
        {
            output: 'interface',
            inputs: [
                'MAM',
                'DSC',
                'MAM'
            ],
            patterns: {
                S: 'create:empty_schematic',
                M: 'create:mechanical_crafter',
                A: 'refinedstorage:advanced_processor',
                D: 'refinedstorage:destruction_core',
                C: 'refinedstorage:construction_core'
            }
        },
        {
            output: 'quantum_link',
            inputs: [
                'ETE',
                'ACA',
                'ERE'
            ],
            patterns: {
                T: 'rftoolsutility:matter_transmitter',
                C: 'kubejs:cpu_core_as_81221',
                R: 'rftoolsutility:matter_receiver',
                A: 'betterendforge:aeternium_ingot',
                E: '#forge:gears/enderium'
            }
        },
        {
            output: 'energy_acceptor',
            inputs: [
                'ICI',
                'CSC',
                'ICI'
            ],
            patterns: {
                S: 'tconstruct:slimesteel_ingot',
                C: 'mekanism:basic_universal_cable',
                I: 'refinedstorage:quartz_enriched_iron'
            }
        },
        {
            output: 'energy_cell',
            inputs: [
                'ACA',
                'CQC',
                'ACA'
            ],
            patterns: {
                C: 'powah:capacitor_basic_large',
                A: 'astralsorcery:aquamarine',
                Q: 'appliedenergistics2:quartz_glass'
            }
        },
        {
            output: 'drive',
            inputs: [
                'ENE',
                'LSL',
                'ENE'
            ],
            patterns: {
                N: 'extrastorage:neural_processor',
                E: 'mekanism:elite_control_circuit',
                L: 'immersiveengineering:logic_unit',
                S: 'appliedenergistics2:sky_dust'
            }
        },
        {
            output: 'storage_bus',
            inputs: [
                'SC ',
                'IB ',
                'SD '
            ],
            patterns: {
                B: '#xnet:connectors',
                C: 'refinedstorage:construction_core',
                I: 'refinedstorage:improved_processor',
                D: 'refinedstorage:destruction_core',
                S: 'occultism:spirit_attuned_gem'
            }
        },
        {
            output: 'import_bus', 
            inputs: [
                'SD ',
                'IC ',
                'SD '
            ],
            patterns: {
                D: 'refinedstorage:destruction_core',
                I: 'refinedstorage:improved_processor',
                S: 'occultism:spirit_attuned_gem',
                C: '#xnet:connectors'
            }
        },
        {
            output: 'export_bus', 
            inputs: [
                'SC ',
                'IC ',
                'SC '
            ],
            patterns: {
                D: 'refinedstorage:construction_core',
                I: 'refinedstorage:improved_processor',
                S: 'occultism:spirit_attuned_gem',
                C: '#xnet:connectors'
            }
        }
    ]
    recipes.forEach((recipe) => {
        event.shaped('appliedenergistics2:'+recipe.output, recipe.inputs, recipe.patterns).id(id_prefix+recipe.output);
    });

});
