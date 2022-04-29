import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail';
import  products  from '../utils/products';
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default function ItemDetailContainer() {
    //Desafío martes 19
    let stock = 5;
    let count = 0;
    const [cantidad, setCantidad] = useState(count);
    const [product2, setProduct2] = useState({});
    
    const {id} = useParams();

    useEffect(()=>{
      const db = getFirestore();
      const prodRef = doc(db, "products", id);
      getDoc(prodRef).then((res) => {
        setProduct2({id: res.id, ...res.data()})
      });

      console.log(cantidad);
    }, [cantidad, id]);
    
    //Desafío martes 19
    //const [product2, setProduct2] = useState({});

    //const {id} = useParams();

    /*useEffect(() => {
        const chosenProduct = products.find( p => p.id === Number(id))
        const getProduct = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(chosenProduct)
          }, 2000)
        });
        getProduct.then((res) => {setProduct2(res)});
        getProduct.catch((error) => {console.log(error)});
    }, [id]);*/

  return (
    <>
        <ItemDetail producto={product2} stock={stock} count={count} cantidad={cantidad} setCantidad={setCantidad}/>
    </>
  )
};
