// Types
import * as types from './types';

export const deleteUpdatedMessageUpdInput: types.BaseContact<string> = (state, _) => {
    state.newText = '';
};

export const UpdateMessageUpdInput: types.BaseContact<string> = (state, action) => {
    state.newText = action.payload;
};

export const onChangeTextMessageUpdInput: types.BaseContact<string> = (state, action) => {
    state.newText = action.payload;
};

export const deleteOneLetterUpdInput: types.BaseContact<string> = (state, __) => {
    state.newText = state.newText.slice(0, -1);
};

export const setIdMessage: types.BaseContact<string> = (state, action) => {
    state.idMessage = action.payload;
};
