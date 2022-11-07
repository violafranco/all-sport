import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getSingleItems} from '../mockService/mockService';
import ItemDetail from './../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);

    let params = useParams();
    let id = params.id;

    useEffect(()=>{
        getSingleItems(id).then((response)=>{
            setItem(response);
        }).catch( error => alert('error'))
    }, [])

    return (
        <div className='item'>
            <ItemDetail item={item}/>
        </div>
    );
}
 
export default ItemDetailContainer;