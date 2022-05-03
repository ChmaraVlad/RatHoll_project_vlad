// Types
import * as types from './types';

export const resetTextMessage: types.BaseContact<string> = (__, _) => {
    return '';
};

export const onChangeTextMessage: types.BaseContact<string> = (state, action) => {
    return action.payload;
};

export const onClickWriteTextMessage: types.BaseContact<string> = (state, action) => {
    return `${state}${action.payload}`;
};

export const deleteOneLetterInTextMessage: types.BaseContact<string> = (state, __) => {
    return state.slice(0, -1);
};
