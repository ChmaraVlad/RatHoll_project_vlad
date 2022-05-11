// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { userActions, sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { API_URL } from '../../../init/constants';

// Action
export const refreshUserAction = createAction<string>(`${sliceName}/REFRESH_USER_ASYNC`);

// Types
import { User } from '../types';
import { errorActions } from '../../client/error/slice';

// Saga
const refreshUser = (callAction: ReturnType<typeof refreshUserAction>) => makeRequest<User>({
    togglerType:  'isUserFetching',
    callAction,
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`${API_URL}/users/refresh/${callAction.payload}`, {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }),
    },
    succes: function* (result) {
        yield put(userActions.setUser(result));
    },
    error: function* (dataError) {
        yield put(errorActions.setError(dataError));
    },
});

// Watcher
export function* watchRefreshUser(): SagaIterator {
    yield takeLatest(refreshUserAction.type, refreshUser);
}
