import React from 'react';
import './itemDetail.css';
import ClickCounter from '../ClickCounter/ClickCounter';

const ItemDetail = ({item}) => {
    return (
        <div className='Item'>
            <img src={item.image} alt='Img'></img>
            <h3>{item.text}</h3>
            <p>Detail del producto</p>
            <p>${item.price}</p>

            <ClickCounter stock={item.stock} />
        </div>
    );
}
 
export default ItemDetail;