// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { messagesActions, sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { API_URL } from '../../../init/constants';

// Action
export const updateMessageAction = createAction<string>(`${sliceName}/UPDATE_MESSAGE_ASYNC`);

// Types
import { Message } from '../types';

// Saga
const updateMessage = (callAction: ReturnType<typeof updateMessageAction>) => makeRequest<Message>({
    callAction,
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`${API_URL}/messages/${callAction.payload}`, {
            method:  'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: callAction.payload }),
        }),
    },
    succes: function* (result) {
        yield console.log(result);
        yield put(messagesActions.updateMessage(result));
    },
});

// Watcher
export function* watchUpdateMessage(): SagaIterator {
    yield takeLatest(updateMessageAction.type, updateMessage);
}
