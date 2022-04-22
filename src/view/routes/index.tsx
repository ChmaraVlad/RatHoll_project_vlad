// Core
import React, { FC, Suspense, useEffect } from 'react';

// Routes
import { Public } from './Public';
import { Private } from './Private';

// Bus
import { useTogglersRedux } from '../../bus/client/togglers';

// Elements
import { Spinner } from '../elements';
import { useLocalStorage } from '../../tools/hooks';

export const Routes: FC = () => {
    const { togglersRedux: { isLoggedIn, isUserRegistration, isUserFetching }, setTogglerAction } = useTogglersRedux();


    // const [ storedValue, setValue ] = useLocalStorage('userId', null);

    // useEffect(() => {
    //     if (storedValue) {
    //         fetch(`https://api.barbarossa.pp.ua/users/refresh/${storedValue}`, {
    //             method:  'GET',
    //             headers: {
    //                 Accept:         'application/json, text/plain, */*',
    //                 'Content-Type': 'application/json',
    //             },
    //         }).then((res) => {
    //             if (res.status === 200) {
    //                 setTogglerAction({ type: 'isLoggedIn', value: true });
    //             }
    //         })
    //             .catch((error) => {
    //                 console.log(error.message);
    //             });
    //     }
    // }, [ storedValue ]);

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
