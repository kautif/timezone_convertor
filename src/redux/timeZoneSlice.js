import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    timezones: [
        "America/Los_Angeles",
        "America/Edmonton",
        "America/Chicago",
        "America/New_York",
        "America/Sao_Paulo",
        "America/Nuuk",
        "Atlantic/St_Helena",
        "Europe/London",
        "Europe/Oslo",
        "Europe/Dublin",
        "Africa/Cairo",
        "Europe/Moscow",
        "Asia/Muscat",
        "Asia/Karachi",
        "Asia/Dhaka",
        "Asia/Bangkok",
        "Asia/Manila",
        "Asia/Tokyo"
    ],
    userZone: "",
    targetZone: "",
    timeDiff: 0
}

export const timeZoneSlice = createSlice({
    name: "timezones",
    initialState,
    reducers: {
        selectTimeZone: (state, action) => {
            state.userZone = action.value;
            console.log("selected timezone: ", action.payload);
        }
    }
})

export const { selectTimeZone } = timeZoneSlice.actions;

export default timeZoneSlice.reducer;