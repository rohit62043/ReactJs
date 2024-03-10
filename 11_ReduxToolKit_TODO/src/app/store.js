import { configureStore } from '@reduxjs/toolkit'

import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    //we can give list of reducer but here we have only one
    reducer: todoReducer
});