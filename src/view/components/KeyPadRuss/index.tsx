// Core
import React, { FC, useEffect } from 'react';

// Bus
import { useTogglersRedux } from '../../../bus/client/togglers';
import { KeysLowercase } from './KeysLowercase';
import { KeysUppercase } from './KeysUppercase';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
    setMsg: React.Dispatch<React.SetStateAction<string>>,
    handleSubmit: (event: React.MouseEvent | React.FormEvent<HTMLFormElement>) => void;
    msg: string;
}
type clickTypeEvent = React.MouseEvent | React.FormEvent<HTMLFormElement>
// type clickTypeEvent =  React.FormEvent<HTMLFormElement>

export const KeyPadRuss: FC<PropTypes> = ({ msg, setMsg, handleSubmit }) => {
    const { setTogglerAction, togglersRedux: { isCapitalize }} = useTogglersRedux();

    const isLowercase =  isCapitalize ? (
        <KeysUppercase
            handleSubmit = { handleSubmit }
            isCapitalize = { isCapitalize }
            msg = { msg }
            setMsg = { setMsg }
            setTogglerAction = { setTogglerAction }
        />
    ) : (
        <KeysLowercase
            handleSubmit = { handleSubmit }
            isCapitalize = { isCapitalize }
            msg = { msg }
            setMsg = { setMsg }
            setTogglerAction = { setTogglerAction }
        />
    );

    return (
        <S.Container>
            <div className = 'keyboard keyboard--ru'>
                <div className = 'keyboard__container'>
                    <div className = 'keyboard__body'>
                        {
                            isLowercase
                        }
                    </div>
                </div>
            </div>
        </S.Container>
    );
};
