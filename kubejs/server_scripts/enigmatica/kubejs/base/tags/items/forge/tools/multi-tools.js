onEvent('item.tags', (event) => {
    let items = [
        'immersiveengineering:buzzsaw',
        'immersiveengineering:drill',
        'industrialforegoing:infinity_drill',
        'industrialforegoing:infinity_saw',
        'mekanism:atomic_disassembler',
        'mekanism:meka_tool',
        'pneumaticcraft:jackhammer',
        'thermal:flux_drill',
        'thermal:flux_saw'
    ];
    let tags = ['forge:tools', 'forge:tools/multi-tool'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_paxel/)
            .add(/_aiot/);
    });
});
