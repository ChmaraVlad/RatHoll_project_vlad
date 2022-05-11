// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';

// Bus
import { useUser } from '../../../bus/user';
import { useUserSaga } from '../../../bus/user/saga';
import { useError } from '../../../bus/client/error';

// Elements
import { Spinner } from '../../elements';

// Styles
import * as S from './styles';

const Registration: FC = () => {
    const { registerUser } = useUserSaga();
    const { error } = useError();
    const {
        togglers:{ isUserRegistration },
        name,
        setName,
    } = useUser();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredName = event.target.value.trim();
        if (enteredName) {
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
                    {
                        error?.length ? error.map((item, index) => {
                            return (
                                <S.ErrorItem key = { index }>
                                    Error: {item.data?.message ? item.data?.message : item.message}
                                </S.ErrorItem>
                            );
                        }) : (
                            <>
                                <label
                                    htmlFor = 'name'>
                                    Registration Form
                                </label>
                                <S.Input
                                    id = 'name'
                                    name = 'name'
                                    placeholder = 'Enter name'
                                    value = { name }
                                    onChange = { handleChange }
                                />
                                <S.Button
                                    disabled = { !name }
                                    onClick = { handleClick }>
                                    Click for Register
                                </S.Button>
                            </>
                        )
                    }
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
