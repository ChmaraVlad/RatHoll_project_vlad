// Core
import React, { FC } from 'react';

// Components
import { Header } from '../Header';
import { InputMessages } from '../InputMessages';
import { Keyboard } from '../Keyboard';
import { Messages } from '../Messages';
import { PopupOnDelete } from '../PopupOnDelete';


// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}


export const Chat: FC<PropTypes> = () => {
    return (
        <S.Container>
            <Header />
            <S.Wraper>
                <Messages />
                <InputMessages />
            </S.Wraper>
            <Keyboard />
            <PopupOnDelete />
        </S.Container>
    );
};
