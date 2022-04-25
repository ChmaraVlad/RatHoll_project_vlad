// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Watchers & Actions
import { fetchMessagesAction, watchFetchMessages } from './fetchMessages';
import { createMessageAction, watchCreateMessage } from './createMessage';
import { deleteMessageAction, watchDeleteMessage } from './deleteMessage';
import { updateMessageAction, watchUpdateMessage } from './updateMessage';

// Types
import { createMessageType } from '../types';

export const useMessagesSaga = () => {
    const dispatch = useDispatch();

    return {
        fetchMessages: () => void dispatch(fetchMessagesAction()),
        createMessage: (msg: createMessageType) => void dispatch(createMessageAction(msg)),
        deleteMessage: (id: string) => void dispatch(deleteMessageAction(id)),
        updateMessage: (text: string) => void dispatch(updateMessageAction(text)),
    };
};

export function* watchMessages(): SagaIterator {
    yield all([
        call(watchFetchMessages),
        call(watchCreateMessage),
        call(watchDeleteMessage),
        call(watchUpdateMessage),
    ]);
}
