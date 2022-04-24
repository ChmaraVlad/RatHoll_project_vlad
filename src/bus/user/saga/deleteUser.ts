// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { userActions, sliceName } from '../slice';


// Action
export const deleteUserAction = createAction(`${sliceName}/DELETE_USER_ASYNC`);


// Saga
function* deleteUser() {
    yield put(userActions.setUser({ _id: null, username: null }));
}


// Watcher
export function* watchDeleteUser(): SagaIterator {
    yield takeLatest(deleteUserAction.type, deleteUser);
}
