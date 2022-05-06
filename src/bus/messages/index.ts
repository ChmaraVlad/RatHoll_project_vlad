// Tools
import { useEffect, useState } from 'react';
import { useSelector } from '../../tools/hooks';
import { useMessagesSaga } from './saga';

export const useMessages = () => {
    const messages = useSelector((state) => state.messages);
    const isDev = process.env.NODE_ENV === 'development';

    const { fetchMessages } = useMessagesSaga();
    const [ loading, setLoading ] = useState(true);

    const [ popup, setPopup ] = useState(false);
    const [ idDeleteMessage, setDeleteIdMessage ] = useState('');

    useEffect(()=>{
        loading && fetchMessages();
        // const timerId = setInterval(() => loading && fetchMessages(), isDev ? 10000 : 2000);

        // return () => clearInterval(timerId);
    }, [  ]);

    return {
        messages,
        popup,
        isDev,
        loading,
        setLoading,
        setPopup,
        idDeleteMessage,
        handleDelete: (id: string) => {
            setDeleteIdMessage(id);
            setPopup(true);
        },

    };
};
