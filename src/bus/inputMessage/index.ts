// Core
// import { useEffect } from 'react';

// Tools
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';
import { inputMessageActions } from './slice';

// Saga
// import { useInputMessageSaga } from './saga';

export const useInputMessage = () => {
    const dispatch = useDispatch();
    // const { fetchInputMessage } = useInputMessageSaga();
    const inputMessage = useSelector((state) => state.inputMessage);


    // useEffect(() => {
    //     fetchInputMessage();
    // }, []);

    return {
        inputMessage,

        onChangeMessage: (text: string) => dispatch(inputMessageActions.onChangeTextMessage(text)),

        deleteOneLetterMessage: () => dispatch(inputMessageActions.deleteOneLetterInTextMessage(inputMessage)),

        resetTextMessage: () => dispatch(inputMessageActions.resetTextMessage(inputMessage)),
    };
};
