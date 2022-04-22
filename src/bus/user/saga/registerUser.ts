// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, take, takeLatest } from 'redux-saga/effects';

// Slice
import { userActions, sliceName } from '../slice';

// Types
import * as UserTypes from '../types';

// Tools
import { makeRequest } from '../../../tools/utils';
import { API_URL } from '../../../init/constants';

// Action
export const registerUserAction = createAction<UserTypes.Username>(`${sliceName}/REGISTER_USER_ASYNC`);

// Types
import { User } from '../types';


// Saga
const registerUser = (callAction: ReturnType<typeof registerUserAction>) => makeRequest<User>({
    callAction,
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`${API_URL}/users/register`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: 'RAT:TEST112121dfgdfgdf' }),
        }),
    },
    succes: function* (result) {
        yield console.log('result', result);
        yield put(userActions.setUser(result));
    },
});

// Watcher
export function* watchRegisterUser(): SagaIterator {
    yield takeLatest(registerUserAction.type, registerUser);
}
