// Bus
import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';
import { ruKeyboard, englKeyboard } from '../utils/keyboardData';

// Components
import { useDispatch } from 'react-redux';
import { keyboardActions } from '../../bus/keyboard/slice';
import { useTogglersRedux } from '../../bus/client/togglers';

export const useKeyboardHook = () => {
    const keys = useSelector((state) => state.keyboard.keys);
    const activeKeys = useSelector((state) => state.keyboard.activeKeys);

    const { togglersRedux:{ isShowKeyPad, isEnglKeyPad, isCapitalize }, setTogglerAction } = useTogglersRedux();

    const dipatch = useDispatch();

    useEffect(()=>{
        window.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === 'Shift') {
                setTogglerAction({ type: 'isCapitalize', value: !isCapitalize });
            }
            dipatch(keyboardActions.addActiveKey(event.key));
        });

        window.addEventListener('keyup', (event: KeyboardEvent) => {
            dipatch(keyboardActions.removeActiveKey(event.key));
        });
    }, []);

    const registerLayoutEngl = isCapitalize ? englKeyboard[ 1 ] : englKeyboard[ 0 ];
    const registerLayoutRu = isCapitalize ? ruKeyboard[ 1 ] : ruKeyboard[ 0 ];

    const layout = isEnglKeyPad ? registerLayoutEngl : registerLayoutRu;

    const useLayout = isShowKeyPad ? layout : null;

    return {
        keys,
        activeKeys,
        isShowKeyPad,
        useLayout,
    };
};
