import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import {getItems, getItemsByCategory} from './../../firebase/firebase';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { Ring } from '@uiball/loaders';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const {category} = useParams();
    const [isLoading, setIsLoading] = useState(true);

    //controlo el renderizado con el useEffect, al agregar los []
    useEffect(()=>{
        if (category) {
            getItemsByCategory(category).then((response)=>{
                setProducts(response);
                setIsLoading(false);
            })
        } else {
            getItems().then((response)=>{
                setProducts(response);
                setIsLoading(false);
            })
        }
    }, [category])

    return (
        <div className='item'>
            {isLoading ? <Ring size={40} lineWeight={5} speed={2} color="black"/> : <ItemList products={products} />}            
        </div>
    );
}
 
export default ItemListContainer;