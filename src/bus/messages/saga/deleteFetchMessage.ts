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
export const deleteFetchMessageAction = createAction<string>(`${sliceName}/DELETE_MESSAGE_ASYNC`);

// Types
import { Message } from '../types';

// Saga
const deleteMessage = (callAction: ReturnType<typeof deleteFetchMessageAction>) => makeRequest<Message>({
    callAction,
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`${API_URL}/messages/${callAction.payload}`, {
            method:  'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }),
    },
    succes: function* (result) {
        yield console.log(result);
        yield put(messagesActions.deleteMessage(callAction.payload));
    },
});

// Watcher
export function* watchFetchDeleteMessage(): SagaIterator {
    yield takeLatest(deleteFetchMessageAction.type, deleteMessage);
}
