// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Error = {
    message?:    string,
    statusCode?: number,
    data?:       {message: string},
}
export type ErrorState = Array<Error> | null

// Contracts
export type BaseContact<T = any> = CaseReducer<ErrorState, PayloadAction<T>>
