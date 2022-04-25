// Core
import React, { FC } from 'react';

// Components
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
            <Users/>
            <Messages />
        </S.Container>
    );
};
