// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { initialActions, sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { API_URL } from '../../../init/constants';

// Action
export const fetchInitialAction = createAction<number>(`${sliceName}/FETCH_MESSAGES_ASYNC`);

// Types
import { Initial } from '../types';

// Saga
const fetchInitial = (callAction: ReturnType<typeof fetchInitialAction>) => makeRequest<Initial>({
    callAction,
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`${API_URL}/users/refresh/6163174cbdd34703cfea7ac2`, {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }),
    },
    succes: function* (result) {
        yield console.log(result);
        yield put(initialActions.setInitial(result));
    },
});

// Watcher
export function* watchFetchInitial(): SagaIterator {
    yield takeLatest(fetchInitialAction.type, fetchInitial);
}
