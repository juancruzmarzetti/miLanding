import React from 'react';
import ItemCount from '../ItemCount';
import Card from 'react-bootstrap/Card';
import customCss from "./Item.module.css";

export default function Item({id, nombre, precio, img, stock}) {
  return (
    <>
      <div className={customCss.itemG}>
        <Card key={id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
              <Card.Title>{nombre}</Card.Title>
              <Card.Text>
              $ {precio}
              </Card.Text>
          </Card.Body>
          <ItemCount className={customCss.boton} stock={stock}/>
        </Card>
      </div>
    </>
  )
}

