// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState = {
    newText:   '',
    idMessage: '',
};

export const inputUpdateMessageSlice = createSlice<types.InputUpdateMessageState, typeof reducers>({
    name: 'inputUpdateMessage',
    initialState,
    reducers,
});

export const sliceName = inputUpdateMessageSlice.name;
export const inputUpdateMessageActions = inputUpdateMessageSlice.actions;
export default inputUpdateMessageSlice.reducer;
