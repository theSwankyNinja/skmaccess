/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { CSSContext } from '../provider/cssContext';

export default function Topbar (){
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let hiContrastOn = useContext(CSSContext)

    return (
        <div id="topBar">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <ul id="menubar">
                <ul>
                    <li><button type="button">Bypass Links</button></li>
                    <div id="nav_menu">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Methodology</a></li>
                        <li><a>Next Steps</a></li>
                    </div>
                </ul>
                <ul>
                    <li><button role="switch" type="button" aria-controls="show_accessibility_options" >Accessibility Options</button></li>
                    <div id="access_options">
                        <ul>
                            <button role="switch" type="button">Toggle Hi-Contrast</button>
                            <span>sfhbng</span>
                        </ul>
                        <ul>
                            <button role="switch" type="button">Toggle Big Buttons</button>
                            <span>rbae</span>
                        </ul>
                    </div>
                </ul>
            </ul>
        </div>
    );
};
