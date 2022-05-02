// Core
import React, { createRef, FC, useEffect, useState } from 'react';
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
    const { createMessage } = useMessagesSaga();
    const msgInputRef: React.LegacyRef<HTMLInputElement> = createRef();

    const [ msg, setMsg ] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMsg(event.target.value);
    };
    const handleSubmit = (event: React.MouseEvent | React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (user?.username) {
            createMessage({ text: msg, username: user?.username });
            setMsg('');
        }
    };

    return (
        <S.Container>
            <S.Wraper>
                <Users/>
                <Messages />
                <InputMessages
                    handleChange = { handleChange }
                    handleSubmit = { handleSubmit }
                    msg = { msg }
                    msgInputRef = { msgInputRef }
                />
            </S.Wraper>
            <Keyboard
                handleSubmit = { handleSubmit }
                msg = { msg }
                msgInputRef = { msgInputRef }
                setMsg = { setMsg }
            />
        </S.Container>
    );
};
