// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Initial = boolean
export type InitialState = {
    isInit: Initial
}

// Contracts
export type BaseContact<T = any> = CaseReducer<InitialState, PayloadAction<T>>
