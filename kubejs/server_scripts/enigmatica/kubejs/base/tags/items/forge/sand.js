'use strict';
onEvent('item.tags', (event) => {
    event.get('forge:sand').add('betterendforge:endstone_dust');
    event.get('forge:sand/end').add('betterendforge:endstone_dust');
});
