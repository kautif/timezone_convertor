import React from "react";
import { Dropdown } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

export default function UserTimeZone () {
    return (
        <div>
            <Form>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Pacific (UTC-8)</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Mountain (UTC-7)</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Central (UTC-6)</Dropdown.Item>

                    <Dropdown.Item href="#/action-1">Eastern (UTC-5)</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Brazil (UTC-4)</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Greenland (UTC-3)</Dropdown.Item>

                    <Dropdown.Item href="#/action-1">Iceland (UTC-2)</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">London (UTC-1)</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Norway (UTC 0)</Dropdown.Item>
                    
                    <Dropdown.Item href="#/action-1">Egypt (UTC+1)</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Zimbabwe (UTC+2)</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Ethiopia (UTC+3)</Dropdown.Item>
                    
                    <Dropdown.Item href="#/action-1">Oman (UTC+4)</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Turkmenistan (UTC+5)</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Bhutan (UTC+6)</Dropdown.Item>

                    <Dropdown.Item href="#/action-1">Thailand (UTC+7)</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Philippines (UTC+8)</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Japan (UTC+9)</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </Form>
        </div>
    )
}