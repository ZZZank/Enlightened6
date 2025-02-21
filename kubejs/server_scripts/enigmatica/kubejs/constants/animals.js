// priority: 1000

// all animals that can be tamed, used for the zoology challenge
const tameableAnimals = [
    'minecraft:cat',
    'minecraft:donkey',
    'minecraft:horse',
    'minecraft:llama',
    'minecraft:mule',
    'minecraft:parrot',
    'minecraft:wolf',
    // see #2453 'alexsmobs:bald_eagle',
    'alexsmobs:capuchin_monkey',
    'alexsmobs:crow',
    'alexsmobs:elephant',
    'alexsmobs:gorilla',
    'alexsmobs:grizzly_bear',
    'alexsmobs:kangaroo',
    'alexsmobs:komodo_dragon',
    'alexsmobs:mantis_shrimp',
    'alexsmobs:mimic_octopus',
    'alexsmobs:raccoon',
    'alexsmobs:warped_toad',
    'alexsmobs:tarantula_hawk',
    'atum:camel',
    'atum:desert_wolf',
    'atum:serval',
    'environmental:slabfish',
    'quark:foxhound'
];

// all animals that can be bred (except egg laying animals)
// all animals in this list are added to the 'Two by Two' advancement, which is used for the conservationism challenge
const breedableAnimals = [
    'minecraft:bee',
    'minecraft:cat',
    'minecraft:chicken',
    'minecraft:cow',
    'minecraft:donkey',
    'minecraft:fox',
    'minecraft:hoglin',
    'minecraft:horse',
    'minecraft:llama',
    'minecraft:mooshroom',
    'minecraft:mule',
    'minecraft:ocelot',
    'minecraft:panda',
    'minecraft:pig',
    'minecraft:rabbit',
    'minecraft:sheep',
    'minecraft:strider',
    'minecraft:wolf',
    'alexsmobs:alligator_snapping_turtle',
    // see #2453 'alexsmobs:bald_eagle',
    'alexsmobs:capuchin_monkey',
    'alexsmobs:cockroach',
    'alexsmobs:elephant',
    'alexsmobs:emu',
    'alexsmobs:endergrade',
    'alexsmobs:fly',
    'alexsmobs:gazelle',
    'alexsmobs:gorilla',
    'alexsmobs:grizzly_bear',
    'alexsmobs:hummingbird',
    'alexsmobs:kangaroo',
    'alexsmobs:mantis_shrimp',
    'alexsmobs:mimic_octopus',
    'alexsmobs:moose',
    'alexsmobs:mungus',
    'alexsmobs:platypus',
    'alexsmobs:raccoon',
    'alexsmobs:rattlesnake',
    'alexsmobs:roadrunner',
    'alexsmobs:seal',
    'alexsmobs:snow_leopard',
    'alexsmobs:tasmanian_devil',
    'alexsmobs:tiger',
    'alexsmobs:warped_toad',
    'atum:camel',
    'atum:desert_rabbit',
    'atum:desert_wolf',
    'atum:quail',
    'atum:serval',
    'environmental:deer',
    'environmental:duck',
    'environmental:slabfish',
    'environmental:yak',
    'quark:crab',
    'quark:foxhound',
    'quark:frog',
    'undergarden:gloomper',
    'undergarden:dweller'
];

// animals that can be bred, but don't immediately spawn a child after breeding
const eggLayingAnimals = ['minecraft:turtle', 'alexsmobs:crocodile'];
