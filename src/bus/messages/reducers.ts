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


export const deleteMessage: types.BaseContact<types.String> = (state, action) => {
    state.data?.filter((item)=>{
        return item._id !== action.payload;
    });
};

export const updateMessage: types.BaseContact<types.Message> = (state, action) => {
    state.data?.map((item)=>{
        if (item._id === action.payload._id) {
            return action.payload;
        }

        return item;
    });
};
