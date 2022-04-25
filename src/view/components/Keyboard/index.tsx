// Core
import React, { FC } from 'react';

// Bus
import { useTogglersRedux } from '../../../bus/client/togglers';


// Components
import { KeyPadEngl } from '../KeyPadEnglish';
import { KeyPadRuss } from '../KeyPadRuss';


// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const Keyboard: FC<PropTypes> = () => {
    const { togglersRedux:{ isEnglKeyPad }} = useTogglersRedux();

    return (
        <S.Container>

            {
                isEnglKeyPad ? <KeyPadEngl /> : <KeyPadRuss />
            }
        </S.Container>
    );
};
