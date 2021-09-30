import React from 'react';
import stls from './Volume.module.css';

import { NavLink } from 'react-router-dom';


const Volume = (props) => {
    return (
        <div className={stls.volume}>
            <div><NavLink to='/volume/250ml'>250ml</NavLink></div>
            <div><NavLink to='/volume/350ml'>350ml</NavLink></div>
            <div><NavLink to='/volume/450ml'>450ml</NavLink></div>
        </div>
    )
}

export default Volume;