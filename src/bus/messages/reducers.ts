// Types
import * as types from './types';

export const setMessages: types.BaseContact<types.Messages> = (state, action) => {
    state.data = action.payload;
};

export const setMessagesFetchingStatus: types.BaseContact<boolean> = (state, action) => {
    state.isFetching = action.payload;
};
