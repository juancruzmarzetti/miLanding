import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail';
import { product } from '../utils/products';

export default function ItemDetailContainer() {

    const [product2, setProduct2] = useState({});

    useEffect(() => {
        const getProduct = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(product)
          }, 2000)
        });
        getProduct.then((res) => {setProduct2(res)});
        getProduct.catch((error) => {console.log(error)});
    }, []);

  return (
    <>
        <ItemDetail producto={product2}/>
    </>
  )
};
