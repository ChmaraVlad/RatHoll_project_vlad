// Core
import React, { FC } from 'react';

// Components
import { InputMessages } from '../InputMessages';
import { Keyboard } from '../Keyboard';
import { Messages } from '../Messages';
import { Users } from '../Users';


// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}


export const Chat: FC<PropTypes> = () => {
    return (
        <S.Container>
            <S.Wraper>
                <Users/>
                <Messages />
                <InputMessages />
            </S.Wraper>
            <Keyboard />
        </S.Container>
    );
};
