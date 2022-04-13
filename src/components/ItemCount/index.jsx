import React, { useState } from "react";
import customCss from "./itemCount.module.css";

export default function ItemCount({stock}){

    const [count, setCount] = useState(0);

    const[disable, setDisable] = useState(true);

    function incrementar(){
        if (count < stock){setCount(count + 1);
            setDisable(false)}
    };

    function decrementar(){
        if(count > 0){setCount(count - 1)}
    };
    
    function onAdd(){
        if(count > 0){alert("¡Has agregado " + count + " items a tu carrito!")}
        else{setDisable(true)}
    };

    return(
        <>  
            <div className={customCss.botonesGeneral}>
                <button onClick={incrementar} className={customCss.botonIncrementar}>+</button>
                <div className={customCss.contador}>{count}</div>
                <button onClick={decrementar} className={customCss.botonDecrementar}>-</button>
                <br/>
                <button disabled={disable} onClick={onAdd} className={customCss.botonComprar}>Comprar</button>
            </div>
        </>
    );

}