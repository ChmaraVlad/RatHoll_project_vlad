// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState: types.ErrorState = null;

export const errorSlice = createSlice<types.ErrorState, typeof reducers>({
    name: 'error',
    initialState,
    reducers,
});

export const sliceName = errorSlice.name;
export const errorActions = errorSlice.actions;
export default errorSlice.reducer;
