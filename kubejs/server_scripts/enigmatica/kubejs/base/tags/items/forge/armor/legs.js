onEvent('item.tags', (event) => {
    let items = [
        'immersiveengineering:armor_faraday_legs',
        'immersiveengineering:armor_steel_legs',
        'mekanism:hazmat_pants',
        'mekanism:mekasuit_pants',
        'naturesaura:infused_iron_pants',
        'naturesaura:sky_pants',
        'bloodmagic:livingleggings'
    ];

    let exceptions = ['kubejs:pneumatic_leggings_package', 'kubejs:pneumatic_leggings_assembly'];

    let tags = ['forge:armor', 'forge:armor/leggings'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_leggings/)
            .add(/atum:.*legs/)
            .add(/atum:legs/)
            .remove(exceptions);
    });
});
