import { configureStore} from "@reduxjs/toolkit";
import { storeApi } from "./app/services/storeApi";

export const store = configureStore({
    reducer: {
        [storeApi.reducerPath]: storeApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(storeApi.middleware)
})
