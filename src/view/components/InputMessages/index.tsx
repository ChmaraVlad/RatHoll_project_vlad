// Core
import React, { FC  } from 'react';
import { useInputMessage } from '../../../bus/inputMessage';

// Bus
import { useMessagesSaga } from '../../../bus/messages/saga';
import { useUser } from '../../../bus/user';

// Styles
import { Wrapper } from './styles';

// Types
type PropTypes = {
    msgInputRef: React.MutableRefObject<HTMLInputElement | null>
}

export const InputMessages: FC<PropTypes> = ({ msgInputRef }) => {
    const { user } = useUser();
    const { inputMessage, resetTextMessage, onChangeMessage } = useInputMessage();
    const { sendMessageFetch: sendMessage } = useMessagesSaga();

    const handleSubmit = (event: React.MouseEvent | React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (user?.username) {
            sendMessage({ text: inputMessage, username: user?.username });
            resetTextMessage();
        }
    };

    return (
        <Wrapper >
            <input
                className = 'inputMessage'
                id = 'inputMessage'
                ref = { msgInputRef }
                type = 'text'
                value = { inputMessage }
                onChange = { (event) => onChangeMessage(event.target.value) }
            />
            <button
                disabled = { !inputMessage }
                onClick = { handleSubmit }>
                SEND
            </button>
        </Wrapper>
    );
};
