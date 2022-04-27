import React, {useContext} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Badge } from "react-bootstrap";
import customCss from "./index.module.css";
import Button from 'react-bootstrap/Button';
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';

export default function CartDetail() {

  const {cart, removeFromCart, buyAll, cant} = useContext(CartContext);
  console.log(cart);
  let valorTotal = cant();
  console.log(valorTotal);
  return (
    <>
      <h1 className={customCss.text}>Cart shopping</h1>
      <ListGroup as="ol">
      <div> {cart.length > 0 ? cart.map(item => <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{item.nombre}</div>
            $ {item.precio}
          </div>
          <Button variant="outline-secondary" onClick={() => removeFromCart(item.id)}>Remove from cart</Button>
          <Badge bg="primary" pill>
            {item.counter}
          </Badge>
        </ListGroup.Item> ) : <div><Button 
        as={Link} to="/" variant="outline-success">Back to shop</Button> <br/> <h1 className={customCss.text}>The cart is empty</h1></div> }</div>
      </ListGroup>
      { cart.length > 0 && <div>
        <h2 className={customCss.text}>Total value: $ {valorTotal}</h2>
        <hr/>
        <Button variant="outline-success" onClick={() => buyAll()}>Finish my purchase</Button>
        <hr/>
        <Button variant="outline-secondary" onClick={() => buyAll()}>Clean cart</Button>
      </div>}
    </>
  )
}

