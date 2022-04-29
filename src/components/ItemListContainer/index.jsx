import React, { useEffect, useState } from "react";
//import customFetch from "../utils/promises";
//import products from "../utils/products";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore";

export default function ItemListContainer(){
    /*let stock = 5;
    let count = 0;
    function onAdd(x){
        if(x > 0){alert("¡Has agregado " + x + " item/s a tu carrito!")}
    };*/
    const [products2, setProducts2] = useState([]);
    const {categoryId} = useParams();
    console.log(categoryId);
    //agregado:


    useEffect(() => {
        const db = getFirestore();
        //const categoryDocRef = doc(db, "categorias/" + categoryId);
        let productosRef; //= collection(db, "products");

        if(!categoryId){productosRef = collection(db, "products")}
        else{productosRef = query(collection(db, "products"), where("category", "==", categoryId))};

        getDocs(productosRef).then((res) => {
            setProducts2(res.docs.map(prod => ({id: prod.id, ...prod.data()})))
        });
        console.log(products2);
        /*customFetch(3000, products, categoryId)
        .then(res => setProducts2(res))
        .catch(error => console.log(error));*/
    }, [/*products2, categoryId*/categoryId]);

    return(
        <> 
            <ItemList products={products2} /*stock={stock} count={count} onAdd={onAdd}*//>
        </>
    );
}