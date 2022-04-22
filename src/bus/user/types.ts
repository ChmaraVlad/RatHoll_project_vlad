// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type Username = string

// State
export type User = {
    _id: string,
    username: string
}
export type Users = Array<User>

export type UserState = {
    user: User | null,
    allUsers: Users | null
}

// Contracts
export type BaseContact<T = any> = CaseReducer<UserState, PayloadAction<T>>
