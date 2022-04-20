import React, {createContext, useState} from "react";

export const CartContext = createContext();

export default function CartContextProvider({children}){
     /*Contexto para CartDetail: desafío Jueves 21
    const [cart, setCart] = useState([]);

    const addToCart = (item) => console.log(item);

    const removeFromCart = (item) => console.log("- " + item);

    const buyAll = () => setCart([]);*/

    return(
        <CartContext.Provider value={{/*cart, addToCart, removeFromCart, buyAll*/}}>
            {children}
        </CartContext.Provider>
    )
}