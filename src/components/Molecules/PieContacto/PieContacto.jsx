import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

import "./css/PieContacto.css"
const PieContacto = () => {
  return (
    <footer className="footer">
      <Container>
        <br />
        <Row>
          <Col lg="6">
          <h5>Información de contacto</h5>
            <p>Correo electrónico: Corp4g@hotmail.com</p>
            <p>Número de teléfono: +57 310 3171145</p>
            <p>Dirección:  Cra 47 # 143 - 76, 2do piso</p>
          </Col>
          <Col lg="6" className="d-flex flex-column" style={{rowGap:"4px"}}>
            <h5>Navegación</h5>
            <NavLink to="/">
              <Button variant="info">Inicio</Button>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default PieContacto;
