'use client'

import {configureStore} from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { cartSlice } from './cart'
import { jobsSlice } from './jobs'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
        trabajo: jobsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})