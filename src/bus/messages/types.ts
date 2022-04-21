// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type Message = {
    _id:       string,
    username:  string,
    text:      string,
    createdAt: string,
    updatedAt: string,
};

// State
export type Messages = Array<Message>

export type MessagesState = {
    data: Messages | null,
    isFetching: boolean;
}

// Contracts
export type BaseContact<T = any> = CaseReducer<MessagesState, PayloadAction<T>>


// FETCH & FILL
export const FETCH_MESSAGES_ASYNC = 'messages/FETCH_MESSAGES_ASYNC';
export type MessagesFetchingAction = {
    type: typeof FETCH_MESSAGES_ASYNC;
    payload: 1
};

export const MESSAGES_FILL = 'MESSAGES_FILL';
export type MessagesFillAction = {
    type: typeof MESSAGES_FILL;
    payload: Messages;
};

export type OrdersActionTypes =
    // FETCH & FILL
    | MessagesFetchingAction
    | MessagesFillAction
