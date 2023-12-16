'use strict';
onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }
    const id_prefix = 'enigmatica:expert/masterful_machinery/stellar_neutron_activator/';
    const recipes = [
        {
            outputs: [
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'mekanismgenerators:tritium', amount: 640 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:botania_mana',
                    consumeInstantly: true,
                    data: { amount: 4000000 }
                },
                {
                    type: 'masterfulmachinery:energy',
                    perTick: true,
                    data: { amount: 100000 }
                },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'minecraft:water', amount: 64000 }
                }
            ],
            ticks: 4000,
            id: `${id_prefix}tritium`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.inputs = recipe.inputs.map((val) => {
            if (typeof val == 'string') {
                // '32x kubejs:rough_machine_frame'
                return {
                    type: 'masterfulmachinery:items',
                    data: toJsonWithCount(val)
                };
            } else if (val.type == 'masterfulmachinery:items') {
                /*{
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: '2x mekanism:solar_neutron_activator'
                }*/
                val.data = toJsonWithCount(val.data);
            }
            return val;
        });
        recipe.outputs = recipe.outputs.map((val) => {
            if (typeof val == 'string') {
                return {
                    type: 'masterfulmachinery:items',
                    data: toJsonWithCount(val)
                };
            } else if (val.type == 'masterfulmachinery:items') {
                val.data = toJsonWithCount(val.data);
            }
            return val;
        });
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'stellar_neutron_activator_structure';
        recipe.controllerId = 'stellar_neutron_activator';
        event.custom(recipe).id(recipe.id);
    });
});

/*
{
    type: 'masterfulmachinery:botania_mana',
    perTick: true,
    data: { amount: 8000 }
},
{
    type: 'masterfulmachinery:fluids',
    perTick: true,
    data: { fluid: 'minecraft:water', amount: 64000 }
},



{
    type: 'masterfulmachinery:mekanism_gas',
    data: { gas: 'mekanismgenerators:tritium', amount: 64000 }
}

*/
