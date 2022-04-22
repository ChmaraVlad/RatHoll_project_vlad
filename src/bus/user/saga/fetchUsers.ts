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
export const fetchUsersAction = createAction<number>(`${sliceName}/FETCH_USERS_ASYNC`);

// Types
import { Users } from '../types';

// Saga
const fetchUsers = (callAction: ReturnType<typeof fetchUsersAction>) => makeRequest<Users>({
    callAction,
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`${API_URL}/users`, {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }),
    },
    succes: function* (result) {
        yield console.log('fetch users', result);
        yield put(userActions.setUsers(result));
    },
});

// Watcher
export function* watchFetchUsers(): SagaIterator {
    yield takeLatest(fetchUsersAction.type, fetchUsers);
}
