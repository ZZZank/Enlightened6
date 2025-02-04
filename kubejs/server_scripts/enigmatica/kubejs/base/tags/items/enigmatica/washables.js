'use strict';
onEvent('item.tags', (event) => {
    event.get('enigmatica:washables/terracotta').add(/minecraft:\w+_terracotta/);
    event
        .get('enigmatica:washables/ceramic')
        .add(/atum:ceramic_[a-z]+$/)
        .remove('atum:ceramic_white');
    event
        .get('enigmatica:washables/ceramic_slab')
        .add(/atum:ceramic_slab_[a-z]+$/)
        .remove('atum:ceramic_slab_white');
    event
        .get('enigmatica:washables/ceramic_tile')
        .add(/atum:ceramic_tile_[a-z]+$/)
        .remove('atum:ceramic_tile_white');
    event
        .get('enigmatica:washables/ceramic_stairs')
        .add(/atum:ceramic_stairs_[a-z]+$/)
        .remove('atum:ceramic_stairs_white');
    event
        .get('enigmatica:washables/ceramic_wall')
        .add(/atum:ceramic_wall_[a-z]+$/)
        .remove('atum:ceramic_wall_white');
    event
        .get('enigmatica:washables/rockwool')
        .add(/thermal:\w+_rockwool/)
        .remove('thermal:white_rockwool');
});
