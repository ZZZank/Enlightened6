'use strict';
onEvent('item.tags', (event) => {
    event.get('minecraft:logs_that_burn').remove('#upgrade_aquatic:driftwood_logs');
});
