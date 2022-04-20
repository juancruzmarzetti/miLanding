import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail';
import  products  from '../utils/products';
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
    //Desafío martes 19
    let stock = 5;
    let count = 0;
    const [cantidad, setCantidad] = useState(count);
    function onAdd(x){
      if(x > 0){alert("¡Has agregado " + x + " item/s a tu carrito!");
                setCantidad(x);
                console.log(cantidad);}
    };
    useEffect(()=>{
      console.log(cantidad);
    }, [cantidad]);
    
    //Desafío martes 19
    const [product2, setProduct2] = useState({});

    const {id} = useParams();

    useEffect(() => {
        const chosenProduct = products.find( p => p.id === Number(id))
        const getProduct = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(chosenProduct)
          }, 2000)
        });
        getProduct.then((res) => {setProduct2(res)});
        getProduct.catch((error) => {console.log(error)});
    }, [id]);

  return (
    <>
        <ItemDetail producto={product2} stock={stock} count={count} onAdd={onAdd} setCantidad={setCantidad} cantidad={cantidad}/>
    </>
  )
};
