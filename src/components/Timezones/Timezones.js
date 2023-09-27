import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from "react-redux";
import { selectTimeZone, selectTargetZone } from "../../redux/timeZoneSlice";
import UserTimeZone from "../../UserTimeZone/UserTimeZone";
import TargetTimeZone from "../TargetTimeZone/TargetTimeZone";
import TimezoneDiff from "../TimezoneDiff/TimezoneDiff";

export default function Timezones () {
    const dispatch = useDispatch();
    const userZone = useSelector(state => state.userZone);

    function calcTime(city, offset) {
        // create Date object for current location
        var d = new Date();
    
        // convert to msec
        // subtract local time zone offset
        // get UTC time in msec
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    
        // create new Date object for different city
        // using supplied offset
        var nd = new Date(utc + (3600000*offset));
    
        // return time as a string
        return "The local time for city"+ city +" is "+ nd.toLocaleString();
    }
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