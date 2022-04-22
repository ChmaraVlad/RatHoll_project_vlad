// Core
import React, { FC, useState } from 'react';
import { useMessages } from '../../../bus/messages';
// import { useTogglersRedux } from '../../../bus/client/togglers';
import { useUser } from '../../../bus/user';
// import { useLocalStorage } from '../../../tools/hooks';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Registration: FC<PropTypes> = () => {
    const { registerUser, fetchUsers } = useUser();
    const { messages } = useMessages();

    const [ name, setName ] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredName = event.target.value;
        setName(enteredName);
    };


    // const [ storedValue, setValue ] = useLocalStorage('userId', null);

    const handleForSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // registerUser(name);
        // fetchUsers();
        console.log(messages);


        // fetch('https://api.barbarossa.pp.ua/users/register', {
        //     method:  'POST',
        //     headers: {
        //         Accept:         'application/json, text/plain, */*',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ username: name }),
        // }).then((res) => {
        //     return res.json();
        // })
        //     .then((data) => {
        //         setValue(data._id);
        //         setTogglerAction({ type: 'isLoggedIn', value: true });
        //     });
    };

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
