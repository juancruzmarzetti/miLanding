import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail';
import  products  from '../utils/products';
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {

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
        <ItemDetail producto={product2}/>
    </>
  )
};
