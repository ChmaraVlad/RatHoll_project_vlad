// Core
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC  } from 'react';

// Bus
import { useInputMessage } from '../../../../bus/inputMessage';

// Styles
import * as S from './styles';

export const InputMessages: FC = () => {
    const { inputMessage, onChangeMessage, sendMessage } = useInputMessage();

    return (
        <S.Wrapper >
            <S.Input
                value = { inputMessage }
                onChange = { (event) => onChangeMessage(event.target.value) }
            />
            <S.Button
                disabled = { !inputMessage.trim() }
                onClick = { sendMessage }>
                <FontAwesomeIcon
                    color = 'blue'
                    icon = 'paper-plane'
                    size = '2x'
                    title = 'send'
                />
            </S.Button>
        </S.Wrapper>
    );
};
