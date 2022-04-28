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

export const KeyPadEngl: FC<PropTypes> = () => {
    const { setTogglerAction } = useTogglersRedux();

    const handleKeyPad = () => {
        setTogglerAction({ type: 'isEnglKeyPad', value: false });
    };

    return (
        <S.Container>
            <div className = 'keyboard'>
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
                        <div className = 'keyboard__row'>
                            <div className = 'keyboard__item letter'>q</div>
                            <div className = 'keyboard__item letter'>w</div>
                            <div className = 'keyboard__item letter'>e</div>
                            <div className = 'keyboard__item letter'>r</div>
                            <div className = 'keyboard__item letter'>t</div>
                            <div className = 'keyboard__item letter'>y</div>
                            <div className = 'keyboard__item letter'>u</div>
                            <div className = 'keyboard__item letter'>i</div>
                            <div className = 'keyboard__item letter'>o</div>
                            <div className = 'keyboard__item letter'>p</div>
                        </div>
                        <div className = 'keyboard__row keyboard__row--smaller'>
                            <div className = 'keyboard__item letter'>a</div>
                            <div className = 'keyboard__item letter'>s</div>
                            <div className = 'keyboard__item letter'>d</div>
                            <div className = 'keyboard__item letter'>f</div>
                            <div className = 'keyboard__item letter'>g</div>
                            <div className = 'keyboard__item letter'>h</div>
                            <div className = 'keyboard__item letter'>j</div>
                            <div className = 'keyboard__item letter'>k</div>
                            <div className = 'keyboard__item letter'>l</div>
                        </div>
                        <div className = 'keyboard__row keyboard__row--smaller'>
                            <div className = 'keyboard__item'>Shift</div>
                            <div className = 'keyboard__item letter'>z</div>
                            <div className = 'keyboard__item letter'>x</div>
                            <div className = 'keyboard__item letter'>c</div>
                            <div className = 'keyboard__item letter'>v</div>
                            <div className = 'keyboard__item letter'>b</div>
                            <div className = 'keyboard__item letter'>n</div>
                            <div className = 'keyboard__item letter'>m</div>
                            <div className = 'keyboard__item'>Backspace</div>
                        </div>
                        <div className = 'keyboard__row keyboard__row--footer'>
                            <div className = 'keyboard__item'>,</div>
                            <div
                                className = 'keyboard__item'
                                onClick = { handleKeyPad }>En
                            </div>
                            <div className = 'keyboard__item'>' '</div>
                            <div className = 'keyboard__item'>.</div>
                            <div className = 'keyboard__item'>Enter</div>
                        </div>
                    </div>
                </div>
            </div>
        </S.Container>
    );
};
