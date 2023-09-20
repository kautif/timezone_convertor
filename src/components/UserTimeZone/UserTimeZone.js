import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from "react-redux";
import { selectTimeZone } from "../../redux/timeZoneSlice";

export default function UserTimeZone () {
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
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="mb-5">
                            Your Timezone
                        </Dropdown.Toggle>

                        <Dropdown.Menu>        
                            <Dropdown.Item href="#/action-1"
                                 value="America/Los_Angeles"
                                 onClick={(e) => dispatch(selectTimeZone(e.target.attributes.value.nodeValue))}
                                 >Los Angeles (Pacific) (UTC-8)</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" value="America/Edmonton">Edmonton (Mountain) (UTC-7)</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" value="America/Chicago">Chicago (Central) (UTC-6)</Dropdown.Item>

                            <Dropdown.Item href="#/action-1" value="America/New_York">New York (Eastern) (UTC-5)</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" value="America/Sao_Paulo">Sao Paulo, Brazil (UTC-4)</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" value="America/Nuuk">Nuuk, Greenland (UTC-3)</Dropdown.Item>

                            <Dropdown.Item href="#/action-1" value="Atlantic/St_Helena">St. Helena, Iceland (UTC-2)</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" value="Europe/London">London (UTC-1)</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" value="Europe/Oslo">Oslo, Norway (UTC 0)</Dropdown.Item>

                            <Dropdown.Item href="#/action-1" value="Europe/Dublin">Dublin, Ireland (UTC+1)</Dropdown.Item>
                            
                            <Dropdown.Item href="#/action-1" value="Africa/Cairo">Cairo, Egypt (UTC+2)</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" value="Europe/Moscow">Moscow, Russia (UTC+3)</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" value="Asia/Muscat">Muscat, Saudi Arabia (UTC+4)</Dropdown.Item>
                            
                            <Dropdown.Item href="#/action-1" value="Asia/Karachi">Karachi, Pakistan (UTC+5)</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" value="Asia/Dhaka">Dhaka, Bangladesh (UTC+6)</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" value="Asia/Bangkok">Bangkok, Thailand (UTC+7)</Dropdown.Item>

                            <Dropdown.Item href="#/action-2" value="Asia/Manila">Manila, Philippines (UTC+8)</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" value="Asia/Tokyo">Tokyo, Japan (UTC+9)</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic2">
                            Target Timezone
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Los Angeles (Pacific) (UTC-8)</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Edmonton (Mountain) (UTC-7)</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Chicago (Central) (UTC-6)</Dropdown.Item>

                            <Dropdown.Item href="#/action-1">New York (Eastern) (UTC-5)</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Sao Paulo, Brazil (UTC-4)</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Nuuk, Greenland (UTC-3)</Dropdown.Item>

                            <Dropdown.Item href="#/action-1">St. Helena, Iceland (UTC-2)</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">London (UTC-1)</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Oslo, Norway (UTC 0)</Dropdown.Item>
                            
                            <Dropdown.Item href="#/action-1" value="Europe/Dublin">Dublin, Ireland (UTC+1)</Dropdown.Item>

                            <Dropdown.Item href="#/action-1">Cairo, Egypt (UTC+2)</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Moscow, Russia (UTC+3)</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Muscat, Saudi Arabia (UTC+4)</Dropdown.Item>
                            
                            <Dropdown.Item href="#/action-1">Karachi, Pakistan (UTC+5)</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Dhaka, Bangladesh (UTC+6)</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Bangkok, Thailand (UTC+7)</Dropdown.Item>

                            <Dropdown.Item href="#/action-2">Manila, Philippines (UTC+8)</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Tokyo, Japan (UTC+9)</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Form>
        </div>
    )
}