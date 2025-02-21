onEvent('item.tags', (event) => {
    let items = ['immersiveengineering:hoe_steel', 'atum:osiris_blessing', 'atum:gebs_undoing'];
    let exceptions = [
        'betterendforge:aeternium_hoe_head',
        'betterendforge:thallasium_hoe_head',
        'betterendforge:terminite_hoe_head'
    ];

    let tags = ['forge:tools', 'forge:tools/hoe'];

    tags.forEach((tag) => {
        event.get(tag).add(items).add(/_hoe/).add(/_aiot/).remove(exceptions);
    });
});
