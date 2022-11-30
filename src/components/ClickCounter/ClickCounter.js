import React, {useState} from "react";
import './clickCounter.css';

function ClickCounter({stock, onAddToCart}) {

    const [count, setCount] = useState(1);
    
    function handleClickMore(){
      if(count < stock){      
        setCount(count + 1)
      } else {
        alert('No hay más stock')
      }
    }
  
    function handleClickLess(){
      if(count > 1){
        setCount(count - 1)
      } else {
        alert('El minimo es de 1 producto')
      }    
    }

    return(
      <>
        <div className="container-counter">
          <button onClick={handleClickLess}>-</button>
          <p className="input counter" >{count}</p>
          <button onClick={handleClickMore}>+</button>
        </div>
        <button onClick={() => onAddToCart(count)}>Agregar al carrito</button>
      </>
    )
}

export default ClickCounter;