// Core
import React, { FC, useEffect } from 'react';

// Bus
import { useTogglersRedux } from '../../../bus/client/togglers';


// Components
import { KeyPadEngl } from '../KeyPadEnglish';
import { KeyPadRuss } from '../KeyPadRuss';


// Styles
import * as S from './styles';

// Types
type PropTypes = {
    setMsg: React.Dispatch<React.SetStateAction<string>>,
    handleSubmit: (event: React.MouseEvent | React.FormEvent<HTMLFormElement>) => void;
    msg: string;
    msgInputRef: React.RefObject<HTMLInputElement>
}

export const Keyboard: FC<PropTypes> = ({ msg, setMsg, handleSubmit, msgInputRef }) => {
    const keyListener = (event: KeyboardEvent) => {
        const btns = document.getElementsByClassName('keyboard__item');
        for (let i = 0; i < btns.length; i++) {
            const item = btns[ i ];
            if (item.innerHTML === event.key) {
                item.classList.add('active');
                setTimeout(()=>{
                    item.classList.remove('active');
                }, 300);
            } else if (item.innerHTML === event.code) {
                item.classList.add('active');
                setTimeout(()=>{
                    item.classList.remove('active');
                }, 300);
            }
        }
    };

    useEffect(()=>{
        msgInputRef.current?.addEventListener('keydown', keyListener);
    }, []);

    const { togglersRedux:{ isEnglKeyPad, isShowKeyPad }, setTogglerAction } = useTogglersRedux();

    const handlerBtn = () => {
        setTogglerAction({ type: 'isShowKeyPad', value: !isShowKeyPad });
    };
    const keyBoard = isEnglKeyPad ? (
        <KeyPadEngl
            handleSubmit = { handleSubmit }
            msg = { msg }
            setMsg = { setMsg }
        />
    ) : (
        <KeyPadRuss
            handleSubmit = { handleSubmit }
            msg = { msg }
            setMsg = { setMsg }
        />
    );

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
        <S.Container id = 'keyboard'>
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
