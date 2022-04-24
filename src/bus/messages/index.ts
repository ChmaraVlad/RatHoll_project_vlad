// Tools
import { useSelector } from '../../tools/hooks';

export const useMessages = () => {
    const messages = useSelector((state) => state.messages); // Add messages to ./src/init/redux/index.ts

    return {
        messages,
    };
};
