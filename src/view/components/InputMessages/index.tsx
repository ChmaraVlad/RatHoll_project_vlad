// Core
import React, { FC  } from 'react';

// Bus
import { useInputMessage } from '../../../bus/inputMessage';

// Styles
import { Wrapper } from './styles';

// Types
type PropTypes = {
}

export const InputMessages: FC<PropTypes> = () => {
    const { inputMessage, onChangeMessage, sendMessage } = useInputMessage();

    return (
        <Wrapper >
            <input
                className = 'inputMessage'
                id = 'inputMessage'
                type = 'text'
                value = { inputMessage }
                onChange = { (event) => onChangeMessage(event.target.value) }
            />
            <button
                disabled = { !inputMessage.trim() }
                onClick = { sendMessage }>
                SEND
            </button>
        </Wrapper>
    );
};
