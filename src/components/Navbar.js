import React from 'react';
import './Navbar.css'

export default function Navbar (props){
    return(
        <div className="container">
            <h4>{props.nombre}</h4>
            <ul>
                <li>Proyects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}