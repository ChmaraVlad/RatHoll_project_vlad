// Core
import React, { FC } from 'react';
import { useMessages } from '../../../bus/messages';

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

    const anyMessages = <h1>You dont have any messages</h1>;

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
                                            onClick = { ()=>null }>upd
                                        </span>
                                        <span>|</span>
                                        <span
                                            className = 'delete'
                                            onClick = { ()=>null }>del
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
