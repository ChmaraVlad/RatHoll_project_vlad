// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';
import { InputMessages } from '../../components/InputMessages';
import { Keyboard } from '../../components/Keyboard';
import { Messages } from '../../components/Messages';

// Bus
import { useUser } from '../../../bus/user';

// Styles
import * as S from './styles';

const Main: FC = () => {
    const { user, deleteUser } = useUser();

    return (
        <S.Container>
            <S.Header>
                Welcome on board, {user?.username}
                <S.Button onClick = { deleteUser }>
                    Logout
                </S.Button>
            </S.Header>
            <S.Wraper>
                <Messages />
                <InputMessages />
            </S.Wraper>
            <Keyboard />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);

