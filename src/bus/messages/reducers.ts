// Types
import * as types from './types';

export const setMessages: types.BaseContact<types.Messages> = (state, action) => {
    return action.payload;
};

export const addMessages: types.BaseContact<types.Message> = (state, action) => {
    if (state) {
        return [ action.payload, ...state ];
    }

    return state;
};

export const deleteMessage: types.BaseContact<string> = (state, action) => {
    return state?.filter((item)=> item._id !== action.payload);
};

export const updateMessage: types.BaseContact<types.Message> = (state, action) => {
    return state?.map((item)=>{
        if (item._id === action.payload._id) {
            return action.payload;
        }

        return item;
    });
};
