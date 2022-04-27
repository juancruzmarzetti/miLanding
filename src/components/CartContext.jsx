import React, {createContext, useState} from "react";

export const CartContext = createContext();

export default function CartContextProvider({children}){
     //Contexto para CartDetail: desafío Jueves 21
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const indexItem = cart.findIndex((cartItem) => cartItem.id === item.id);
        if(indexItem !== -1){
            const cartCopy = [...cart];
            cartCopy[indexItem].counter = cartCopy[indexItem].counter + item.counter;
        }else{
        setCart([...cart, item]);
        console.log(cart)}
    };

    const removeFromCart = (id) => {setCart(cart.filter((item) => item.id !== id));
    console.log(cart)};

    const buyAll = () => setCart([]);

    const cant = () => {
        return cart.reduce((total, item) => total + item.counter*item.precio, 0)
    }
    
    const cantItems = () => {
        return cart.reduce((total, item) => total + item.counter, 0)
    }

    
    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart, buyAll, cant, cantItems}}>
            {children}
        </CartContext.Provider>
    )
}