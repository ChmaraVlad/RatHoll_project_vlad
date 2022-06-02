// Core
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../../tools/hooks';

// Bus
import { useTogglersRedux } from '../togglers';

//Actions
import { inputUpdateMessageActions } from './slice';

export const useInputUpdateMessage = () => {
    const dispatch = useDispatch();

    const { setTogglerAction, togglersRedux:{ isUpdating }} = useTogglersRedux();

    const messages = useSelector((state) => state.messages);
    const inputUpdateMessage = useSelector((state) => state.inputUpdateMessage.newText);
    const idUpdatedMessage = useSelector((state) => state.inputUpdateMessage.idMessage);

    const IdUpdatingMessage = (id: string) => {
        dispatch(inputUpdateMessageActions.setIdMessage(id));
        setTogglerAction({ type: 'isUpdating', value: true });

        const correctMsg = messages?.filter((item)=>{
            return item._id === id;
        });

        if (correctMsg) {
            dispatch(inputUpdateMessageActions.onChangeTextMessageUpdInput(correctMsg[ 0 ].text));
        }
    };

    return {
        isUpdating,
        setTogglerAction,
        inputUpdateMessage,
        idUpdatedMessage,

        onChangeMessage: (text: string) => dispatch(inputUpdateMessageActions.onChangeTextMessageUpdInput(text)),

        resetTextMessage: () => dispatch(inputUpdateMessageActions.deleteUpdatedMessageUpdInput(inputUpdateMessage)),

        IdUpdatingMessage: (id: string) => IdUpdatingMessage(id),
    };
};