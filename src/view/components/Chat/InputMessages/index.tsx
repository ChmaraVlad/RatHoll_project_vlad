// Core
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC  } from 'react';

// Bus
import { useInputMessage } from '../../../../bus/inputMessage';

// Styles
import * as S from './styles';

export const InputMessages: FC = () => {
    const { inputMessage, onChangeMessage, sendMessage, inputMessageRef } = useInputMessage();
    console.log('🚀 ~ file: index.tsx ~ line 13 ~ inputMessageRef', inputMessageRef.current?.name);

    return (
        <S.Wrapper >
            <S.Input
                placeholder = { 'Type message ...' }
                ref = { inputMessageRef }
                value = { inputMessage }
                onChange = { (event) => onChangeMessage(event.target.value) }
            />
            <S.Button
                disabled = { !inputMessage.trim() }
                onClick = { sendMessage }>
                <FontAwesomeIcon
                    color = 'black'
                    icon = 'paper-plane'
                    size = '2x'
                    title = 'send'
                />
            </S.Button>
        </S.Wrapper>
    );
};
