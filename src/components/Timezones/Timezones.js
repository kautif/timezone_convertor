import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from "react-redux";
import { selectTimeZone, selectTargetZone } from "../../redux/timeZoneSlice";
import UserTimeZone from "../UserTimeZone/UserTimeZone";
import TargetTimeZone from "../TargetTimeZone/TargetTimeZone";
import TimezoneDiff from "../TimezoneDiff/TimezoneDiff";

export default function Timezones () {
    const dispatch = useDispatch();
    const userZone = useSelector(state => state.userZone);
    return (
        <div>
            <Form>
                <div className="timezone__dropdowns-container text-center flex justify-around">
                    <UserTimeZone />
                    <TargetTimeZone />
                </div>
            </Form>
            <TimezoneDiff />
        </div>
    )
}