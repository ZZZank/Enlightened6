'use strict';

onEvent('item.tooltip', (event) => {
    /**
     * @type {{target:Internal.IngredientJS_,handler:(item:Internal.ItemStackJS,isAdvanced:boolean,tooltips:Internal.List<any>) => void}[]}
     * @param target Item(s) you want to add/modify tooltip(s) for
     * @param handler What to do for targeted item(s)
     */
    const recipes = [
        {
            target: [
                'kubejs:common_lootbox',
                'kubejs:rare_lootbox',
                'kubejs:epic_lootbox',
                'kubejs:legendary_lootbox'
            ],
            handler: (item, isAdvanced, tooltipList) => {
                if (item.hasNBT()) {
                    // @ts-ignore
                    let mod = item.nbt.mod;
                    if (mod) {
                        tooltipList.add(Text.of(mod).green());
                    }
                }
            }
        }
    ];

    for (let recipe of recipes) {
        event.addAdvanced(recipe.target, recipe.handler);
    }
});