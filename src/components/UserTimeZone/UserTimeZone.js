import React, { useEffect, useState } from "react";
import axios from "axios";
import { Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { selectTimeZone, 
            updateUserDefaultHours, 
            updateUserMin, 
            updateTargetHours, 
            updateTargetMin } from "../../redux/timeZoneSlice";


// To get timestamp for timezone
// http://api.timezonedb.com/v2.1/get-time-zone?key=P3WJAE44FQKP&format=json&by=zone&zone=America/Chicago

// To convert timestamp to time... requires adjustment. Add 5 to hours
// https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript

export default function UserTimeZone () {
    const dispatch = useDispatch();
    const [userZone, setUserZone] = useState("");
    const userHours = useSelector(state => state.timezones.userHours);
    const userMin = useSelector(state => state.timezones.userMin);

    const [hours, setHours] = useState("");
    const [seconds, setSeconds] = useState("");
    let formattedHours = "";
    function getTimeInfo (zone) {
        axios.get(`http://api.timezonedb.com/v2.1/get-time-zone?key=${process.env.REACT_APP_TIMEZONE_DB_API_KEY}&format=json&by=zone&zone=${zone}`)
        .then(response => {
            // Time in 24 HR format
            let defaultTime = response.data.formatted.substring(11);
            formattedHours = defaultTime.substring(0, 2)[0];
            dispatch(updateUserDefaultHours(defaultTime.substring(0, 2)));
            if (response.data.formatted.substring(11)[0] == "0") {
                setHours(defaultTime.substring(0, 2)[1]);
            } else {
                setHours(defaultTime.substring(0, 2));
            }
            dispatch(updateUserMin(defaultTime.substring(3, 5)));
            setSeconds(defaultTime.substring(6,8));
        }).catch(err => {
            console.error(err.message);
        })
    }

    return (
            <div className="timezone__dropdowns__user">
                        <Dropdown onChange={() => alert("hi")}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className="mb-5">
                                Your Timezone
                            </Dropdown.Toggle>

                            <Dropdown.Menu>        
                                <Dropdown.Item
                                    value="America/Los_Angeles"
                                    onClick={(e) => {
                                        dispatch(selectTimeZone(e.target.attributes.value.nodeValue));
                                        getTimeInfo(e.target.attributes.value.nodeValue);
                                        setUserZone(e.target.innerText);
                                    }}
                                    >Los Angeles (Pacific) (UTC-8)</Dropdown.Item>
                                <Dropdown.Item 
                                value="America/Edmonton"
                                onClick={(e) => {
                                        dispatch(selectTimeZone(e.target.attributes.value.nodeValue));
                                        getTimeInfo(e.target.attributes.value.nodeValue);
                                        setUserZone(e.target.innerText);
                                    }}>
                                    Edmonton (Mountain) (UTC-7)</Dropdown.Item>
                                <Dropdown.Item 
                                value="America/Chicago"
                                onClick={(e) => {
                                        dispatch(selectTimeZone(e.target.attributes.value.nodeValue));
                                        getTimeInfo(e.target.attributes.value.nodeValue);
                                        setUserZone(e.target.innerText);
                                    }}>
                                    Chicago (Central) (UTC-6)</Dropdown.Item>

                                <Dropdown.Item 
                                value="America/New_York"
                                onClick={(e) => {
                                        dispatch(selectTimeZone(e.target.attributes.value.nodeValue));
                                        getTimeInfo(e.target.attributes.value.nodeValue);
                                        setUserZone(e.target.innerText);
                                    }}>
                                    New York (Eastern) (UTC-5)</Dropdown.Item>
                                <Dropdown.Item 
                                value="America/Sao_Paulo"
                                onClick={(e) => {
                                        dispatch(selectTimeZone(e.target.attributes.value.nodeValue));
                                        getTimeInfo(e.target.attributes.value.nodeValue);
                                        setUserZone(e.target.innerText);
                                    }}>
                                    Sao Paulo, Brazil (UTC-4)</Dropdown.Item>
                                <Dropdown.Item 
                                value="America/Nuuk"
                                onClick={(e) => {
                                        dispatch(selectTimeZone(e.target.attributes.value.nodeValue));
                                        getTimeInfo(e.target.attributes.value.nodeValue);
                                        setUserZone(e.target.innerText);
                                    }}>
                                    Nuuk, Greenland (UTC-3)</Dropdown.Item>

                                <Dropdown.Item 
                                value="Atlantic/St_Helena"
                                onClick={(e) => {
                                        dispatch(selectTimeZone(e.target.attributes.value.nodeValue));
                                        getTimeInfo(e.target.attributes.value.nodeValue);
                                        setUserZone(e.target.innerText);
                                    }}>
                                    St. Helena, Iceland (UTC-2)</Dropdown.Item>
                                <Dropdown.Item 
                                value="Europe/London"
                                onClick={(e) => {
                                        dispatch(selectTimeZone(e.target.attributes.value.nodeValue));
                                        getTimeInfo(e.target.attributes.value.nodeValue);
                                        setUserZone(e.target.innerText);
                                    }}>
                                    London (UTC-1)</Dropdown.Item>
                                <Dropdown.Item 
                                value="Europe/Oslo"
                                onClick={(e) => {
                                        dispatch(selectTimeZone(e.target.attributes.value.nodeValue));
                                        getTimeInfo(e.target.attributes.value.nodeValue);
                                        setUserZone(e.target.innerText);
                                    }}>
                                    Oslo, Norway (UTC 0)</Dropdown.Item>

                                <Dropdown.Item 
                                value="Europe/Dublin"
                                onClick={(e) => {
                                        dispatch(selectTimeZone(e.target.attributes.value.nodeValue));
                                        getTimeInfo(e.target.attributes.value.nodeValue);
                                        setUserZone(e.target.innerText);
                                    }}>
                                    Dublin, Ireland (UTC+1)</Dropdown.Item>
                                
                                <Dropdown.Item 
                                value="Africa/Cairo"
                                onClick={(e) => {
                                        dispatch(selectTimeZone(e.target.attributes.value.nodeValue));
                                        getTimeInfo(e.target.attributes.value.nodeValue);
                                        setUserZone(e.target.innerText);
                                    }}>
                                    Cairo, Egypt (UTC+2)</Dropdown.Item>
                                <Dropdown.Item 
                                value="Europe/Moscow"
                                onClick={(e) => {
                                        dispatch(selectTimeZone(e.target.attributes.value.nodeValue));
                                        getTimeInfo(e.target.attributes.value.nodeValue);
                                        setUserZone(e.target.innerText);
                                    }}>
                                    Moscow, Russia (UTC+3)</Dropdown.Item>
                                <Dropdown.Item 
                                value="Asia/Muscat"
                                onClick={(e) => {
                                        dispatch(selectTimeZone(e.target.attributes.value.nodeValue));
                                        getTimeInfo(e.target.attributes.value.nodeValue);
                                        setUserZone(e.target.innerText);
                                    }}>
                                    Muscat, Saudi Arabia (UTC+4)</Dropdown.Item>
                                
                                <Dropdown.Item 
                                value="Asia/Karachi"
                                onClick={(e) => {
                                        dispatch(selectTimeZone(e.target.attributes.value.nodeValue));
                                        getTimeInfo(e.target.attributes.value.nodeValue);
                                        setUserZone(e.target.innerText);
                                    }}>
                                    Karachi, Pakistan (UTC+5)</Dropdown.Item>
                                <Dropdown.Item 
                                value="Asia/Dhaka"
                                onClick={(e) => {
                                        dispatch(selectTimeZone(e.target.attributes.value.nodeValue));
                                        getTimeInfo(e.target.attributes.value.nodeValue);
                                        setUserZone(e.target.innerText);
                                    }}>
                                    Dhaka, Bangladesh (UTC+6)</Dropdown.Item>
                                <Dropdown.Item 
                                value="Asia/Bangkok"
                                onClick={(e) => {
                                        dispatch(selectTimeZone(e.target.attributes.value.nodeValue));
                                        getTimeInfo(e.target.attributes.value.nodeValue);
                                        setUserZone(e.target.innerText);
                                    }}>
                                    Bangkok, Thailand (UTC+7)</Dropdown.Item>

                                <Dropdown.Item 
                                value="Asia/Manila"
                                onClick={(e) => {
                                        dispatch(selectTimeZone(e.target.attributes.value.nodeValue));
                                        getTimeInfo(e.target.attributes.value.nodeValue);
                                        setUserZone(e.target.innerText);
                                    }}>
                                    Manila, Philippines (UTC+8)</Dropdown.Item>
                                <Dropdown.Item 
                                value="Asia/Tokyo"
                                onClick={(e) => {
                                        dispatch(selectTimeZone(e.target.attributes.value.nodeValue));
                                        getTimeInfo(e.target.attributes.value.nodeValue);
                                        setUserZone(e.target.innerText);
                                    }}>
                                    Tokyo, Japan (UTC+9)</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <p>Your Zone: {!userZone ? <strong>Select your timezone in the dropdown above</strong> : userZone}</p>
                        <p>Your Time: {hours && <span>{hours && hours > 12 ? hours - 12 : hours}:{userMin}:{seconds}</span>}<span>{hours && (hours >= 11 ? "PM" : "AM")}</span></p>
                </div>
    )
}