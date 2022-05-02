// Core
import React, { FC  } from 'react';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.MouseEvent | React.FormEvent<HTMLFormElement>) => void;
    msg: string;
    msgInputRef: React.LegacyRef<HTMLInputElement> | undefined
}

export const InputMessages: FC<PropTypes> = ({ msg, handleChange, handleSubmit, msgInputRef }) => {
    return (
        <S.Form onSubmit = { handleSubmit }>
            <input
                className = 'inputMessage'
                id = 'inputMessage'
                ref = { msgInputRef }
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
