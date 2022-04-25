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

export const Users: FC<PropTypes> = () => {
    const { allUsers } = useUser();

    return (
        <S.Container>

            {allUsers?.map((item, index)=>{
                return (
                    <S.ListItem key = { index }>
                        <img
                            alt = 'logo'
                            src = 'https://pm1.narvii.com/6783/e3b67784dbfabe6c0a7f15fa46043c2b522acfe5v2_hq.jpg'
                        />
                        {item.username}
                    </S.ListItem>
                );
            })
            }
        </S.Container>
    );
};
