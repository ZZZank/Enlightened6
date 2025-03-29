// priority: 10000

/**
 * @type {typeof onEvent}
 */
const onEventExpert = (id, handler) => {
    if (isExpertMode) {
        onEvent(id, handler);
    }
};

/**
 * @type {typeof onEvent}
 */
const onEventNormal = (id, handler) => {
    if (isNormalMode) {
        onEvent(id, handler);
    }
};
