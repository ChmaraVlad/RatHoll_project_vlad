// Tools
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';

// Bus
import { useTogglersRedux } from '../client/togglers';
import { messagesActions } from './slice';


export const useMessages = () => {
    const messages = useSelector((state) => state.messages); // Add messages to ./src/init/redux/index.ts
    const message = useSelector((state) => state.messages.message); // Add messages to ./src/init/redux/index.ts
    const updatedMesage = useSelector((state) => state.messages.updatedMessage); // Add messages to ./src/init/redux/index.ts
    const { setTogglerAction, togglersRedux:{ isChangedMessages }} = useTogglersRedux();

    const dispatch = useDispatch();

    return {
        messages,
        message,
        updatedMesage,
        updateMessage: (text: string) => {
            dispatch(messagesActions.UpdateMessage(text));
        },
        deleteUpdatedMessage: () => {
            dispatch(messagesActions.deleteUpdatedMessage(updatedMesage));
        },
        deleteMessage: (id: string) => {
            dispatch(messagesActions.deleteMessage(id));
            setTogglerAction({ type: 'isChangedMessages', value: !isChangedMessages });
        },
        onChangeTextMessage:          (text: string) => dispatch(messagesActions.onChangeTextMessage(text)),
        deleteOneLetterInTextMessage: () => dispatch(messagesActions.deleteOneLetterInTextMessage(message)),
        resetTextMessage:             () => dispatch(messagesActions.resetTextMessage(message)),
    };
};
