// Core
import React, { FC } from 'react';
import { useUser } from '../../../bus/user';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const Header: FC<PropTypes> = () => {
    const { user, deleteUser } = useUser();

    return (
        <S.Header>
            Welcome on board, {user?.username}
            <div onClick = { deleteUser }>
                Logout
            </div>
        </S.Header>
    );
};
