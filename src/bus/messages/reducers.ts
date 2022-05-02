// Types
import * as types from './types';

export const setMessages: types.BaseContact<types.Messages> = (state, action) => {
    state.data = action.payload;
};

export const setMessagesFetchingStatus: types.BaseContact<boolean> = (state, action) => {
    state.isFetching = action.payload;
};

export const addMessages: types.BaseContact<types.Message> = (state, action) => {
    state.data?.push(action.payload);
};


export const deleteMessage: types.BaseContact<string> = (state, action) => {
    state.data?.filter((item)=>{
        return item._id !== action.payload;
    });
};


export const updateMessage: types.BaseContact<types.Message> = (state, action) => {
    state.data?.filter((item)=>{
        if (item._id === action.payload._id) {
            return action.payload;
        }

        return item;
    });
};

// ====================================================
export const resetTextMessage: types.BaseContact<string> = (state, __) => {
    state.message = '';
};

export const onChangeTextMessage: types.BaseContact<string> = (state, action) => {
    state.message = action.payload;
};

export const deleteOneLetterInTextMessage: types.BaseContact<string> = (state, __) => {
    state.message = state.message.slice(0, -1);
};

// ===================================

export const deleteUpdatedMessage: types.BaseContact<string> = (state, __) => {
    state.updatedMessage = '';
};

export const UpdateMessage: types.BaseContact<string> = (state, action) => {
    state.updatedMessage = action.payload;
};
