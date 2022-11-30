import React from 'react';
import Item from '../Item/Item';
import { Ring } from '@uiball/loaders';

const ItemList = (props) => {
    let emptyArray = props.products.lenght === 0;
    return (
        <>
            {emptyArray
            ? 
                <Ring size={40} lineWeight={5} speed={2} color="black"/>
            : 
                props.products.map((product) => (
                    <Item 
                        key={product.id}
                        text={product.title}
                        stock={product.stock}
                        img={product.image}
                        price={product.price}    
                        id={product.id}
                    />
                ))
            }
        </>
    );
}
 
export default ItemList;