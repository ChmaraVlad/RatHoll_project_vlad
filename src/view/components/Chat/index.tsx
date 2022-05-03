// Core
import React, { FC, useRef } from 'react';

// Bus
import { useMessages } from '../../../bus/messages';
import { useMessagesSaga } from '../../../bus/messages/saga';
import { useUser } from '../../../bus/user';

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
    const msgInputRef = useRef<HTMLInputElement | null>(null);

    return (
        <S.Container>
            <S.Wraper>
                <Users/>
                <Messages />
                <InputMessages
                    msgInputRef = { msgInputRef }
                />
            </S.Wraper>
            <Keyboard />
        </S.Container>
    );
};
