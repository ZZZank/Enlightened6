onEvent('recipes', (event) => {
    if (!isAE2Loaded) {
        return;
    }
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/ae2/shapeless/';

    // {
    //     output:"output",
    //     ingerdients:[
    //         "ingerdient1",
    //         "ingerdient2"
    //     ],
    //     id:"recipe_id"
    // }
    const recipes = [
        {
            output: 'appliedenergistics2:fluid_interface',
            ingerdients: [
                'appliedenergistics2:interface',
                'minecraft:green_dye',
                'refinedstorage:advanced_processor',
                'minecraft:bucket'
            ],
            id: 'appliedenergistics2:network/blocks/fluid_interfaces_interface'
        },
        {
            output: 'appliedenergistics2:fluid_storage_bus',
            ingerdients: [
                'appliedenergistics2:storage_bus',
                'minecraft:green_dye',
                'minecraft:bucket'
            ],
            id: 'appliedenergistics2:network/parts/storage_bus_fluid'
        },
        {
            output: 'appliedenergistics2:fluid_import_bus',
            ingerdients: [
                'appliedenergistics2:import_bus',
                'minecraft:green_dye',
                'minecraft:bucket'
            ],
            id: 'appliedenergistics2:network/parts/import_bus_fluid'
        },
        {
            output: 'appliedenergistics2:fluid_export_bus',
            ingerdients: [
                'appliedenergistics2:export_bus',
                'minecraft:green_dye',
                'minecraft:bucket'
            ],
            id: 'appliedenergistics2:network/parts/export_bus_fluid'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.ingerdients).id(recipe.id);
    });
});