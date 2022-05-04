// Tools
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';

// Bus
import { keyboardActions } from './slice';

export const useKeyboard = () => {
    const keyboard = useSelector((state) => state.keyboard);
    const keys = useSelector((state) => state.keyboard.keys);
    const activeKeys = useSelector((state) => state.keyboard.activeKeys);

    const dipatch = useDispatch();

    const listenerKeyPress = (event: KeyboardEvent) => {
        dipatch(keyboardActions.addActiveKey(event.key));
    };

    const listenerKeyUp = (event: KeyboardEvent) => {
        dipatch(keyboardActions.removeActiveKey(event.key));
    };

    useEffect(()=>{
        window.addEventListener('keydown', listenerKeyPress);

        window.addEventListener('keyup', listenerKeyUp);
    }, []);

    return {
        keyboard,
        keys,
        activeKeys,
    };
};
