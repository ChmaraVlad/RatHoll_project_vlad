// Core
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import togglers from '../../bus/client/togglers';
import messages from '../../bus/messages/slice';
import user from '../../bus/user/slice';
import inputMessage from '../../bus/client/inputMessage/slice';
import inputUpdateMessage from '../../bus/client/inputUpdateMessage/slice';
import keyboard from '../../bus/client/keyboard/slice';
import error from '../../bus/client/error/slice';
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
        error,
        // __entityName__,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>

sagaMiddleware.run(rootSaga);
