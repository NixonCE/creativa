import React from 'react';
import './Card.css'

export default function Card (props){
    return(
        <div className='card'>
            <h2>{props.title}</h2>
            <img src={props.img}/>
            <p>{props.des}</p>
        </div>
    );
}