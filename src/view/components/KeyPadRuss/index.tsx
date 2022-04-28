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
                            <div className = 'keyboard__item letter'>й</div>
                            <div className = 'keyboard__item letter'>ц</div>
                            <div className = 'keyboard__item letter'>у</div>
                            <div className = 'keyboard__item letter'>к</div>
                            <div className = 'keyboard__item letter'>е</div>
                            <div className = 'keyboard__item letter'>н</div>
                            <div className = 'keyboard__item letter'>г</div>
                            <div className = 'keyboard__item letter'>ш</div>
                            <div className = 'keyboard__item letter'>щ</div>
                            <div className = 'keyboard__item letter'>з</div>
                            <div className = 'keyboard__item letter'>х</div>
                            <div className = 'keyboard__item letter'>ъ</div>
                        </div>
                        <div className = 'keyboard__row  keyboard__row--ru-small'>
                            <div className = 'keyboard__item letter'>ф</div>
                            <div className = 'keyboard__item letter'>ы</div>
                            <div className = 'keyboard__item letter'>в</div>
                            <div className = 'keyboard__item letter'>а</div>
                            <div className = 'keyboard__item letter'>п</div>
                            <div className = 'keyboard__item letter'>р</div>
                            <div className = 'keyboard__item letter'>о</div>
                            <div className = 'keyboard__item letter'>л</div>
                            <div className = 'keyboard__item letter'>д</div>
                            <div className = 'keyboard__item letter'>ж</div>
                            <div className = 'keyboard__item letter'>э</div>
                        </div>
                        <div className = 'keyboard__row  keyboard__row--ru-small'>
                            <div className = 'keyboard__item'>Shift</div>
                            <div className = 'keyboard__item letter'>я</div>
                            <div className = 'keyboard__item letter'>ч</div>
                            <div className = 'keyboard__item letter'>с</div>
                            <div className = 'keyboard__item letter'>м</div>
                            <div className = 'keyboard__item letter'>и</div>
                            <div className = 'keyboard__item letter'>т</div>
                            <div className = 'keyboard__item letter'>ь</div>
                            <div className = 'keyboard__item letter'>б</div>
                            <div className = 'keyboard__item letter'>ю</div>
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
