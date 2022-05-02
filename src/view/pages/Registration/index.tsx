// Core
import React, { FC, useState } from 'react';

// Bus
import { useUserSaga } from '../../../bus/user/saga';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';
import { useTogglersRedux } from '../../../bus/client/togglers';
import { Spinner } from '../../elements';

const Registration: FC = () => {
    const { registerUser } = useUserSaga();
    const [ name, setName ] = useState('');
    const { togglersRedux:{ isUserRegistration }} = useTogglersRedux();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredName = event.target.value;
        setName(enteredName);
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
                        <button onClick = { handleClick }>
                            Click for Register
                        </button>
                        {
                            name === '' ? (<div className = 'alert'>Write your name</div>) : null
                        }
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
