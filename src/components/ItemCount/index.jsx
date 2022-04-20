import React, { useState } from "react";
import customCss from "./itemCount.module.css";

export default function ItemCount({stock, onAdd, count}){

    const [counter, setCounter] = useState(count);

    function incrementar(){
        if (counter < stock){setCounter(counter + 1);}
    };

    function decrementar(){
        if(counter > 0){setCounter(counter - 1)}
    };

    return(
        <>  
            <div className={customCss.botonesGeneral}>
                <button onClick={incrementar} className={customCss.botonIncrementar}>+</button>
                <div className={customCss.contador}>{counter}</div>
                <button onClick={decrementar} className={customCss.botonDecrementar}>-</button>
                <br/>
                <button disabled={counter < 1 ? true : false} onClick={() => onAdd(counter)} className={customCss.botonComprar}>Comprar</button>
            </div>
        </>
    );

}