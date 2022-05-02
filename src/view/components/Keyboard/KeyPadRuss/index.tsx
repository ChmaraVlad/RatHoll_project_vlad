// Core
import React, { FC } from 'react';

// Bus
import { useTogglersRedux } from '../../../../bus/client/togglers';
import { KeysLowercase } from './KeysLowercase';
import { KeysUppercase } from './KeysUppercase';

// Styles
import * as S from './styles';

export const KeyPadRuss: FC = () => {
    // const { setTogglerAction, togglersRedux: { isCapitalize }} = useTogglersRedux();

    // const isLowercase =  isCapitalize ? (
    //     <KeysUppercase
    //         handleSubmit = { handleSubmit }
    //         isCapitalize = { isCapitalize }
    //         msg = { msg }
    //         setMsg = { setMsg }
    //         setTogglerAction = { setTogglerAction }
    //     />
    // ) : (
    //     <KeysLowercase
    //         handleSubmit = { handleSubmit }
    //         isCapitalize = { isCapitalize }
    //         msg = { msg }
    //         setMsg = { setMsg }
    //         setTogglerAction = { setTogglerAction }
    //     />
    // );

    return (
        <S.Container>
            {/* <div className = 'keyboard keyboard--ru'>
                <div className = 'keyboard__container'>
                    <div className = 'keyboard__body'>
                        {
                            isLowercase
                        }
                    </div>
                </div>
            </div> */}
        </S.Container>
    );
};
