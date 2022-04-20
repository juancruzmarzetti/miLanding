import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';
import myCss from "./index.module.css"; 
import Button from 'react-bootstrap/Button';


export default function ItemDetail({producto, stock, count, onAdd, setCantidad, cantidad}) {
    console.log(producto);
    /*itemCount aparecería condicionalmente(si el valor de la cantidad de items a agregar al carrito
        ya esta seteado, no aparece y aparecería otro botón de ir a "/cart"(CartDetail))
        {if(cantidad < 0)return <div className={myCss.itemC}>
        <ItemCount stock={stock} count={count} onAdd={onAdd}/>
        </div>} */
  return (
    <>
    
    <Carousel>
        <Carousel.Item>
            <div  className={myCss.img}>
                <img
                className="d-block w-100"
                src={producto.img1}
                alt="First slide"
                />
            </div>
            <Carousel.Caption className={myCss.text}>
                <h3>{producto.nombre}</h3>
                <p>$ {producto.precio}</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <div className={myCss.img}>
                <img
                className="d-block w-100"
                src={producto.img2}
                alt="Second slide"
                />
            </div>
            <Carousel.Caption className={myCss.text}>
                <h3>{producto.nombre}</h3>
                <p>$ {producto.precio}</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <div className={myCss.img}>
                <img
                className="d-block w-100"
                src={producto.img3}
                alt="Third slide"
                />
            </div>
            <Carousel.Caption className={myCss.text}>
                <h3>{producto.nombre}</h3>
                <p>$ {producto.precio}</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>Ver Detalles</Accordion.Header>
            <Accordion.Body>
                {producto.detalle}
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    <div className={myCss.itemC}>
        {cantidad === 0 ? <ItemCount stock={stock} count={count} onAdd={onAdd}/> : <Button as={Link} to="/cart" variant="outline-info">Ir al carrito ({cantidad} items agregados)</Button>}
    </div>
    </>
  )
};
