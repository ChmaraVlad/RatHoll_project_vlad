// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type InputMessage = string
export type InputMessageState = InputMessage

// Contracts
export type BaseContact<T = any> = CaseReducer<InputMessageState, PayloadAction<T>>
