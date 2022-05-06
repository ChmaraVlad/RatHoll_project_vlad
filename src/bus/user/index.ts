// Core
import { useState } from 'react';
import localStorage from 'store';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';

// Bus
import { useTogglersRedux } from '../client/togglers';
import { userActions } from './slice';

export const useUser = () => {
    const dispatch = useDispatch();
    const [ name, setName ] = useState('');

    const user = useSelector((state) => state.user.user);
    const allUsers = useSelector((state) => state.user.allUsers);

    const { togglersRedux:{ isUserRegistration }, setTogglerAction } = useTogglersRedux();

    return {
        user,
        allUsers,
        deleteUser: () => {
            localStorage.remove('userId');
            setTogglerAction({ type: 'isLoggedIn', value: false });
            dispatch(userActions.setUser({ _id: null, username: null }));
        },
        name,
        setName,
        togglers: { isUserRegistration },
    };
};

