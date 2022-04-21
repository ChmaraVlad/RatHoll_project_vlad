// Core
import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga
import { useInitialSaga } from './saga';

export const useInitial = () => {
    const { fetchInitial } = useInitialSaga();
    const initial = useSelector((state) => state.initial); // Add initial to ./src/init/redux/index.ts

    useEffect(() => {
        fetchInitial();
    }, []);

    return {
        initial,
    };
};
