// Instruments
import * as types from './types';


export const messagesFetchAsync = (): types.MessagesFetchingAction => ({
    type:    types.FETCH_MESSAGES_ASYNC,
    payload: 1,
});

export const fill = (messages: types.Messages): types.MessagesFillAction => ({
    type:    types.MESSAGES_FILL,
    payload: messages,
});
