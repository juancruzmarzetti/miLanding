import React, {useContext} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from "react-bootstrap/ListGroup";
import { CartContext } from '../CartContext';
import ListGroupItem from "react-bootstrap/ListGroupItem";
import customCss from "./index.module.css";

export default function CartCheckoutItems() {

    const {cart, valorTotal} = useContext(CartContext);

    return(
            <>
                <div className={customCss.centerDiv}>
                    <h3> //  Cart Ticket  // </h3>
                    { cart.map( item => <div className={customCss.customMargin}><Card style={{ width: '18rem' }}> 
                                            <Card.Body>
                                                <Card.Title>{item.nombre}</Card.Title>
                                                <Card.Text>
                                                    Tipo de cerveza: {item.category}
                                                </Card.Text>
                                            </Card.Body>
                                            <ListGroup className="list-group-flush">
                                                <ListGroupItem>Cantidad elegida: {item.counter}</ListGroupItem>
                                            </ListGroup>
                                        </Card></div>)}
                    <h4 className={customCss.customMargin} >Precio total: ${valorTotal}</h4>              
                </div>
            </>
    )
};