// Tools
import { useState } from 'react';
import { useSelector } from '../../tools/hooks';

export const useMessages = () => {
    const messages = useSelector((state) => state.messages);

    const [ popup, setPopup ] = useState(false);
    const [ idDeleteMessage, setDeleteIdMessage ] = useState('');

    return {
        messages,
        popup,
        setPopup,
        idDeleteMessage,
        handleDelete: (id: string) => {
            setDeleteIdMessage(id);
            setPopup(true);
        },

    };
};
