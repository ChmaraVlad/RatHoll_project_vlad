// Core
import React, { FC } from 'react';

// Bus
import { useKeyboard } from '../../../../bus/keyboard';

// Tools
import { useKeyboardHook } from '../../../../tools/hooks';

// Styles
import * as S from './styles';

export const Keyboard: FC = () => {
    const { activeKeys, handlerBtn } = useKeyboard();
    const { useLayout, isShowKeyPad, changeText } = useKeyboardHook();

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
