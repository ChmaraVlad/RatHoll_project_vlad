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


    return (
        <S.Container>
            {
                messages.data
                    ? messages.data.map((item, index) => {
                        // const time = true ? null : true;

                        return (
                            <S.ListItem key = { index }>
                                <div className = 'header'>
                                    {item.username}
                                    <span className = 'etc'>...</span>
                                    <div className = 'options'>
                                        <span
                                            className = 'update'
                                            onClick = { ()=>null }>Update
                                        </span>
                                        <span
                                            className = 'delete'
                                            onClick = { ()=>null }>Delete
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
                    : null
            }
        </S.Container>
    );
};
