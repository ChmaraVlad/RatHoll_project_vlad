// Core
// import { useEffect } from 'react';

// Tools
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';
import { useTogglersRedux } from '../client/togglers';
import { useMessages } from '../messages';

// Bus
import { inputUpdateMessageActions } from './slice';

export const useInputUpdateMessage = () => {
    const { setTogglerAction, togglersRedux:{}} = useTogglersRedux();
    const dispatch = useDispatch();
    const { messages } = useMessages();

    const inputUpdateMessage = useSelector((state) => state.inputUpdateMessage.newText);
    const idUpdatedMessage = useSelector((state) => state.inputUpdateMessage.idMessage);

    const IdUpdatingMessage = (id: string) => {
        dispatch(inputUpdateMessageActions.setIdMessage(id));
        setTogglerAction({ type: 'isUpdating', value: true });

        const correctMsg = messages.data?.filter((item)=>{
            return item._id === id;
        });

        if (correctMsg) {
            dispatch(inputUpdateMessageActions.onChangeTextMessageUpdInput(correctMsg[ 0 ].text));
        }
    };

    return {
        inputUpdateMessage,
        idUpdatedMessage,

        onChangeMessage: (text: string) => dispatch(inputUpdateMessageActions.onChangeTextMessageUpdInput(text)),

        resetTextMessage: () => dispatch(inputUpdateMessageActions.deleteUpdatedMessageUpdInput(inputUpdateMessage)),

        IdUpdatingMessage: (id: string) => IdUpdatingMessage(id),
        // IdUpdatingMessage: (id: string) => {
        // dispatch(inputUpdateMessageActions.setIdMessage(id));
        // setTogglerAction({ type: 'isUpdating', value: true });

        // const correctMsg = messages.data?.filter((item)=>{
        //     return item._id === id;
        // });

        // if (correctMsg) {
        //     dispatch(inputUpdateMessageActions.onChangeTextMessageUpdInput(correctMsg[ 0 ].text));
        // }
        // },
    };
};
