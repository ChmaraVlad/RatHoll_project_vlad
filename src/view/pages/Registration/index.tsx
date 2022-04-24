// Core
import React, { FC, useEffect, useState } from 'react';

// Instruments
import { useLocalStorage } from '../../../tools/hooks';

// Bus
import { useUser } from '../../../bus/user';
import { useUserSaga } from '../../../bus/user/saga';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';
import { useTogglersRedux } from '../../../bus/client/togglers';
import { Spinner } from '../../elements';

// Types
type PropTypes = {
    /* type props here */
}

const Registration: FC<PropTypes> = () => {
    const { registerUser } = useUserSaga();
    const [ , setValue ] = useLocalStorage('userId', '');
    const { setTogglerAction, togglersRedux:{ isUserRegistration }} = useTogglersRedux();
    const { user } = useUser();


    const [ name, setName ] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredName = event.target.value;
        setName(enteredName);
    };

    useEffect(()=>{
        if (user?._id) {
            setValue(user._id);
            setTogglerAction({ type: 'isLoggedIn', value: true });
        }
    }, [ user ]);

    const handleForSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        registerUser(name);
    };

    if (isUserRegistration) {
        return <Spinner />;
    }

    return (
        <S.Container>
            <S.Main>
                <S.FormWrapper>
                    <form
                        id = 'formId'
                        onSubmit = { handleForSubmit }>
                        <label
                            htmlFor = 'name'>
                            Registration Form
                        </label>
                        <input
                            id = 'name'
                            name = 'name'
                            placeholder = 'RAT:TEST1'
                            type = 'text'
                            value = { name }
                            onChange = { handleChange }
                        />
                        <input
                            type = 'submit'
                            value = 'Click to register'
                        />
                    </form>
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
