// Types
import * as types from './types';

export const setInitial: types.BaseContact<types.Initial> = (state, __) => {
    state.isInit = !state.isInit;
};
