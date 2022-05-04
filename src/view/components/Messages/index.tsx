// Core
import React, { FC } from 'react';

// Bus
import { useMessages } from '../../../bus/messages';
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useMessagesSaga } from '../../../bus/messages/saga';
import { useUser } from '../../../bus/user';
import { useInputUpdateMessage } from '../../../bus/inputUpdateMessage';

// Styles
import * as S from './styles';

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Types
type PropTypes = {
    /* type props here */
}

export const Messages: FC<PropTypes> = () => {
    const { user } = useUser();
    const { messages } = useMessages();
    const { updateMessageFetch, deleteMessageFetch } = useMessagesSaga();
    const {
        inputUpdateMessage,
        onChangeMessage,
        IdUpdatingMessage,
        idUpdatedMessage,
    } = useInputUpdateMessage();

    const { setTogglerAction, togglersRedux:{ isUpdating }} = useTogglersRedux();

    return (
        <S.Container>
            {
                messages.data
                    ? messages.data.map(({ updatedAt, createdAt, username, _id, text }, index) => {
                        const isMyMessage = username === user?.username;

                        return (
                            <S.ListItem
                                alignSelf = { isMyMessage ? 'flex-end' : 'flex-start' }
                                key = { index }>
                                <S.HeaderItem>
                                    <S.UserName>
                                        {username}
                                    </S.UserName>
                                    {
                                        isMyMessage ? (
                                            <S.Options>
                                                <span
                                                    onClick = {
                                                        () => IdUpdatingMessage(_id)
                                                    }>
                                                    <FontAwesomeIcon
                                                        color = '#000'
                                                        icon = 'eraser'
                                                        size = 'lg'
                                                        title = 'trash'
                                                    />
                                                </span>
                                                <span
                                                    onClick = {
                                                        () => deleteMessageFetch(_id)
                                                    }>
                                                    <FontAwesomeIcon
                                                        color = '#000'
                                                        icon = 'trash'
                                                        size = '1x'
                                                        title = 'eraser'
                                                    />
                                                </span>
                                            </S.Options>
                                        ) : null
                                    }
                                </S.HeaderItem>
                                <S.TextItem >
                                    {
                                        isUpdating && idUpdatedMessage === _id  ? (
                                            <>
                                                <S.InputUpdate
                                                    value = { inputUpdateMessage }
                                                    onChange = { (event) => onChangeMessage(event.target.value) }
                                                />
                                                <button
                                                    onClick = {
                                                        // eslint-disable-next-line max-len
                                                        () => updateMessageFetch({ newText: inputUpdateMessage, id: _id })
                                                    }>Ok
                                                </button>
                                                <button
                                                    onClick = {
                                                        () => setTogglerAction({ type: 'isUpdating', value: false })
                                                    }>cancel
                                                </button>
                                            </>
                                        ) :  (
                                            <S.TextItem>
                                                {text}
                                            </S.TextItem>
                                        )
                                    }
                                </S.TextItem>
                                <S.TimeItem>
                                    {
                                        createdAt === updatedAt ?  createdAt.slice(11, 19) : `Upd at ${updatedAt.slice(11, 19)}`
                                    }
                                </S.TimeItem>
                            </S.ListItem>
                        );
                    })
                    : (<h1>You dont have any messages</h1>)
            }
        </S.Container>
    );
};
