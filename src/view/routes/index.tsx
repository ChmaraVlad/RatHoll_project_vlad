// Core
import React, { FC, Suspense, useEffect } from 'react';

// Routes
import { Public } from './Public';
import { Private } from './Private';

// Bus
import { useTogglersRedux } from '../../bus/client/togglers';

// Elements
import { Spinner } from '../elements';
import { useUserSaga } from '../../bus/user/saga';

export const Routes: FC = () => {
    const { togglersRedux: { isLoggedIn, isUserRegistration, isUserFetching }} = useTogglersRedux();
    const { refreshUser } = useUserSaga();

    useEffect(()=>{
        refreshUser();
    }, []);

    if (isUserFetching || isUserRegistration) {
        return <Spinner />;
    }

    return (
        <Suspense fallback = { <Spinner /> }>
            {
                isLoggedIn
                    ? <Private />
                    : <Public />
            }
        </Suspense>
    );
};
