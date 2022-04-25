// Core
import React, { FC } from 'react';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Bus
// import {} from '../../../bus/'

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
                isEnglKeyPad
                    ? <div className = 'keyboard'>
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
                                    <div className = 'keyboard__item'>q</div>
                                    <div className = 'keyboard__item'>w</div>
                                    <div className = 'keyboard__item'>e</div>
                                    <div className = 'keyboard__item'>r</div>
                                    <div className = 'keyboard__item'>t</div>
                                    <div className = 'keyboard__item'>y</div>
                                    <div className = 'keyboard__item'>u</div>
                                    <div className = 'keyboard__item'>i</div>
                                    <div className = 'keyboard__item'>o</div>
                                    <div className = 'keyboard__item'>p</div>
                                </div>
                                <div className = 'keyboard__row keyboard__row--smaller'>
                                    <div className = 'keyboard__item'>a</div>
                                    <div className = 'keyboard__item'>s</div>
                                    <div className = 'keyboard__item'>d</div>
                                    <div className = 'keyboard__item'>f</div>
                                    <div className = 'keyboard__item'>g</div>
                                    <div className = 'keyboard__item'>h</div>
                                    <div className = 'keyboard__item'>j</div>
                                    <div className = 'keyboard__item'>k</div>
                                    <div className = 'keyboard__item'>l</div>
                                </div>
                                <div className = 'keyboard__row keyboard__row--smaller'>
                                    <div className = 'keyboard__item'>Shift</div>
                                    <div className = 'keyboard__item'>z</div>
                                    <div className = 'keyboard__item'>x</div>
                                    <div className = 'keyboard__item'>c</div>
                                    <div className = 'keyboard__item'>v</div>
                                    <div className = 'keyboard__item'>b</div>
                                    <div className = 'keyboard__item'>n</div>
                                    <div className = 'keyboard__item'>m</div>
                                    <div className = 'keyboard__item'>Backspace</div>
                                </div>
                                <div className = 'keyboard__row keyboard__row--footer'>
                                    <div className = 'keyboard__item'>,</div>
                                    <div className = 'keyboard__item'>En</div>
                                    <div className = 'keyboard__item'>Space</div>
                                    <div className = 'keyboard__item'>.</div>
                                    <div className = 'keyboard__item'>Enter</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <div className = 'keyboard keyboard--ru '>
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
                                    <div className = 'keyboard__item'>Ru</div>
                                    <div className = 'keyboard__item'>Space</div>
                                    <div className = 'keyboard__item'>.</div>
                                    <div className = 'keyboard__item'>Enter</div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </S.Container>
    );
};
