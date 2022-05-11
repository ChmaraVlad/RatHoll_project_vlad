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
export const registerUserAction = createAction<string>(`${sliceName}/REGISTER_USER_ASYNC`);

// Types
import { User } from '../types';
import { errorActions } from '../../client/error/slice';

// Saga
const registerUser = (callAction: ReturnType<typeof registerUserAction>)  => makeRequest<User>({
    togglerType:  'isUserRegistration',
    callAction,
    fetchOptions: {
        successStatusCode: 201,
        fetch:             () => fetch(`${API_URL}/users/register`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: callAction.payload }),
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
export function* watchRegisterUser(): SagaIterator {
    yield takeLatest(registerUserAction.type, registerUser);
}
