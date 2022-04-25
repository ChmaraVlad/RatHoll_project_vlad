// Core
import React, { FC } from 'react';
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useMessages } from '../../../bus/messages';
import { useMessagesSaga } from '../../../bus/messages/saga';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const Messages: FC<PropTypes> = () => {
    const { messages } = useMessages();
    const { deleteMessage } = useMessagesSaga();
    const { setTogglerAction } = useTogglersRedux();

    const anyMessages = <h1>You dont have any messages</h1>;

    const clickHandlerDelete = (data: string) => {
        return (event: React.MouseEvent) => {
            event.preventDefault();
            deleteMessage(data);
        };
    };
    const clickHandlerUpdate = (data: string) => {
        return (event: React.MouseEvent) => {
            event.preventDefault();
            setTogglerAction({ type: 'isReadyForUpdate', value: true });
        };
    };

    return (
        <S.Container>
            {
                messages.data
                    ? messages.data.map((item, index) => {
                        return (
                            <S.ListItem key = { index }>
                                <div className = 'header'>
                                    <div className = 'username'>
                                        {item.username}
                                    </div>
                                    <div className = 'options'>
                                        <span
                                            className = 'update'
                                            onClick = { clickHandlerUpdate(item._id)  }>upd
                                        </span>
                                        <span>|</span>
                                        <span
                                            className = 'delete'
                                            onClick = { clickHandlerDelete(item._id) }>del
                                        </span>
                                    </div>
                                </div>
                                <div className = 'text'>
                                    {item.text}
                                </div>
                                <div className = 'time'>
                                    {item.createdAt.slice(11, 19)}
                                </div>
                            </S.ListItem>
                        );
                    })
                    : anyMessages
            }
        </S.Container>
    );
};
