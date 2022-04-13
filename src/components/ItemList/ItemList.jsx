import React from 'react';
import Item from '../Item/Item';


export default function ItemList({products, stock}) {
  return (
    products.map(product => 
        <Item
        stock={stock}
        id={product.id}
        nombre={product.nombre}
        precio={product.precio}
        img={product.img}/>
    )
  )
}
