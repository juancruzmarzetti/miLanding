import React from 'react';
import Item from '../Item/Item';


export default function ItemList({products, stock, count, onAdd /* <= correción */}) {
  return (
    products.map(product => 
        <Item
        count={count}
        onAdd={onAdd}// <= correción
        stock={stock}
        id={product.id}
        nombre={product.nombre}
        precio={product.precio}
        img={product.img}/>
    )
  )
}
