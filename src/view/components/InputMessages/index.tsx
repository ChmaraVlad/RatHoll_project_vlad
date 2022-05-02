// Core
import React, { FC  } from 'react';
import { useMessages } from '../../../bus/messages';

// Styles
import { Wrapper } from './styles';

// Types
type PropTypes = {
    handleSubmit: (event: React.MouseEvent | React.FormEvent<HTMLFormElement>) => void;
    msgInputRef: React.LegacyRef<HTMLInputElement> | undefined
}

export const InputMessages: FC<PropTypes> = ({ handleSubmit, msgInputRef }) => {
    const { onChangeTextMessage, message } = useMessages();


    return (
        <Wrapper >
            <input
                className = 'inputMessage'
                id = 'inputMessage'
                ref = { msgInputRef }
                type = 'text'
                value = { message }
                onChange = { (event) => onChangeTextMessage(event.target.value) }
            />
            <button onClick = { handleSubmit }>
                SEND
            </button>
        </Wrapper>
    );
};
