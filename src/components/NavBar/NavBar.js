import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import './navbar.css';

const NavBar = () => {
    return (
        <section className='containerNavBar'>
            <Logo />
            <Menu />
            <CartWidget />
        </section>
    );
}
 
export default NavBar;