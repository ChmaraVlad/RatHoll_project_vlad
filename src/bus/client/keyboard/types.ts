// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Keyboard = Array<string>
export type KeyboardState ={
    activeKeys: Keyboard
}

// Contracts
export type BaseContact<T = any> = CaseReducer<KeyboardState, PayloadAction<T>>
