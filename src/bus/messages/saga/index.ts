// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Bus
import { useTogglersRedux } from '../../client/togglers';

// Watchers & Actions
import { fetchMessagesAction, watchFetchMessages } from './fetchMessages';
import { createFetchMessageAction, watchFetchCreateMessage } from './createFetchMessage';
import { deleteFetchMessageAction, watchFetchDeleteMessage } from './deleteFetchMessage';
import { updateFetchMessageAction, watchFetchUpdateMessage } from './updateFetchMessage';

// Types
import { createMessageType } from '../types';

export const useMessagesSaga = () => {
    const dispatch = useDispatch();
    const { setTogglerAction, togglersRedux:{ isChangedMessages }} = useTogglersRedux();

    return {
        fetchMessages: () => void dispatch(fetchMessagesAction()),
        createMessage: (msg: createMessageType) => {
            void dispatch(createFetchMessageAction(msg));
            setTogglerAction({ type: 'isChangedMessages', value: !isChangedMessages });
        },
        deleteMessage: (id: string) => {
            void dispatch(deleteFetchMessageAction(id));
            setTogglerAction({ type: 'isChangedMessages', value: !isChangedMessages });
        },
        updateMessage: ({ newText, id }: {newText: string, id: string}) => {
            void dispatch(updateFetchMessageAction({ newText, id }));
            setTogglerAction({ type: 'isChangedMessages', value: !isChangedMessages });
        },
    };
};

export function* watchMessages(): SagaIterator {
    yield all([
        call(watchFetchMessages),
        call(watchFetchCreateMessage),
        call(watchFetchDeleteMessage),
        call(watchFetchUpdateMessage),
    ]);
}
