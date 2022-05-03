// Core
// import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga
// import { useKeyboardSaga } from './saga';

export const useKeyboard = () => {
    // const { fetchKeyboard } = useKeyboardSaga();
    const keyboard = useSelector((state) => state.keyboard); // Add keyboard to ./src/init/redux/index.ts

    // useEffect(() => {
    //     fetchKeyboard();
    // }, []);

    return {
        keyboard,
    };
};
