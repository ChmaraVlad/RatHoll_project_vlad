// Core
import React, { FC, useEffect } from 'react';

// Bus
import { useMessagesSaga } from '../../../bus/messages/saga';
import { useUserSaga } from '../../../bus/user/saga';

// Components
import { ErrorBoundary } from '../../components';
import { Chat } from '../../components/Chat';
import { Header } from '../../components/Header';

// Styles
import { Container } from './styles';

const Main: FC = () => {
    const { fetchMessages } = useMessagesSaga();
    const { fetchUsers } = useUserSaga();

    useEffect(()=>{
        fetchMessages();
        fetchUsers();
    }, []);

    return (
        <Container>
            <Header />
            <Chat/>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);

