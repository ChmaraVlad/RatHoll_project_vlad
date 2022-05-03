// Types
import * as types from './types';

export const addKey: types.BaseContact<string> = (state, action) => {
    state?.keys.push(action.payload);
};

export const removeKey: types.BaseContact<string> = (state, action) => {
    state?.keys.filter((key) => {
        return key !== action.payload;
    });
};

export const addActiveKey: types.BaseContact<string> = (state, action) => {
    if (state?.activeKeys.includes(action.payload) === false) {
        state?.activeKeys.push(action.payload);
    }
};

export const removeActiveKey: types.BaseContact<string> = (state, action) => {
    const index = state?.activeKeys.indexOf(action.payload);

    if (index === -1) {
        state?.activeKeys;
    } else {
        state?.activeKeys.splice(index, 1);
    }
};
