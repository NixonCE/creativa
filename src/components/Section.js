import React from 'react';
import './Section.css'

export default function Section ({pre,info}){
    return(
        <div className='section'>
            <h1>{pre}</h1>
            <p>{info}</p>
            <button>Contratar</button>
        </div>
    );
} 
