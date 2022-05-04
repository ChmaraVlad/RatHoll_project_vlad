// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Bus
import { useTogglersRedux } from '../../client/togglers';

// Watchers & Actions
import { fetchMessagesAction, watchFetchMessages } from './fetchMessages';
import { createFetchMessageAction, watchFetchCreateMessage } from './createFetchMessage';
import { updateFetchMessageAction, watchFetchUpdateMessage } from './updateFetchMessage';

// Types
import { createMessageType } from '../types';
import { deleteMessageFetchAction, watchDeleteMessageFetch } from './deleteMessageFetch';

export const useMessagesSaga = () => {
    const dispatch = useDispatch();
    const { setTogglerAction, togglersRedux:{ isChangedMessages }} = useTogglersRedux();

    return {
        fetchMessages:    () => void dispatch(fetchMessagesAction()),
        sendMessageFetch: (message: createMessageType) => {
            void dispatch(createFetchMessageAction(message));
            setTogglerAction({ type: 'isChangedMessages', value: !isChangedMessages });
        },
        updateMessageFetch: ({ newText, id }: {newText: string, id: string}) => {
            void dispatch(updateFetchMessageAction({ newText, id }));
            setTogglerAction({ type: 'isUpdating', value: false });
            setTogglerAction({ type: 'isChangedMessages', value: !isChangedMessages });
        },
        deleteMessageFetch: (id: string) => {
            // eslint-disable-next-line no-alert
            const result = confirm(`Вы пдтверждаете удаление сообщения ${id}`);
            if (result) {
                dispatch(deleteMessageFetchAction(id));
                setTogglerAction({ type: 'isChangedMessages', value: !isChangedMessages });
            }
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
