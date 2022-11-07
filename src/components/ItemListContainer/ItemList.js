import React from 'react';
import Item from '../Item/Item';

const ItemList = (props) => {
    return (
        <>
            {props.products.map((product) => (
                <Item 
                    key={product.id}
                    text={product.title}
                    stock={product.stock}
                    img={product.image}
                    price={product.price}    
                    id={product.id}
                />
            ))}
        </>
    );
}
 
export default ItemList;