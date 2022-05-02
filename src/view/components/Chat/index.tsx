// Core
import React, { createRef, FC, useEffect, useState } from 'react';
import { useMessages } from '../../../bus/messages';
import { useMessagesSaga } from '../../../bus/messages/saga';
import { useUser } from '../../../bus/user';

// Components
import { InputMessages } from '../InputMessages';
import { Keyboard } from '../Keyboard';
import { Messages } from '../Messages';
import { Users } from '../Users';


// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}


export const Chat: FC<PropTypes> = () => {
    const { user } = useUser();
    const { sendMessage } = useMessagesSaga();
    const { message, resetTextMessage } = useMessages();
    const msgInputRef: React.LegacyRef<HTMLInputElement> = createRef();

    const handleSubmit = (event: React.MouseEvent | React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (user?.username) {
            sendMessage({ text: message, username: user?.username });
            resetTextMessage();
        }
    };

    return (
        <S.Container>
            <S.Wraper>
                <Users/>
                <Messages />
                <InputMessages
                    handleSubmit = { handleSubmit }
                    msgInputRef = { msgInputRef }
                />
            </S.Wraper>
            <Keyboard />
        </S.Container>
    );
};
