// Core
import React, { FC, useState } from 'react';

// Bus
import { useMessagesSaga } from '../../../bus/messages/saga';
import { useUser } from '../../../bus/user';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const InputMessages: FC<PropTypes> = () => {
    const { createMessage } = useMessagesSaga();
    const { user } = useUser();
    const [ msg, setMsg ] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMsg(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (user?.username) {
            createMessage({ text: msg, username: user?.username });
            setMsg('');
        }
    };

    return (
        <S.Form onSubmit = { handleSubmit }>
            <input
                className = 'inputMessage'
                type = 'text'
                value = { msg }
                onChange = { handleChange }
            />
            <input
                disabled = { !msg }
                type = 'submit'
                value = 'SEND'
            />
        </S.Form>
    );
};
