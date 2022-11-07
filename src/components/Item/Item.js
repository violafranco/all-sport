import React from 'react';
import { Link } from 'react-router-dom';
import './item.css'

const Item = (props) => {

    let urlDetail = `/item/${props.id}`;
    
    return (
        <div className='Item'>
            <div className='product-image'>
                <img src={props.img} alt='Img'></img>
            </div>
            <h3>{props.text}</h3>
            <p>${props.price}</p>

            <Link to={urlDetail}>
                <button className='button'>Ver más!</button>
            </Link>
        </div>
    );
}
 
export default Item;