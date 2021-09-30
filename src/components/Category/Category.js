import React from 'react';
import stls from './Category.module.css';

import { NavLink } from 'react-router-dom';


const Category = (props) => {
    return (
    <div className={stls.category}>
        <div>
            <div>
                <div><NavLink to='/volume'>coffee classic</NavLink></div>
            </div>
            <div>
                <div><NavLink to='/volume'>not coffee</NavLink></div>
            </div>
            <div>
                <div><NavLink to='/volume'>season</NavLink></div>
            </div>
        </div>
    </div>
    )
}

export default Category;