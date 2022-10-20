import React from 'react';
import './CartWidget.css';

import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";

const CartWidget = () => {
    return (
        <div className='containerCart'>
            <div className='heart'>
                <IoIosHeartEmpty />
            </div>
            <div className='cart'>
                <IoCartOutline />
            </div>
        </div>
    );
}
 
export default CartWidget;