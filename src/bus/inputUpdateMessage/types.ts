// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type InputUpdateMessage = string
export type InputUpdateMessageState = {
    newText: InputUpdateMessage
    idMessage: string
}

// Contracts
export type BaseContact<T = any> = CaseReducer<InputUpdateMessageState, PayloadAction<T>>
