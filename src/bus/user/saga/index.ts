// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Watchers & Actions
import { fetchUsersAction, watchFetchUsers } from './fetchUsers';
import { registerUserAction, watchRegisterUser } from './registerUser';
import { Username } from '../types';
// import { useTogglersRedux } from '../../client/togglers';


export const useUserSaga = () => {
    const dispatch = useDispatch();
    // const { setTogglerAction } = useTogglersRedux();

    // setTogglerAction({ type: 'isUserRegistration', value: true });

    return {
        fetchUsers:   () => void dispatch(fetchUsersAction(1)),
        registerUser: (username: Username) => void dispatch(registerUserAction(username)),
    };
};

export function* watchUser(): SagaIterator {
    yield all([ call(watchFetchUsers), call(watchRegisterUser) ]);
}
