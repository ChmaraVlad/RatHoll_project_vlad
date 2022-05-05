// Core
import React, { FC  } from 'react';

// Bus
import { useInputMessage } from '../../../bus/inputMessage';

// Styles
import * as S from './styles';

export const InputMessages: FC = () => {
    const { inputMessage, onChangeMessage, sendMessage } = useInputMessage();

    return (
        <S.Wrapper >
            <S.Input
                id = 'inputMessage'
                value = { inputMessage }
                onChange = { (event) => onChangeMessage(event.target.value) }
            />
            <S.Button
                disabled = { !inputMessage.trim() }
                onClick = { sendMessage }>
                SEND
            </S.Button>
        </S.Wrapper>
    );
};
