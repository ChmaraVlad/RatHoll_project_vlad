// Tools
import { useSelector } from '../../tools/hooks';

export const useMessages = () => {
    const messages = useSelector((state) => state.messages);

    return {
        messages,
    };
};
