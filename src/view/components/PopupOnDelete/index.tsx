// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    setPopup: React.Dispatch<React.SetStateAction<boolean>>
    id: string
    deleteMessageFetch: (id: string) => void
}

export const PopupOnDelete: FC<PropTypes> = ({ setPopup, deleteMessageFetch, id }) => {
    return (

        <S.Container >
            <S.Popup>
                <h2>
                    Вы уверены что хотите удалить сообщение
                </h2>
                <S.Button
                    bgcolor = { 'rgba(166, 166, 166, 1)' }
                    onClick = { () => {
                        deleteMessageFetch(id);
                        setPopup(false);
                    }
                    }>
                    Ok
                </S.Button>
                <S.Button
                    bgcolor = { 'rgba(166, 166, 166, 1)' }
                    onClick = { () => setPopup(false) }>
                    Cancel
                </S.Button>
            </S.Popup>
        </S.Container>


    );
};
