import React, { useEffect, useState } from "react";
import customFetch from "../utils/promises";
import products from "../utils/products";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer(){

    const [products2, setProducts2] = useState([]);
    
    useEffect(() => {
        customFetch(3000, products)
        .then(res => setProducts2(res))
        .catch(error => console.log(error))
    }, [products2]);

    return(
        <> 
            <ItemList products={products2} />
        </>
    );
}