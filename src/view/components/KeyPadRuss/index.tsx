// Core
import React, { FC } from 'react';

// Bus
import { useTogglersRedux } from '../../../bus/client/togglers';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const KeyPadRuss: FC<PropTypes> = () => {
    const { setTogglerAction } = useTogglersRedux();

    const handleKeyPad = () => {
        setTogglerAction({ type: 'isEnglKeyPad', value: true });
    };

    return (
        <S.Container>
            <div className = 'keyboard keyboard--ru '>
                <div className = 'keyboard__container'>
                    <div className = 'keyboard__body'>
                        <div className = 'keyboard__row'>
                            <div className = 'keyboard__item'>1</div>
                            <div className = 'keyboard__item'>2</div>
                            <div className = 'keyboard__item'>3</div>
                            <div className = 'keyboard__item'>4</div>
                            <div className = 'keyboard__item'>5</div>
                            <div className = 'keyboard__item'>6</div>
                            <div className = 'keyboard__item'>7</div>
                            <div className = 'keyboard__item'>8</div>
                            <div className = 'keyboard__item'>9</div>
                            <div className = 'keyboard__item'>0</div>
                        </div>
                        <div className = 'keyboard__row keyboard__row--ru'>
                            <div className = 'keyboard__item'>й</div>
                            <div className = 'keyboard__item'>ц</div>
                            <div className = 'keyboard__item'>у</div>
                            <div className = 'keyboard__item'>к</div>
                            <div className = 'keyboard__item'>е</div>
                            <div className = 'keyboard__item'>н</div>
                            <div className = 'keyboard__item'>г</div>
                            <div className = 'keyboard__item'>ш</div>
                            <div className = 'keyboard__item'>щ</div>
                            <div className = 'keyboard__item'>з</div>
                            <div className = 'keyboard__item'>х</div>
                            <div className = 'keyboard__item'>ъ</div>
                        </div>
                        <div className = 'keyboard__row  keyboard__row--ru-small'>
                            <div className = 'keyboard__item'>ф</div>
                            <div className = 'keyboard__item'>ы</div>
                            <div className = 'keyboard__item'>в</div>
                            <div className = 'keyboard__item'>а</div>
                            <div className = 'keyboard__item'>п</div>
                            <div className = 'keyboard__item'>р</div>
                            <div className = 'keyboard__item'>о</div>
                            <div className = 'keyboard__item'>л</div>
                            <div className = 'keyboard__item'>д</div>
                            <div className = 'keyboard__item'>ж</div>
                            <div className = 'keyboard__item'>э</div>
                        </div>
                        <div className = 'keyboard__row  keyboard__row--ru-small'>
                            <div className = 'keyboard__item'>Shift</div>
                            <div className = 'keyboard__item'>я</div>
                            <div className = 'keyboard__item'>ч</div>
                            <div className = 'keyboard__item'>с</div>
                            <div className = 'keyboard__item'>м</div>
                            <div className = 'keyboard__item'>и</div>
                            <div className = 'keyboard__item'>т</div>
                            <div className = 'keyboard__item'>ь</div>
                            <div className = 'keyboard__item'>б</div>
                            <div className = 'keyboard__item'>ю</div>
                            <div className = 'keyboard__item'>Backspace</div>
                        </div>
                        <div className = 'keyboard__row keyboard__row--footer'>
                            <div className = 'keyboard__item'>,</div>
                            <div
                                className = 'keyboard__item'
                                onClick = { handleKeyPad }>Ru
                            </div>
                            <div className = 'keyboard__item'>Space</div>
                            <div className = 'keyboard__item'>.</div>
                            <div className = 'keyboard__item'>Enter</div>
                        </div>
                    </div>
                </div>
            </div>
        </S.Container>
    );
};
