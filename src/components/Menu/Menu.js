import React from 'react';
//import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <a href='/category/zapatilla'>Zapatillas</a>
                </li>
                <li>
                    <a href='/category/remera'>Remeras</a>
                </li>
                <li>
                    <a href='/category/pelota'>Pelotas</a>
                </li>
            </ul>
        </div>
    );
}
 
export default Menu;