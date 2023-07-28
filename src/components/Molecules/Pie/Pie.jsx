import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

import "./css/Pie.css"
const Pie = () => {
  return (
    <footer className="footer">
      <Container>
        <br />
        <Row>
          <Col lg="5">
            <h5>Información de contacto</h5>
            <p>Correo electrónico: Corp4g@hotmail.com</p>
            <p>Número de teléfono: +57 310 3171145</p>
            <p>Dirección:  Cra 47 # 143 - 76, 2do piso</p>
          </Col>
          <Col lg="6" className="d-flex flex-column" style={{rowGap:"4px"}}>
            <h5>Navegación</h5>
            <a href="#inicio">
              <Button className="navButton">Inicio</Button>
            </a>
            <a href="#quienes_somos">
              <Button className="navButton">Quienes Somos</Button>
            </a>
           <a href="#valores">
            <Button className="navButton">Valores</Button>
           </a>
            <a href="#eventos">
              <Button className="navButton">Eventos</Button>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Pie;
