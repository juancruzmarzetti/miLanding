import React from 'react';
import ItemCount from '../ItemCount';
import Card from 'react-bootstrap/Card';
import customCss from "./Item.module.css";
import Button from 'react-bootstrap/Button'; 
import { Link } from 'react-router-dom';

export default function Item({id, nombre, precio, img, stock, count, /* correción => */ onAdd}) {
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
          <ItemCount className={customCss.boton} stock={stock} count={count} /* correción => */ onAdd={onAdd}/>
          <Link to={`/product/${id}`}>
            <Button variant="outline-info">Ver Detalle</Button>
          </Link>
        </Card>
      </div>
    </>
  )
}

