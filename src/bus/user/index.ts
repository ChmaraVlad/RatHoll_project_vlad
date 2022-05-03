
// Tools
import { useState } from 'react';
import { useSelector } from '../../tools/hooks';

// Bus
import { useTogglersRedux } from '../client/togglers';

export const useUser = () => {
    const [ name, setName ] = useState('');

    const user = useSelector((state) => state.user.user); // Add user to ./src/init/redux/index.ts
    const allUsers = useSelector((state) => state.user.allUsers); // Add user to ./src/init/redux/index.ts

    const { togglersRedux:{ isUserRegistration, isNameValid }, setTogglerAction } = useTogglersRedux();

    return {
        user,
        allUsers,
        name,
        setName,
        setTogglerAction,
        togglers: { isUserRegistration, isNameValid },
    };
};

