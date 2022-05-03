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
export const createFetchMessageAction = createAction<createMessageType>(`${sliceName}/CREATE_MESSAGE_ASYNC`);

// Types
import { createMessageType, Message } from '../types';

// Saga
const createMessage = (callAction: ReturnType<typeof createFetchMessageAction>) => makeRequest<Message>({
    callAction,
    fetchOptions: {
        successStatusCode: 201,
        fetch:             () => fetch(`${API_URL}/messages`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(callAction.payload),
        }),
    },
    succes: function* (result) {
        yield put(messagesActions.addMessages(result));
    },
});

// Watcher
export function* watchFetchCreateMessage(): SagaIterator {
    yield takeLatest(createFetchMessageAction.type, createMessage);
}
