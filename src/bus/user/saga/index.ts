// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';
import localStorage from 'store';
import { useTogglersRedux } from '../../client/togglers';

// Watchers & Actions
import { fetchUsersAction, watchFetchUsers } from './fetchUsers';
import { registerUserAction, watchRegisterUser } from './registerUser';
import { watchRefreshUser, refreshUserAction } from './refreshUser';
import { deleteUserAction, watchDeleteUser } from './deleteUser';

// Types
import { Username } from '../types';
import { useLocalStorage } from '../../../tools/hooks';
import { useUser } from '..';
import { useEffect } from 'react';


export const useUserSaga = () => {
    const dispatch = useDispatch();
    const { setTogglerAction } = useTogglersRedux();
    const { user } = useUser();

    const [ , setValue ] = useLocalStorage('userId', '');

    useEffect(()=>{
        if (user?._id) {
            setValue(user._id);
            setTogglerAction({ type: 'isLoggedIn', value: true });
        }
    }, [ user ]);

    return {
        fetchUsers:   () => void dispatch(fetchUsersAction()),
        registerUser: (username: Username) => void dispatch(registerUserAction(username)),
        refreshUser:  () => {
            const localstorageId = localStorage.get('userId');
            localstorageId && dispatch(refreshUserAction(localstorageId));
        },
        deleteUser: () => {
            localStorage.remove('userId');
            setTogglerAction({ type: 'isLoggedIn', value: false });
            dispatch(deleteUserAction());
        },
    };
};

export function* watchUser(): SagaIterator {
    yield all([
        call(watchFetchUsers),
        call(watchRegisterUser),
        call(watchRefreshUser),
        call(watchDeleteUser),
    ]);
}
