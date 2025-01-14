'use strict';
onEvent('item.tags', (event) => {
    event
        .get('forge:logs/smogstem')
        .add('undergarden:smogstem_log')
        .add('undergarden:stripped_smogstem_log')
        .add('undergarden:smogstem_wood')
        .add('undergarden:stripped_smogstem_wood');
    event
        .get('forge:logs/grongle')
        .add('undergarden:grongle_log')
        .add('undergarden:stripped_grongle_log')
        .add('undergarden:grongle_wood')
        .add('undergarden:stripped_grongle_wood');
    event
        .get('forge:logs/wigglewood')
        .add('undergarden:wigglewood_log')
        .add('undergarden:stripped_wigglewood_log')
        .add('undergarden:wigglewood_wood')
        .add('undergarden:stripped_wigglewood_wood');
});
