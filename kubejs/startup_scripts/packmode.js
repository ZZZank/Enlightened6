// priority: 1010

const EnigPackMode = (() => {
    const validPackModes = ['normal', 'expert'];
    const defaultConfig = {
        mode: 'normal',
        message: `Valid modes are [${validPackModes}].`
    };
    const configPath = 'mode.json';

    /**
     * @type {typeof defaultConfig}
     */
    // @ts-ignore
    let config = JsonIO.read(configPath);

    if (!config || !config.mode) {
        JsonIO.write(configPath, defaultConfig);
        console.log(`Created new ${configPath}`);
        config = defaultConfig;
    }

    if (validPackModes.indexOf(config.mode) == -1) {
        JsonIO.write(configPath, defaultConfig);
        config.mode = defaultConfig.mode;
        console.log(
            `Overwrote ${configPath}, because the mode ${config.mode} was found. Valid modes are [${validPackModes}].`
        );
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
