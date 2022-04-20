import React, { useEffect, useState } from "react";
import customFetch from "../utils/promises";
import products from "../utils/products";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export default function ItemListContainer(){
    let stock = 5;
    let count = 0;
    function onAdd(x){
        if(x > 0){alert("¡Has agregado " + x + " item/s a tu carrito!")}
    };

    const [products2, setProducts2] = useState([]);

    const {categoryId} = useParams();

    console.log(categoryId);

    useEffect(() => {
        customFetch(3000, products, categoryId)
        .then(res => setProducts2(res))
        .catch(error => console.log(error));
    }, [products2, categoryId]);

    return(
        <> 
            <ItemList products={products2} stock={stock} count={count} onAdd={onAdd}/>
        </>
    );
}