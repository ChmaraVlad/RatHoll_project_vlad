// Core
import React, { FC, useEffect } from 'react';

// Bus
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useMessagesSaga } from '../../../bus/messages/saga';

// Components
import { ErrorBoundary } from '../../components';
import { Chat } from '../../components/Chat';

// Styles
import { Container } from './styles';

const Main: FC = () => {
    const { fetchMessages } = useMessagesSaga();

    const { togglersRedux:{ isChangedMessages }} = useTogglersRedux();

    useEffect(()=>{
        fetchMessages();
    }, [ isChangedMessages ]);

    return (
        <Container>
            <Chat/>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);

