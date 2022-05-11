// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Watchers & Actions
import { fetchMessagesAction, watchFetchMessages } from './fetchMessages';
import { createFetchMessageAction, watchFetchCreateMessage } from './createFetchMessage';
import { updateFetchMessageAction, watchFetchUpdateMessage } from './updateFetchMessage';
import { deleteMessageFetchAction, watchDeleteMessageFetch } from './deleteMessageFetch';

// Types
import { createMessageType, newMessage } from '../types';
import { useTogglersRedux } from '../../client/togglers';

export const useMessagesSaga = () => {
    const dispatch = useDispatch();

    const { setTogglerAction } = useTogglersRedux();

    return {
        fetchMessages:    () => void dispatch(fetchMessagesAction()),
        sendMessageFetch: (message: createMessageType) => {
            void dispatch(createFetchMessageAction(message));
        },
        updateMessageFetch: ({ newText, id }: newMessage) => {
            void dispatch(updateFetchMessageAction({ newText, id }));
            setTogglerAction({ type: 'isUpdating', value: false });
        },
        deleteMessageFetch: (id: string) => {
            dispatch(deleteMessageFetchAction(id));
        },
    };
};

export function* watchMessages(): SagaIterator {
    yield all([
        call(watchFetchMessages),
        call(watchFetchCreateMessage),
        call(watchFetchUpdateMessage),
        call(watchDeleteMessageFetch),
    ]);
}
