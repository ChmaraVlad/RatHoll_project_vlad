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
    // msg: string;
    // setMsg: React.Dispatch<React.SetStateAction<string>>,
    // handleKeySubmit: (event: React.KeyboardEvent<Element>) => void
}

export const Keyboard: FC<PropTypes> = (/* { msg, setMsg, handleKeySubmit } */) => {
    const { togglersRedux:{ isEnglKeyPad, isShowKeyPad }, setTogglerAction } = useTogglersRedux();

    const handlerBtn = () => {
        setTogglerAction({ type: 'isShowKeyPad', value: !isShowKeyPad });
    };
    const keyBoard = isEnglKeyPad ? <KeyPadEngl /> : <KeyPadRuss />;

    const showBtn = isShowKeyPad ? (
        <div
            className = 'btn-show-keyboard'
            onClick = { handlerBtn }  >
            Hide Keyboard
        </div>
    ) : (
        <div
            className = 'btn-show-keyboard'
            onClick = { handlerBtn }  >
            Show Keyboard
        </div>
    );


    return (
        <S.Container>
            {
                showBtn
            }
            {
                isShowKeyPad
                    ? keyBoard
                    : null
            }
        </S.Container>
    );
};
