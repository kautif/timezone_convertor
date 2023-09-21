import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from "react-redux";
import { selectTimeZone, selectTargetZone } from "../../redux/timeZoneSlice";

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
                    <div className="timezone__dropdowns__user">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className="mb-5">
                                Your Timezone
                            </Dropdown.Toggle>

                            <Dropdown.Menu>        
                                <Dropdown.Item
                                    value="America/Los_Angeles"
                                    onClick={(e) => dispatch(selectTimeZone(e.target.attributes.value.nodeValue))}
                                    >Los Angeles (Pacific) (UTC-8)</Dropdown.Item>
                                <Dropdown.Item 
                                value="America/Edmonton"
                                onClick={(e) => dispatch(selectTimeZone(e.target.attributes.value.nodeValue))}>
                                    Edmonton (Mountain) (UTC-7)</Dropdown.Item>
                                <Dropdown.Item 
                                value="America/Chicago"
                                onClick={(e) => dispatch(selectTimeZone(e.target.attributes.value.nodeValue))}>
                                    Chicago (Central) (UTC-6)</Dropdown.Item>

                                <Dropdown.Item 
                                value="America/New_York"
                                onClick={(e) => dispatch(selectTimeZone(e.target.attributes.value.nodeValue))}>
                                    New York (Eastern) (UTC-5)</Dropdown.Item>
                                <Dropdown.Item 
                                value="America/Sao_Paulo"
                                onClick={(e) => dispatch(selectTimeZone(e.target.attributes.value.nodeValue))}>
                                    Sao Paulo, Brazil (UTC-4)</Dropdown.Item>
                                <Dropdown.Item 
                                value="America/Nuuk"
                                onClick={(e) => dispatch(selectTimeZone(e.target.attributes.value.nodeValue))}>
                                    Nuuk, Greenland (UTC-3)</Dropdown.Item>

                                <Dropdown.Item 
                                value="Atlantic/St_Helena"
                                onClick={(e) => dispatch(selectTimeZone(e.target.attributes.value.nodeValue))}>
                                    St. Helena, Iceland (UTC-2)</Dropdown.Item>
                                <Dropdown.Item 
                                value="Europe/London"
                                onClick={(e) => dispatch(selectTimeZone(e.target.attributes.value.nodeValue))}>
                                    London (UTC-1)</Dropdown.Item>
                                <Dropdown.Item 
                                value="Europe/Oslo"
                                onClick={(e) => dispatch(selectTimeZone(e.target.attributes.value.nodeValue))}>
                                    Oslo, Norway (UTC 0)</Dropdown.Item>

                                <Dropdown.Item 
                                value="Europe/Dublin"
                                onClick={(e) => dispatch(selectTimeZone(e.target.attributes.value.nodeValue))}>
                                    Dublin, Ireland (UTC+1)</Dropdown.Item>
                                
                                <Dropdown.Item 
                                value="Africa/Cairo"
                                onClick={(e) => dispatch(selectTimeZone(e.target.attributes.value.nodeValue))}>
                                    Cairo, Egypt (UTC+2)</Dropdown.Item>
                                <Dropdown.Item 
                                value="Europe/Moscow"
                                onClick={(e) => dispatch(selectTimeZone(e.target.attributes.value.nodeValue))}>
                                    Moscow, Russia (UTC+3)</Dropdown.Item>
                                <Dropdown.Item 
                                value="Asia/Muscat"
                                onClick={(e) => dispatch(selectTimeZone(e.target.attributes.value.nodeValue))}>
                                    Muscat, Saudi Arabia (UTC+4)</Dropdown.Item>
                                
                                <Dropdown.Item 
                                value="Asia/Karachi"
                                onClick={(e) => dispatch(selectTimeZone(e.target.attributes.value.nodeValue))}>
                                    Karachi, Pakistan (UTC+5)</Dropdown.Item>
                                <Dropdown.Item 
                                value="Asia/Dhaka"
                                onClick={(e) => dispatch(selectTimeZone(e.target.attributes.value.nodeValue))}>
                                    Dhaka, Bangladesh (UTC+6)</Dropdown.Item>
                                <Dropdown.Item 
                                value="Asia/Bangkok"
                                onClick={(e) => dispatch(selectTimeZone(e.target.attributes.value.nodeValue))}>
                                    Bangkok, Thailand (UTC+7)</Dropdown.Item>

                                <Dropdown.Item 
                                value="Asia/Manila"
                                onClick={(e) => dispatch(selectTimeZone(e.target.attributes.value.nodeValue))}>
                                    Manila, Philippines (UTC+8)</Dropdown.Item>
                                <Dropdown.Item 
                                value="Asia/Tokyo"
                                onClick={(e) => dispatch(selectTimeZone(e.target.attributes.value.nodeValue))}>
                                    Tokyo, Japan (UTC+9)</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <p>Your Time: </p>
                    </div>
                    <div className="timezone__dropdowns__target">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic2" className="mb-5">
                                Target Timezone
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Los Angeles (Pacific) (UTC-8)</Dropdown.Item>
                            <Dropdown.Item
                                        value="America/Los_Angeles"
                                        onClick={(e) => dispatch(selectTargetZone(e.target.attributes.value.nodeValue))}
                                        >Los Angeles (Pacific) (UTC-8)</Dropdown.Item>
                                    <Dropdown.Item 
                                    value="America/Edmonton"
                                    onClick={(e) => dispatch(selectTargetZone(e.target.attributes.value.nodeValue))}>
                                        Edmonton (Mountain) (UTC-7)</Dropdown.Item>
                                    <Dropdown.Item 
                                    value="America/Chicago"
                                    onClick={(e) => dispatch(selectTargetZone(e.target.attributes.value.nodeValue))}>
                                        Chicago (Central) (UTC-6)</Dropdown.Item>

                                    <Dropdown.Item 
                                    value="America/New_York"
                                    onClick={(e) => dispatch(selectTargetZone(e.target.attributes.value.nodeValue))}>
                                        New York (Eastern) (UTC-5)</Dropdown.Item>
                                    <Dropdown.Item 
                                    value="America/Sao_Paulo"
                                    onClick={(e) => dispatch(selectTargetZone(e.target.attributes.value.nodeValue))}>
                                        Sao Paulo, Brazil (UTC-4)</Dropdown.Item>
                                    <Dropdown.Item 
                                    value="America/Nuuk"
                                    onClick={(e) => dispatch(selectTargetZone(e.target.attributes.value.nodeValue))}>
                                        Nuuk, Greenland (UTC-3)</Dropdown.Item>

                                    <Dropdown.Item 
                                    value="Atlantic/St_Helena"
                                    onClick={(e) => dispatch(selectTargetZone(e.target.attributes.value.nodeValue))}>
                                        St. Helena, Iceland (UTC-2)</Dropdown.Item>
                                    <Dropdown.Item 
                                    value="Europe/London"
                                    onClick={(e) => dispatch(selectTargetZone(e.target.attributes.value.nodeValue))}>
                                        London (UTC-1)</Dropdown.Item>
                                    <Dropdown.Item 
                                    value="Europe/Oslo"
                                    onClick={(e) => dispatch(selectTargetZone(e.target.attributes.value.nodeValue))}>
                                        Oslo, Norway (UTC 0)</Dropdown.Item>

                                    <Dropdown.Item 
                                    value="Europe/Dublin"
                                    onClick={(e) => dispatch(selectTargetZone(e.target.attributes.value.nodeValue))}>
                                        Dublin, Ireland (UTC+1)</Dropdown.Item>
                                    
                                    <Dropdown.Item 
                                    value="Africa/Cairo"
                                    onClick={(e) => dispatch(selectTargetZone(e.target.attributes.value.nodeValue))}>
                                        Cairo, Egypt (UTC+2)</Dropdown.Item>
                                    <Dropdown.Item 
                                    value="Europe/Moscow"
                                    onClick={(e) => dispatch(selectTargetZone(e.target.attributes.value.nodeValue))}>
                                        Moscow, Russia (UTC+3)</Dropdown.Item>
                                    <Dropdown.Item 
                                    value="Asia/Muscat"
                                    onClick={(e) => dispatch(selectTargetZone(e.target.attributes.value.nodeValue))}>
                                        Muscat, Saudi Arabia (UTC+4)</Dropdown.Item>
                                    
                                    <Dropdown.Item 
                                    value="Asia/Karachi"
                                    onClick={(e) => dispatch(selectTargetZone(e.target.attributes.value.nodeValue))}>
                                        Karachi, Pakistan (UTC+5)</Dropdown.Item>
                                    <Dropdown.Item 
                                    value="Asia/Dhaka"
                                    onClick={(e) => dispatch(selectTargetZone(e.target.attributes.value.nodeValue))}>
                                        Dhaka, Bangladesh (UTC+6)</Dropdown.Item>
                                    <Dropdown.Item 
                                    value="Asia/Bangkok"
                                    onClick={(e) => dispatch(selectTargetZone(e.target.attributes.value.nodeValue))}>
                                        Bangkok, Thailand (UTC+7)</Dropdown.Item>

                                    <Dropdown.Item 
                                    value="Asia/Manila"
                                    onClick={(e) => dispatch(selectTargetZone(e.target.attributes.value.nodeValue))}>
                                        Manila, Philippines (UTC+8)</Dropdown.Item>
                                    <Dropdown.Item 
                                    value="Asia/Tokyo"
                                    onClick={(e) => dispatch(selectTargetZone(e.target.attributes.value.nodeValue))}>
                                        Tokyo, Japan (UTC+9)</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <p>Target Time Zone: </p>
                    </div>
                </div>
            </Form>
        </div>
    )
}