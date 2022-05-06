// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';

// Bus
import { useUser } from '../../../bus/user';
import { useUserSaga } from '../../../bus/user/saga';

// Elements
import { Spinner } from '../../elements';

// Styles
import * as S from './styles';

const Registration: FC = () => {
    const { registerUser } = useUserSaga();
    const {
        setTogglerAction,
        togglers:{ isUserRegistration, isNameValid },
        name,
        setName,
    } = useUser();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredName = event.target.value.trim();
        if (enteredName) {
            setTogglerAction({ type: 'isNameValid', value: true });
            setName(enteredName);
        }
    };

    const handleClick = () => {
        registerUser(name);
    };

    if (isUserRegistration) {
        return <Spinner />;
    }

    return (
        <S.Container>
            <S.Main>
                <S.FormWrapper>
                    <div
                        id = 'formId'>
                        <label
                            htmlFor = 'name'>
                            Registration Form
                        </label>
                        <input
                            id = 'name'
                            name = 'name'
                            placeholder = 'Enter name'
                            type = 'text'
                            value = { name }
                            onChange = { handleChange }
                        />
                        <button
                            disabled = { !isNameValid }
                            onClick = { handleClick }>
                            Click for Register
                        </button>
                    </div>
                </S.FormWrapper>
            </S.Main>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Registration />
    </ErrorBoundary>
);
