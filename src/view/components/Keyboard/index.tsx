// Core
import React, { FC, useEffect } from 'react';

// Bus
import { useKeyboard } from '../../../bus/keyboard';
import { useKeyboardHook } from '../../../tools/hooks/useKeyboard';

// Styles
import * as S from './styles';

export const Keyboard: FC = () => {
    const { useLayout, isShowKeyPad, isCapitalize, setTogglerAction, changeText } = useKeyboardHook();
    const { activeKeys } = useKeyboard();

    const handlerBtn = () => {
        setTogglerAction({ type: 'isShowKeyPad', value: !isShowKeyPad });
    };

    useEffect(() => {
        activeKeys.includes('Shift') ? setTogglerAction({ type: 'isCapitalize', value: !isCapitalize }) : null;
    }, [ activeKeys ]);

    return (
        <S.Container>
            {
                isShowKeyPad ? (
                    <S.ShowLayoutButton
                        onClick = { handlerBtn }  >
                        Hide Keyboard
                    </S.ShowLayoutButton>
                ) : (
                    <S.ShowLayoutButton
                        onClick = { handlerBtn }  >
                        Show Keyboard
                    </S.ShowLayoutButton>
                )
            }
            <S.Wrapper>
                {
                    useLayout?.map(({ keys, styles }, indexRow)=>{
                        return (
                            <S.Row
                                key = { indexRow }
                                keyAmount = { keys.length }
                                styles = { styles }>
                                {
                                    keys.map(({ key }, indexBtn)=>{
                                        const checkKey = key === 'Space' ? activeKeys.includes(' ') : activeKeys.includes(key);

                                        return (
                                            <S.Button
                                                bgcolor = { `${checkKey ? '#a7a3a3' : '#fff'}` }
                                                key = { indexBtn }
                                                onClick = {
                                                    ()=> changeText(key)
                                                }>
                                                {
                                                    key
                                                }
                                            </S.Button>
                                        );
                                    })
                                }
                            </S.Row>
                        );
                    })
                }
            </S.Wrapper>
        </S.Container>
    );
};
