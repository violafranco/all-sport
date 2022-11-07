import React from 'react';
import { Link } from 'react-router-dom';
import './logo.css';
import Logotipo from './logo.PNG';

const Logo = () => {
    return (
        <div>
            <Link to='/'>
                <img src={Logotipo} alt='logo'></img>
            </Link>
        </div>
    );
}
 
export default Logo;