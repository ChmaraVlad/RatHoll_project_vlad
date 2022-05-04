// Core
import React, { FC, useEffect } from 'react';

// Bus
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useMessages } from '../../../bus/messages';
import { useMessagesSaga } from '../../../bus/messages/saga';

// Components
import { ErrorBoundary } from '../../components';
import { Header } from '../../components/Header';
import { InputMessages } from '../../components/InputMessages';
import { Keyboard } from '../../components/Keyboard';
import { Messages } from '../../components/Messages';


// Styles
import * as S from './styles';

const Main: FC = () => {
    const { fetchMessages } = useMessagesSaga();
    const { messages } = useMessages();

    // const { togglersRedux:{ isChangedMessages }} = useTogglersRedux();

    useEffect(()=>{
        fetchMessages();
    }, [  ]);

    return (
        <S.Container>
            <Header />
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

