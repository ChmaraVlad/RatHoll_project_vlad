// Core
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import togglers from '../../bus/client/togglers';
import messages from '../../bus/messages/slice';
import user from '../../bus/user/slice';
import inputMessage from '../../bus/inputMessage/slice';
import inputUpdateMessage from '../../bus/inputUpdateMessage/slice';
import keyboard from '../../bus/keyboard/slice';
// import __entityName__ from '../../bus/__entityName__/slice';

// Middleware
import { middleware, sagaMiddleware } from './middleware';

// Saga
import { rootSaga } from './rootSaga';

export const store = configureStore({
    reducer: {
        togglers,
        messages,
        user,
        inputMessage,
        inputUpdateMessage,
        keyboard,
        // __entityName__,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>

sagaMiddleware.run(rootSaga);
