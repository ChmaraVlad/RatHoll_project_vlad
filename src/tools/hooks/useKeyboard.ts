// Bus
import { useTogglersRedux } from '../../bus/client/togglers';

// Tools
import { ruKeyboard, englKeyboard } from '../utils/keyboardData';

// Components
import { useInputMessage } from '../../bus/inputMessage';

export const useKeyboardHook = () => {
    // const keys = useSelector((state) => state.keyboard.keys);
    // const activeKeys = useSelector((state) => state.keyboard.activeKeys);

    const { onClickWriteMessage, deleteOneLetterMessage, sendMessage } = useInputMessage();

    const { togglersRedux:{ isShowKeyPad, isEnglKeyPad, isCapitalize }, setTogglerAction } = useTogglersRedux();

    // --------- layout basic logic
    const registerLayoutEngl = isCapitalize ? englKeyboard[ 1 ] : englKeyboard[ 0 ];
    const registerLayoutRu = isCapitalize ? ruKeyboard[ 1 ] : ruKeyboard[ 0 ];

    const layout = isEnglKeyPad ? registerLayoutEngl : registerLayoutRu;

    const useLayout = isShowKeyPad ? layout : null;

    return {
        useLayout,
        isShowKeyPad,
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
                    onClickWriteMessage(key);
            }
        },
    };
};
