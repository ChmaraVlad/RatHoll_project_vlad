// Core
import React, { FC, useEffect, useState } from 'react';

// Bus
import { useMessages } from '../../../bus/messages';
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useMessagesSaga } from '../../../bus/messages/saga';

// Styles
import * as S from './styles';
import { useUser } from '../../../bus/user';

// Types
type PropTypes = {
    /* type props here */
}

export const Messages: FC<PropTypes> = () => {
    const { messages } = useMessages();
    const { user } = useUser();

    const { deleteMessage, updateMessage } = useMessagesSaga();
    const { setTogglerAction, togglersRedux:{ isUpdating }} = useTogglersRedux();

    const anyMessages = <h1>You dont have any messages</h1>;

    const [ text, setText ] = useState('');
    const [ currentId, setCurrentId ] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const clickHandlerReadyUpdate = (id: string) => {
        return (event: React.MouseEvent) => {
            event.preventDefault();
            const currentId = event.currentTarget.getAttribute('data-id');
            if (currentId) {
                setCurrentId(currentId);
            }


            setTogglerAction({ type: 'isUpdating', value: true });
            const correctMsg = messages.data?.filter((item)=>{
                return item._id === id;
            });
            if (correctMsg) {
                setText(correctMsg[ 0 ].text);
            }
        };
    };
    const clickHandlerCancel = () => {
        return (event: React.MouseEvent) => {
            event.preventDefault();
            setTogglerAction({ type: 'isUpdating', value: false });
        };
    };
    const clickHandlerDelete = (data: string) => {
        return (event: React.MouseEvent) => {
            event.preventDefault();
            deleteMessage(data);
        };
    };
    const clickHandlerUpdate = (id: string, text:string) => {
        return (event: React.MouseEvent) => {
            event.preventDefault();
            setTogglerAction({ type: 'isUpdating', value: false });
            updateMessage({ newText: text, id: id });
        };
    };


    return (
        <S.Container>
            {
                messages.data
                    ? messages.data.map((item, index) => {
                        const { updatedAt, createdAt, username } = item;

                        const optionsArea =  username === user?.username ? (
                            <div className = 'options'>
                                <span
                                    className = 'update'
                                    data-id = { item._id }
                                    onClick = { clickHandlerReadyUpdate(item._id)  }>upd
                                </span>
                                <span>|</span>
                                <span
                                    className = 'delete'
                                    onClick = { clickHandlerDelete(item._id) }>del
                                </span>
                            </div>
                        ) : null;


                        const textArea = isUpdating && currentId === item._id  ? (
                            <>
                                <input
                                    className = 'text-update'
                                    type = 'text'
                                    value = { text }
                                    onChange = { handleChange }
                                />
                                <input
                                    type = 'button'
                                    value = 'ok'
                                    onClick = { clickHandlerUpdate(item._id, text) }
                                />
                                <input
                                    type = 'button'
                                    value = 'cancel'
                                    onClick = { clickHandlerCancel() }
                                />
                            </>
                        ) :  (
                            <div className = 'text'>
                                {item.text}
                            </div>
                        );

                        const dateArea = createdAt === updatedAt ?  item.createdAt.slice(11, 19) : `Upd at ${updatedAt.slice(11, 19)}`;

                        return (
                            <S.ListItem key = { index }>
                                <div className = 'header'>
                                    <div className = 'username'>
                                        {item.username}
                                    </div>
                                    {optionsArea}
                                </div>
                                <div className = 'text'>
                                    {textArea}
                                </div>
                                <div className = 'time'>
                                    {dateArea}
                                </div>
                            </S.ListItem>
                        );
                    })
                    : anyMessages
            }
        </S.Container>
    );
};
