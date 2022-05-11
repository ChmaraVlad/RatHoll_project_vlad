// Tools
import { useSelector } from '../../../tools/hooks';

export const useError = () => {
    const error = useSelector((state) => state.error); // Add error to ./src/init/redux/index.ts

    return {
        error,
    };
};
