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
                        const myMsgClass = username === user?.username ? 'my-msg' : '';

                        return (
                            <S.ListItem
                                className = { myMsgClass }
                                key = { index }>
                                <div className = 'header'>
                                    <div className = 'username'>
                                        {username}
                                    </div>
                                    {
                                        username === user?.username ? (
                                            <div className = 'options'>
                                                <span
                                                    className = 'update'
                                                    onClick = {
                                                        () => IdUpdatingMessage(_id)
                                                    }>upd
                                                </span>
                                                <span>|</span>
                                                <span
                                                    className = 'delete'
                                                    onClick = {
                                                        () => deleteMessageFetch(_id)
                                                    }>del
                                                </span>
                                            </div>
                                        ) : null
                                    }
                                </div>
                                <div className = 'text'>
                                    {
                                        isUpdating && idUpdatedMessage === _id  ? (
                                            <>
                                                <input
                                                    className = 'text-update'
                                                    type = 'text'
                                                    value = { inputUpdateMessage }
                                                    onChange = { (event) => onChangeMessage(event.target.value) }
                                                />
                                                <button
                                                    onClick = {
                                                        // eslint-disable-next-line max-len
                                                        () => updateMessageFetch({ newText: inputUpdateMessage, id: _id })
                                                    }>Ok
                                                </button>
                                                <input
                                                    type = 'button'
                                                    value = 'cancel'
                                                    onClick = {
                                                        () => setTogglerAction({ type: 'isUpdating', value: false })
                                                    }
                                                />
                                            </>
                                        ) :  (
                                            <div className = 'text'>
                                                {text}
                                            </div>
                                        )
                                    }
                                </div>
                                <div className = 'time'>
                                    {
                                        createdAt === updatedAt ?  createdAt.slice(11, 19) : `Upd at ${updatedAt.slice(11, 19)}`
                                    }
                                </div>
                            </S.ListItem>
                        );
                    })
                    : (<h1>You dont have any messages</h1>)
            }
        </S.Container>
    );
};
