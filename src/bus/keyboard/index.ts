// Core
// import { useEffect } from 'react';

// Tools
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';

// Bus
import { keyboardActions } from './slice';
import { useTogglersRedux } from '../client/togglers';

export const useKeyboard = () => {
    const keyboard = useSelector((state) => state.keyboard);
    const keys = useSelector((state) => state.keyboard.keys);
    const activeKeys = useSelector((state) => state.keyboard.activeKeys);

    const { togglersRedux:{ isCapitalize }, setTogglerAction } = useTogglersRedux();

    const dipatch = useDispatch();

    useEffect(()=>{
        document.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === 'Shift') {
                isCapitalize ? setTogglerAction({ type: 'isCapitalize', value: false }) : setTogglerAction({ type: 'isCapitalize', value: true });
            }

            dipatch(keyboardActions.addActiveKey(event.key));
        });

        document.addEventListener('keyup', (event: KeyboardEvent) => {
            dipatch(keyboardActions.removeActiveKey(event.key));
        });
    }, []);

    return {
        keyboard,
        keys,
        activeKeys,
    };
};
