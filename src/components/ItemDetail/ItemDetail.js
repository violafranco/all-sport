import React, { useState } from 'react';
import './itemDetail.css';
import ClickCounter from '../ClickCounter/ClickCounter';
import Swal from 'sweetalert2';
import { useNavigate, Link } from 'react-router-dom';

//uso context, necesito el hook y cartContext
import cartContext from '../../storage/CartContext';
import { useContext } from 'react';

const ItemDetail = ({item}) => {
    const [isInCart, setIsInCart] = useState(false);

    // uso del context
    const {addToCart } = useContext(cartContext);

    const navigate = useNavigate();

    function onAddToCart(count) {
        Swal.fire({
            title: 'Item agregado al carrito',
            text: 'Deseas ir al carrito?',
            icon: 'success',
            confirmButtonText: 'Ir al carrito'
        }).then((result) => {
            if(result.isConfirmed){
                navigate('/cart')
            }
        })
        const itemForCart = {
            //hago una copia del item con todo sus datos y le sumo la cantidad así que queda
            //todo en un solo objeto
            ...item, count
        } 
        addToCart(itemForCart);
        setIsInCart(true);
    }

    return (
        <div className='Item'>
            <img src={item.image} alt='Img'></img>
            <h3>{item.text}</h3>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <br></br>
            <p>${item.price}</p>
            
            {isInCart ? (
                <Link to='/cart' className="button_carrito">
                    <button>Ir al carrito</button>
                </Link>
            ) : (
                <ClickCounter stock={item.stock} onAddToCart={onAddToCart} />
            )}

        </div>
    );
}
 
export default ItemDetail;