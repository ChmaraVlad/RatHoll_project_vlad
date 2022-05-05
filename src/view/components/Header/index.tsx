// Core
import React, { FC } from 'react';

// Bus
import { useUser } from '../../../bus/user';

// Styles
import * as S from './styles';


export const Header: FC = () => {
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
