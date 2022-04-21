// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState = {
    isInit: false,
};

export const initialSlice = createSlice<types.InitialState, typeof reducers>({
    name: 'initial',
    initialState,
    reducers,
});

export const sliceName = initialSlice.name;
export const initialActions = initialSlice.actions;
export default initialSlice.reducer;
