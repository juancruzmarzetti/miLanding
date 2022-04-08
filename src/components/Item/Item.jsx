import React from 'react';
import ItemCount from '../ItemCount';
import Card from 'react-bootstrap/Card';
import customCss from "./Item.module.css";

export default function Item({key, nombre, precio, img}) {
  return (
    <>
      <div className={customCss.itemG}>
        <Card key={key} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
              <Card.Title>{nombre}</Card.Title>
              <Card.Text>
              $ {precio}
              </Card.Text>
          </Card.Body>
          <ItemCount className={customCss.boton} stock={5}/>
        </Card>
      </div>
    </>
  )
}

