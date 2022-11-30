import React, {useContext} from 'react';
import { createBuyOrderFirestore } from '../../firebase/firebase';
import cartContext from '../../storage/CartContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import BuyForm from './BuyForm';
import './cartView.css'

const CartView = () => {
    const {cart, totalPrice } = useContext(cartContext);
    const navigate = useNavigate();
    /*
        <button onClick={() => removeItem(item.id)}>X</button>
    */
    function createBuyOrder(userData) {
        const buyData = {
            buyer: userData,
            item: cart,
            total: totalPrice(),
            date: new Date()
        };
        createBuyOrderFirestore(buyData).then(respuesta => {
            navigate(`/checkout/${respuesta}`)

            Swal.fire({
                title: 'Compra finalizada',
                text: `Gracias por elegirnos. Tu número de orden es ${respuesta}`,
                icon: 'success',
                confirmButtonText: 'Volver a la página'
            }).then((result) => {
                if(result.isConfirmed){
                    navigate(`/checkout/${respuesta}`)
                }
            })
        })
    }


    return ( 
        <div className='cart-view-container'>
            <h3>Este es el contenido de tu compra</h3>
            {
                cart.map((item) => (
                    <div key={item.id} className='cart-view-card'>
                        <img src={item.image} alt='product'></img>
                        <div className='cart-view-card-content'>
                            <h4>{item.title}</h4>
                            <h4>Cantidad: {item.count}</h4>
                            <h4>Precio: $ {item.price}</h4>
                            <h4>Total a pagar: $ {item.price * item.count}</h4>                       
                        </div>
                    </div>
                ))
            }
            <h2>Precio total de tu compra: $ {totalPrice()}</h2>
            <BuyForm onSubmit={createBuyOrder}/>
        </div>
    );
}
 
export default CartView;