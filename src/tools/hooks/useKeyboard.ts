// Bus
import { useTogglersRedux } from '../../bus/client/togglers';
import { useInputMessage } from '../../bus/inputMessage';
import { useInputUpdateMessage } from '../../bus/inputUpdateMessage';

// Tools
import { ruKeyboard, englKeyboard } from '../utils/keyboardData';

export const useKeyboardHook = () => {
    const { onClickWriteMessage, deleteOneLetterMessage, sendMessage, inputMessageRef } = useInputMessage();
    const { onClickWriteTextUpdateMessage, inputUpdateMessageRef } = useInputUpdateMessage();

    const { togglersRedux:{ isShowKeyPad, isEnglKeyPad, isCapitalize }, setTogglerAction } = useTogglersRedux();

    // --------- layout basic logic
    const registerLayoutEngl = isCapitalize ? englKeyboard[ 1 ] : englKeyboard[ 0 ];
    const registerLayoutRu = isCapitalize ? ruKeyboard[ 1 ] : ruKeyboard[ 0 ];

    const layout = isEnglKeyPad ? registerLayoutEngl : registerLayoutRu;

    const useLayout = isShowKeyPad ? layout : null;

    return {
        useLayout,
        isShowKeyPad,
        isCapitalize,
        setTogglerAction,

        changeText: (key: string) => {
            switch (key) {
                case 'Shift':
                    setTogglerAction({ type: 'isCapitalize', value: !isCapitalize });
                    break;
                case 'Backspace':
                    deleteOneLetterMessage();
                    break;
                case 'En':
                    setTogglerAction({ type: 'isEnglKeyPad', value: !isEnglKeyPad });
                    break;
                case 'Ru':
                    setTogglerAction({ type: 'isEnglKeyPad', value: !isEnglKeyPad });
                    break;
                case 'Space':
                    onClickWriteMessage(' ');
                    break;
                case 'Enter':
                    sendMessage();
                    break;
                default:
                    if (document.activeElement === inputUpdateMessageRef.current) {
                        onClickWriteTextUpdateMessage(key);
                    } else if (document.activeElement === inputMessageRef.current) {
                        onClickWriteMessage(key);
                    }
            }
        },
    };
};
