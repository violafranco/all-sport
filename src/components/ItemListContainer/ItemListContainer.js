import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
    return (
        <div className='item'>
            <h3>{greeting}</h3>
        </div>
    );
}
 
export default ItemListContainer;