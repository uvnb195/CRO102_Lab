import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import { productsApi } from "./productsApi";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>