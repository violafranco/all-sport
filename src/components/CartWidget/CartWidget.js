import React from 'react';
import './CartWidget.css';
import { Link } from 'react-router-dom';

//uso context, necesito el hook y cartContext
import cartContext from '../../storage/CartContext';
import { useContext } from 'react';

//iconos
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";

const CartWidget = () => {
    const {itemsInCart} = useContext(cartContext);
    return (
        <div className='containerCart'>
            <div className='heart'>
                <IoIosHeartEmpty />
            </div>
            <div className='cart'>
                <Link to='/cart'>
                    <IoCartOutline />
                </Link>
                {
                    (itemsInCart() > 0)?
                    <small>{itemsInCart()}</small>:
                    <></>
                }
            </div>
        </div>
    );
}
 
export default CartWidget;