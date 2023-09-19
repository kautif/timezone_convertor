import React from "react";
import { Dropdown } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import "./UserTimeZone.css"

export default function UserTimeZone () {

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
                <div className="timezone__dropdowns-container flex">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Your Timezone
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
                            
                            <Dropdown.Item href="#/action-1">Cairo, Egypt (UTC+1)</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Muscat, Saudi Arabia (UTC+2)</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Ethiopia (UTC+3)</Dropdown.Item>
                            
                            <Dropdown.Item href="#/action-1">Karachi, Pakistan (UTC+5)</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Dhaka, Bangladesh (UTC+6)</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Bankok, Thailand (UTC+7)</Dropdown.Item>

                            <Dropdown.Item href="#/action-2">Manila, Philippines (UTC+8)</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Tokyo, Japan (UTC+9)</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
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
                            
                            <Dropdown.Item href="#/action-1">Dublin, Ireland (UTC+1)</Dropdown.Item>

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