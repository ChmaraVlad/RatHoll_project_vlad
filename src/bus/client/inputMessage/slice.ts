// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState = '';

export const inputMessageSlice = createSlice<types.InputMessageState, typeof reducers>({
    name: 'inputMessage',
    initialState,
    reducers,
});

export const sliceName = inputMessageSlice.name;
export const inputMessageActions = inputMessageSlice.actions;
export default inputMessageSlice.reducer;
