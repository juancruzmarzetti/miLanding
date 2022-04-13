import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import myCss from "./index.module.css"; 


export default function ItemDetail({producto}) {
    console.log(producto);

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
    </>
  )
};
