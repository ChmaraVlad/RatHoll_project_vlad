// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';
import localStorage from 'store';

// Watchers & Actions
import { fetchUsersAction, watchFetchUsers } from './fetchUsers';
import { registerUserAction, watchRegisterUser } from './registerUser';
import { watchRefreshUser, refreshUserAction } from './refreshUser';

// Tools
import { useLocalStorage } from '../../../tools/hooks';

// Bus
import { useUser } from '..';
import { useTogglersRedux } from '../../client/togglers';


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
        registerUser: (username: string) => void dispatch(registerUserAction(username)),
        refreshUser:  () => {
            const localstorageId = localStorage.get('userId');
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
