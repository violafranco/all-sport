import { createContext, useState } from "react";

// 1- Inicializamos context con createContext
const cartContext = createContext();

// 2- Definimos el provider
export function CartContextProvider(props){
    const [cart, setCart] = useState([]);

    function addToCart(itemData) {
        //para saber si ya existe el item en el carrito
        let existeItem = cart.find((item) => item.id === itemData.id)

        if (existeItem) {
            let newCart = cart.map((item) => {
                if (item.id === itemData.id) {
                    item.count += itemData.count;
                    return item;
                } else {
                    return item;
                }
            });  
            setCart(newCart);  
        } else {
            // OPCIÓN 2
            const newCart = [...cart];
            newCart.push(itemData);
            setCart(newCart); 
            
            //OPCIÓN 1 - DA ERROR
            /*setCart((newCart) => {
                newCart.push(itemData);
                return newCart;
            })*/

        }
    }

    function itemsInCart() {
        let total = 0;
        cart.forEach(itemsInCart => {
            total += itemsInCart.count
        })
        return total;
    }

    function totalPrice() {
        let totalPrice = 0;
        cart.forEach(itemsInCart => {
            totalPrice += itemsInCart.price * itemsInCart.count
        })
        return totalPrice;
    }

    /*
    function removeItem(itemId) {
        /*cart.filter((item) => {
            let newCart = item.id === itemId;
            setCart(newCart);  
        })*/
        //cart.filter para ver si el id es el mismo del parametro, si es true, se remueve
    //}
    
    const value = { 
        cart,
        addToCart,
        totalPrice,
        itemsInCart
    }

    return(
        <cartContext.Provider value={value}>
            {props.children}
        </cartContext.Provider>
    )
}

export default cartContext;