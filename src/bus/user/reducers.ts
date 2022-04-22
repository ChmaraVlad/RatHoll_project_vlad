// Types
import * as types from './types';

export const setUser: types.BaseContact<types.User> = (state, action) => {
    state.user = action.payload;
};
export const setUsers: types.BaseContact<types.Users> = (state, action) => {
    state.allUsers = action.payload;
};
