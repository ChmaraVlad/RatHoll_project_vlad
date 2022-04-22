// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';
import { useTogglersRedux } from '../client/togglers';

// Types
import * as UserTypes  from './types';

// Saga
import { useUserSaga } from './saga';

export const useUser = () => {
    const dispatch = useDispatch();

    const { fetchUsers, registerUser } = useUserSaga();
    const user = useSelector((state) => state.user); // Add user to ./src/init/redux/index.ts

    // useEffect(() => {
    // fetchUser();
    // }, []);

    return {
        user,
        fetchUsers:   () => dispatch(fetchUsers()),
        registerUser: (username: UserTypes.Username) => dispatch(registerUser(username)),
    };
};

