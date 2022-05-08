// Types
import * as types from './types';

export const setError: types.BaseContact<{}> = (state, action) => {
    if (state) {
        return [ ...state, action.payload ];
    }

    return [ action.payload ];
};
