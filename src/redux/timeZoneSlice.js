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
    userDefaultHours: 0,
    userHours: 0,
    userMin: 0,
    targetDefaultHours: 0,
    targetHours: 0,
    targetMin: 0
}

export const timeZoneSlice = createSlice({
    name: "timezones",
    initialState,
    reducers: {
        selectTimeZone: (state, action) => {
            state.userZone = action.payload;
            console.log("userZone: ", state.userZone);
        },
        selectTargetZone: (state, action) => {
            state.targetZone = action.payload;
            console.log("targetZone: ", state.targetZone);
        },
        updateUserDefaultHours: (state, action) => {
            state.userDefaultHours = action.payload;
        },
        updateUserMin: (state, action) => {
            state.userMin = action.payload;
        },
        updateTargetDefaultHours: (state, action) => {
            state.targetDefaultHours = action.payload;
        },
        updateTargetMin: (state, action) => {
            state.targetMin = action.payload;
        }
    }
})

export const { selectTimeZone, 
                selectTargetZone,
                updateUserDefaultHours,
                updateUserMin,
                updateTargetDefaultHours,
                updateTargetMin } = timeZoneSlice.actions;

export default timeZoneSlice.reducer;