'use strict';

block_conversion: {
    const id_prefix = 'enlightened6:right_click_block/';
    const recipes = [
        {
            target: 'mekanism:teleporter_frame',
            output: 'kubejs:conductive_frame',
            holding: 'immersiveengineering:dust_hop_graphite',
            additional: (event) => { },
            id: id_prefix + 'conductive_frame'
        },
        {
            target: 'astralsorcery:marble_raw',
            output: 'astralsorcery:marble_runed',
            holding: 'naturesaura:gold_leaf',
            id: id_prefix + `marble_runed`
        },
        {
            target: 'appliedenergistics2:crafting_unit',
            output: 'appliedenergistics2:crafting_accelerator',
            holding: 'appliedenergistics2:engineering_processor',
            id: id_prefix + `crafting_accelerator`
        },
        {
            target: 'appliedenergistics2:crafting_unit',
            output: 'appliedenergistics2:1k_crafting_storage',
            holding: 'appliedenergistics2:1k_cell_component',
            id: id_prefix + `1k_crafting_storage`
        },
        {
            target: 'appliedenergistics2:crafting_unit',
            output: 'appliedenergistics2:4k_crafting_storage',
            holding: 'appliedenergistics2:4k_cell_component',
            id: id_prefix + `4k_crafting_storage`
        },
        {
            target: 'appliedenergistics2:crafting_unit',
            output: 'appliedenergistics2:16k_crafting_storage',
            holding: 'appliedenergistics2:16k_cell_component',
            id: id_prefix + `16k_crafting_storage`
        },
        {
            target: 'appliedenergistics2:crafting_unit',
            output: 'appliedenergistics2:64k_crafting_storage',
            holding: 'appliedenergistics2:64k_cell_component',
            id: id_prefix + `64k_crafting_storage`
        }
    ];

    onEvent('block.right_click', (event) => {
        const player = event.player;
        if (!player || player.fake || player.mainHandItem.empty || !player.crouching) {
            return;
        }

        const mainHandItem = player.mainHandItem.id;
        const target = event.block;
        for (let recipe of recipes) {
            if (mainHandItem != recipe.holding || target.id != recipe.target) {
                continue;
            }
            player.playSound('ping:bloop');
            event.server.runCommandSilent(`particle minecraft:explosion ${target.x} ${target.y} ${target.z}`);
            target.set(recipe.output);
            player.mainHandItem.count -= 1;
            event.cancel();
            return;
        }
    });

    onEvent('recipes', (event) => {
        recipes.forEach((recipe) => {
            // create deploying
            event.recipes.create
                .deploying(recipe.output, [recipe.target, recipe.holding])
                .id(recipe.id + '/deploy');
            // hint
            const builder = event.recipes.custommachinery.custom_machine('in_world_interaction', 1).jei();
            addCMRecipe(builder, {
                inputs: [recipe.target],
                catalyst: recipe.holding,
                outputs: [recipe.output],
                id: recipe.id + '/hint'
            })
        });
    });
}
