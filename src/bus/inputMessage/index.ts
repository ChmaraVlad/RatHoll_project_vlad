// Tools
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';
import { useInputUpdateMessage } from '../inputUpdateMessage';
import { inputUpdateMessageActions } from '../inputUpdateMessage/slice';
import { useMessagesSaga } from '../messages/saga';
import { inputMessageActions } from './slice';

// Saga
// import { useInputMessageSaga } from './saga';

export const useInputMessage = () => {
    const dispatch = useDispatch();

    const inputMessageRef = useRef< HTMLInputElement | null >(null);

    const inputMessage = useSelector((state) => state.inputMessage);
    const username = useSelector((state) => state.user.user?.username);

    const { sendMessageFetch } = useMessagesSaga();
    const { inputUpdateMessageRef } = useInputUpdateMessage();

    let user = '';
    if (username) {
        user = username;
    }

    return {
        inputMessage,
        inputMessageRef,

        sendMessage: () => {
            if (inputMessage.trim()) {
                sendMessageFetch({ text: inputMessage, username: user });
                dispatch(inputMessageActions.resetTextMessage(inputMessage));
            }
        },

        onChangeMessage: (text: string) => {
            dispatch(inputMessageActions.onChangeTextMessage(text));
        },

        onClickWriteMessage: (text: string) => {
            dispatch(inputMessageActions.onClickWriteTextMessage(text));
        },

        deleteOneLetterMessage: () => dispatch(inputMessageActions.deleteOneLetterInTextMessage(inputMessage)),

        resetTextMessage: () => dispatch(inputMessageActions.resetTextMessage(inputMessage)),
    };
};
