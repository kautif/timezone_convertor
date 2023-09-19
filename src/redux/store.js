import { configureStore } from "@reduxjs/toolkit";
import timeZoneReducer from "./timeZoneSlice";

export const store = configureStore({
    reducer: {
        timezones: timeZoneReducer
    }
})