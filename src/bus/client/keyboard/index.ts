// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../../tools/hooks';

// Bus
import { useTogglersRedux } from '../togglers';
import { useInputMessage } from '../inputMessage';
import { keyboardActions } from './slice';

export const useKeyboard = () => {
    const dipatch = useDispatch();
    const { setTogglerAction, togglersRedux:{ isCapitalize, isShowKeyPad }} = useTogglersRedux();

    const { sendMessage } = useInputMessage();

    const activeKeys = useSelector((state) => state.keyboard.activeKeys);

    useEffect(()=>{
        window.addEventListener('keydown', (event: KeyboardEvent) => {
            dipatch(keyboardActions.addActiveKey(event.key));
        });

        window.addEventListener('keyup', (event: KeyboardEvent) => {
            dipatch(keyboardActions.removeActiveKey(event.key));
        });
    }, []);

    useEffect(() => {
        activeKeys.includes('Shift') ? setTogglerAction({ type: 'isCapitalize', value: !isCapitalize }) : null;
        activeKeys.includes('Enter') ? sendMessage() : null;
    }, [ activeKeys ]);


    return {
        activeKeys,
        handlerBtn: () => {
            setTogglerAction({ type: 'isShowKeyPad', value: !isShowKeyPad });
        },
    };
};
