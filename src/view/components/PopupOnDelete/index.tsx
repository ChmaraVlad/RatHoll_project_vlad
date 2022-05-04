// Core
import React, { FC } from 'react';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    setPopUp: React.Dispatch<React.SetStateAction<boolean>>
    id: string
    deleteMessage: (id: string) => {
        payload: string;
        type: string;
    }
}
export const PopupOnDelete: FC<PropTypes> = ({ setPopUp, deleteMessage, id ) => {
    const { togglersRedux:{ isPopupShown }, setTogglerAction } = useTogglersRedux();

    const modalRef = useRef<HTMLElement | null>(null);

    return (

        isPopupShown ? (
            <S.Container >
                <S.Popup>
                    <p>
                        Вы уверены что хотите удалить сообщение
                    </p>
                    <S.Button
                        bgcolor = { 'rgba(166, 166, 166, 1)' }
                        onClick = { () => {
                            setTogglerAction({ type: 'isCanDeleteMessage', value: true });
                            setTogglerAction({ type: 'isPopupShown', value: false });
                        } }>
                        Ok
                    </S.Button>
                    <S.Button
                        bgcolor = { 'rgba(166, 166, 166, 1)' }
                        onClick = { () => setTogglerAction({ type: 'isPopupShown', value: false }) }>
                        Cancel
                    </S.Button>
                </S.Popup>
            </S.Container>
        ) : null


    );
};
