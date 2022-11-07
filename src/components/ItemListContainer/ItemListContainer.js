import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import getItems from '../mockService/mockService';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getItemsByCategory } from '../mockService/mockService';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const {category} = useParams();

    //controlo el renderizado con el useEffect, al agregar los []
    useEffect(()=>{
        if (category) {
            getItemsByCategory(category).then((response)=>{
                setProducts(response);
            })
        } else {
            getItems().then((response)=>{
                setProducts(response);
            })
        }
    }, [category])

    return (
        <div className='item'>
            <ItemList products={products} />
        </div>
    );
}
 
export default ItemListContainer;