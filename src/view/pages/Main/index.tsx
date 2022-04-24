// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';
import { Chat } from '../../components/Chat';
import { Header } from '../../components/Header';
import { Keyboard } from '../../components/Keyboard';

// Styles
import { Container } from './styles';

const Main: FC = () => {
    return (
        <Container>
            <Header />
            <Chat/>
            <Keyboard/>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);

