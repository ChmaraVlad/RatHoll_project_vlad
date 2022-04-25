// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const InputMessages: FC<PropTypes> = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <S.Form onSubmit = { handleSubmit }>
            <input
                className = 'inputMessage'
                type = 'text'
            />
            <input
                type = 'button'
                value = 'SEND'
            />
        </S.Form>
    );
};
