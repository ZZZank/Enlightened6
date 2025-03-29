// priority: 1010

const EnigPackMode = (() => {
    const validPackModes = ['normal', 'expert'];
    const defaultConfig = {
        mode: 'expert',
        message: `Valid modes are [${validPackModes}].`
    };
    const configName = 'mode.json';

    /**
     * @type {typeof defaultConfig}
     */
    // @ts-ignore
    let config = JsonIO.read(configName);

    if (!config || !config.mode) {
        JsonIO.write(configName, defaultConfig);
        console.log(`Created new ${configName}`);
        config = defaultConfig;
    }

    if (validPackModes.indexOf(config.mode) == -1) {
        console.log(
            `Overwriting ${configName}, because found mode ${config.mode} not in Valid modes: [${validPackModes}].`
        );
        JsonIO.write(configName, defaultConfig);
        config = defaultConfig;
    }

    console.log(`Current packmode is: ${config.packmode}`);

    return {
        validModes: validPackModes,
        defaultConfig: defaultConfig,
        config: config
    };
})();

const packMode = EnigPackMode.config.mode;
const isNormalMode = packMode == 'normal';
const isExpertMode = packMode == 'expert';

global.packmode = packMode;
global.isNormalMode = isNormalMode;
global.isExpertMode = isExpertMode;
