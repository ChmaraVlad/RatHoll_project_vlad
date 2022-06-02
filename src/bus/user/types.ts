// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type User = {
    _id: string | null,
    username: string | null
}

export type Users = Array<User>

export type UserState = {
    user: User | null,
    allUsers: Users | null
}

// Contracts
export type BaseContact<T = any> = CaseReducer<UserState, PayloadAction<T>>
