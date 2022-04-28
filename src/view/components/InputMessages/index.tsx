// Core
import React, { FC, useEffect, useState } from 'react';
import reset from 'styled-reset';
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useMessagesSaga } from '../../../bus/messages/saga';
import { useUser } from '../../../bus/user';
import { checkKeyCodeFunction } from '../../../tools/utils/checkKeyCodeFunc';


// Styles
import * as S from './styles';

// Types
type PropTypes = {
}

export const InputMessages: FC<PropTypes> = () => {
    const { togglersRedux: { isEnglKeyPad, isOnFocusInput, isShowKeyPad }, setTogglerAction } = useTogglersRedux();
    const { user } = useUser();

    const { createMessage } = useMessagesSaga();
    const [ msg, setMsg ] = useState('');

    const handleInputFocus = () => {
        setTogglerAction({ type: 'isOnFocusInput', value: true });
    };
    const handleInputBlur = () => {
        setTogglerAction({ type: 'isOnFocusInput', value: false });
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMsg(event.target.value);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (user?.username) {
            createMessage({ text: msg, username: user?.username });
            setMsg('');
        }
        reset;
    };

    if (isShowKeyPad) {
        checkKeyCodeFunction(msg, setMsg, isEnglKeyPad, isOnFocusInput, setTogglerAction);
    }


    return (
        <S.Form onSubmit = { handleSubmit }>
            <input
                // autoFocus
                className = 'inputMessage'
                id = 'inputMessage'
                type = 'text'
                value = { msg }
                onBlur = { handleInputBlur }
                onChange = { handleChange }
                onFocus = { handleInputFocus }
            />
            <input
                disabled = { !msg }
                type = 'submit'
                value = 'SEND'
            />
        </S.Form>
    );
};
