// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// export type KeiItem = {
//     key: string | number
//     code: string
// }

// State
export type Keyboard = Array<string>
export type KeyboardState ={
    keys: Keyboard
    activeKeys: Keyboard
}

// Contracts
export type BaseContact<T = any> = CaseReducer<KeyboardState, PayloadAction<T>>
