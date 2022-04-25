// Core
import React, { FC, useEffect } from 'react';
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

export const Chat: FC<PropTypes> = () => {
    const { fetchMessages } = useMessagesSaga();
    const { messages } = useMessages();

    useEffect(()=>{
        fetchMessages();
    }, [ ]);

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
