/// <reference path="./globals.d.ts" />
declare const AIR_BLOCK: Internal.AirBlock;
declare const AIR_ITEM: Internal.AirItem;
declare const Client: Internal.ClientWrapper;
declare const HOUR: 3600000;
declare const MAIN_HAND: Hand;
declare const MINUTE: 60000;
declare const OFF_HAND: Hand;
declare const Painter: Internal.Painter;
declare const RARITY_COMMON: Rarity;
declare const RARITY_EPIC: Rarity;
declare const RARITY_RARE: Rarity;
declare const RARITY_UNCOMMON: Rarity;
declare const SECOND: 1000;
declare const SLOT_CHEST: EquipmentSlot;
declare const SLOT_FEET: EquipmentSlot;
declare const SLOT_HEAD: EquipmentSlot;
declare const SLOT_LEGS: EquipmentSlot;
declare const SLOT_MAINHAND: EquipmentSlot;
declare const SLOT_OFFHAND: EquipmentSlot;
declare const TOOL_TYPE_AXE: ToolType;
declare const TOOL_TYPE_HOE: ToolType;
declare const TOOL_TYPE_PICKAXE: ToolType;
declare const TOOL_TYPE_SHOVEL: ToolType;
declare const client: Internal.ClientWrapper;
declare const console: Internal.ConsoleJS;
declare const events: Internal.ScriptEventsWrapper;
declare const global: {
    tMulti: PatchouliMultiblick;
    jeiRuntime: Internal.JeiRuntime;
    isExpertMode: true;
    onReload: () => any;
    packmode: 'expert';
    isNormalMode: false;
};
declare const settings: Internal.ServerSettings;
