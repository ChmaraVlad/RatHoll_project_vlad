// Tools
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';

// Bus
import { keyboardActions } from './slice';

export const useKeyboard = () => {
    const activeKeys = useSelector((state) => state.keyboard.activeKeys);

    const dipatch = useDispatch();

    useEffect(()=>{
        window.addEventListener('keydown', (event: KeyboardEvent) => {
            dipatch(keyboardActions.addActiveKey(event.key));
        });

        window.addEventListener('keyup', (event: KeyboardEvent) => {
            dipatch(keyboardActions.removeActiveKey(event.key));
        });
    }, []);

    return {
        activeKeys,
    };
};
