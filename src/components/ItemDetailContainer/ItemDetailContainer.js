import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getSingleItems} from './../../firebase/firebase';
import ItemDetail from './../ItemDetail/ItemDetail';
import { Ring } from '@uiball/loaders';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let params = useParams();
    let id = params.id;

    useEffect(()=>{
        getSingleItems(id).then((response)=>{
            setItem(response);
            setIsLoading(false);
        }).catch( error => alert('error'))
    }, [])

    return (
        <div className='item'>
            {isLoading ? <Ring size={40} lineWeight={5} speed={2} color="black"/> : <ItemDetail item={item}/>}            
        </div>
    );
}
 
export default ItemDetailContainer;