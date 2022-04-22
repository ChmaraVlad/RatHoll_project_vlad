// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';
import localStorage from 'store';

// Watchers & Actions
import { fetchUsersAction, watchFetchUsers } from './fetchUsers';
import { registerUserAction, watchRegisterUser } from './registerUser';
import { watchRefreshUser, refreshUserAction } from './refreshUser';

// Types
import { Username } from '../types';


export const useUserSaga = () => {
    const dispatch = useDispatch();

    return {
        fetchUsers:   () => void dispatch(fetchUsersAction()),
        registerUser: (username: Username) => void dispatch(registerUserAction(username)),
        refreshUser:  async () => {
            const localstorageId = await localStorage.get('userId');
            localstorageId && dispatch(refreshUserAction(localstorageId));
        },
    };
};

export function* watchUser(): SagaIterator {
    yield all([
        call(watchFetchUsers),
        call(watchRegisterUser),
        call(watchRefreshUser),
    ]);
}
