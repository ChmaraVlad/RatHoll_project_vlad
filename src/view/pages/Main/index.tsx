// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';
import { Header } from '../../components/Header';
import { InputMessages } from '../../components/InputMessages';
import { Keyboard } from '../../components/Keyboard';
import { Messages } from '../../components/Messages';

// Styles
import * as S from './styles';

const Main: FC = () => {
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

