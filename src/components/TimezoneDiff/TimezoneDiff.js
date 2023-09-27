import React from "react";
import { useSelector } from "react-redux";

export default function TimezoneDiff () {
    const userDefaultHours = useSelector(state => state.timezones.userDefaultHours);
    const targetDefaultHours = useSelector(state => state.timezones.targetDefaultHours);
    return (
        <div className="timezone__diff text-center">
            <p>{Math.abs(userDefaultHours - targetDefaultHours)} hour(s) {userDefaultHours - targetDefaultHours > 0 ? "ahead" : "behind"}</p>
        </div>
    )
}