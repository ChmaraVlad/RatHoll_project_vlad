// Core
import React, { FC } from 'react';

// Bus
import { useMessages } from '../../../../bus/messages';
import { useMessagesSaga } from '../../../../bus/messages/saga';
import { useUser } from '../../../../bus/user';
import { useInputUpdateMessage } from '../../../../bus/inputUpdateMessage';

// Styles
import * as S from './styles';

// Component
import { PopupOnDelete } from '../PopupOnDelete';

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Messages: FC = () => {
    const { user } = useUser();
    const { messages, handleDelete, popup, setPopup, idDeleteMessage } = useMessages();
    const { updateMessageFetch, deleteMessageFetch } = useMessagesSaga();
    const {
        isUpdating,
        setTogglerAction,
        inputUpdateMessage,
        onChangeMessage,
        IdUpdatingMessage,
        idUpdatedMessage,
    } = useInputUpdateMessage();

    return (
        <S.Container>
            {
                messages
                    ? messages.map(({ updatedAt, createdAt, username, _id, text }, index) => {
                        const isMyMessage = username === user?.username;

                        return (
                            <S.ListItem
                                alignSelf = { isMyMessage ? 'flex-end' : 'flex-start' }
                                key = { index }>
                                <S.HeaderItem>
                                    <S.Avatar>
                                        <img
                                            alt = 'avatar'
                                            src = 'https://www.kindpng.com/picc/m/31-319667_penguin-png-vector-happy-birthday-penguin-clip-art.png'
                                        />
                                    </S.Avatar>
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
                                                        title = 'update'
                                                    />
                                                </span>
                                                <span
                                                    onClick = {
                                                        () => handleDelete(_id)
                                                    }>
                                                    <FontAwesomeIcon
                                                        color = '#000'
                                                        icon = 'trash'
                                                        size = '1x'
                                                        title = 'delete'
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
                    : (
                        <S.AnyMessages>
                            <h1>You dont have any messages</h1>
                        </S.AnyMessages>
                    )
            }
            {
                popup && (
                    <PopupOnDelete
                        deleteMessageFetch = { deleteMessageFetch }
                        id = { idDeleteMessage }
                        setPopup = { setPopup }
                    />
                )
            }
        </S.Container>
    );
};
