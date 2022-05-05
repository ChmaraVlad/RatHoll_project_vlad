// Tools
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';
import { useTogglersRedux } from '../client/togglers';

// Bus
import { keyboardActions } from './slice';

export const useKeyboard = () => {
    const dipatch = useDispatch();
    const { setTogglerAction, togglersRedux:{ isCapitalize, isShowKeyPad }} = useTogglersRedux();

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
    }, [ activeKeys ]);


    return {
        activeKeys,
        handlerBtn: () => {
            setTogglerAction({ type: 'isShowKeyPad', value: !isShowKeyPad });
        },
    };
};
