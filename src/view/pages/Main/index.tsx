// Core
import React, { FC } from 'react';
import { useMessages } from '../../../bus/messages';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import { Container } from './styles';

const Main: FC = () => {
    const { messages } = useMessages();
    console.log(messages);


    return (
        <Container>
            CODE HERE
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
