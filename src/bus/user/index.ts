
// Tools
import { useSelector } from '../../tools/hooks';

export const useUser = () => {
    const user = useSelector((state) => state.user.user); // Add user to ./src/init/redux/index.ts
    const allUsers = useSelector((state) => state.user.allUsers); // Add user to ./src/init/redux/index.ts

    return {
        user,
        allUsers,
    };
};

