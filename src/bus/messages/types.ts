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
