// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { messagesActions, sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { API_URL } from '../../../init/constants';

// Types
import { Message } from '../types';

// Action
export const updateFetchMessageAction = createAction<{newText: string, id: string}>(`${sliceName}/UPDATE_MESSAGE_ASYNC`);


// Saga
const updateMessageFetch = (callAction: ReturnType<typeof updateFetchMessageAction>) => makeRequest<Message>({
    callAction,
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`${API_URL}/messages/${callAction.payload.id}`, {
            method:  'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: callAction.payload.newText }),
        }),
    },
    succes: function* (result) {
        yield put(messagesActions.updateMessage(result));
    },
});

// Watcher
export function* watchFetchUpdateMessage(): SagaIterator {
    yield takeLatest(updateFetchMessageAction.type, updateMessageFetch);
}
