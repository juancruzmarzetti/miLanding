import React, {createContext, useEffect, useState} from "react";

export const CartContext = createContext();

export default function CartContextProvider({children}){
     //Contexto para CartDetail: desafío Jueves 21
    const [cart, setCart] = useState([]);
    //const [totalItems, setTotalItems] = useState(0);

    const addToCart = (item) => {
        const indexItem = cart.findIndex((cartItem) => cartItem.id === item.id);
        if(indexItem !== -1){
            const cartCopy = [...cart];
            cartCopy[indexItem].counter = cartCopy[indexItem].counter + item.counter;
            setCart(cartCopy);
        }else{
        setCart([...cart, item]);
        console.log(cart)}
    };

    const removeFromCart = (id) => {setCart(cart.filter((item) => item.id !== id));
    console.log(cart)};

    const buyAll = () => setCart([]);
    /*const cant = () => {
        return cart.reduce((total, item) => total + item.counter*item.precio, 0)
    }
    const cant = () => {
        return cart.reduce((total, item) => total + item.counter*item.precio, 0)
    }
    const cantItems = () => {
        return cart.reduce((total, item) => total + item.counter, 0)
    }*/

    

    const cant = () => {
        return cart.reduce((total, item) => total += (item.counter*item.precio), 0)
    }

    const cantItems = () => {
        return cart.reduce((total, item) => total += item.counter, 0)
    }

    //let valorTotal = 0;
    //let totalItems = 0;
    let valorTotal = cant();
    let totalItems = cantItems();
    useEffect(() => {
        
    }, [])

    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart, buyAll, valorTotal, totalItems /*valorTotal, totalItems, cant, cantItems*/}}>
            {children}
        </CartContext.Provider>
    )
}