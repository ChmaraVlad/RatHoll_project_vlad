// Core
import React, { FC } from 'react';

// Bus
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useInputMessage } from '../../../bus/inputMessage';
import { useKeyboardHook } from '../../../tools/hooks/useKeyboard';

// Styles
import * as S from './styles';

export const Keyboard: FC = () => {
    const { togglersRedux: { isShowKeyPad }, setTogglerAction } = useTogglersRedux();

    const handlerBtn = () => {
        setTogglerAction({ type: 'isShowKeyPad', value: !isShowKeyPad });
    };

    const { useLayout } = useKeyboardHook();

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
                                styles = { styles }>
                                {
                                    keys.map(({ key }, indexBtn)=>{
                                        return (
                                            <S.Button
                                                key = { indexBtn }
                                                onClick = {
                                                    ()=> {}
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
