// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type newMessage = {
    newText: string,
    id: string
}

export type Message = {
    _id:       string,
    username:  string,
    text:      string,
    createdAt: string,
    updatedAt: string,
};

export type createMessageType = {
    username:  string,
    text:      string,
};

// State
export type Messages = Array<Message>

export type MessagesState = Array<Message> | null

// Contracts
export type BaseContact<T = any> = CaseReducer<MessagesState, PayloadAction<T>>
