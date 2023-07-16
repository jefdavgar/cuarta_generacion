import React from "react";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import "./css/Pie.css"
const Pie = () => {
  return (
    <footer className="footer">
      <Container>
        <br />
        <Row>
          <Col>
            <h5>Información de contacto</h5>
            <p>Correo electrónico: juanesquitian14@gmail.com</p>
            <p>Número de teléfono: 3115384311</p>
            <p>Dirección: Calle 142 Barrio: Prado</p>
          </Col>
          <Col className="d-flex flex-column" style={{rowGap:"4px"}}>
            <h5>Navegación</h5>
            <a href="#inicio">
              <Button variant="info">Inicio</Button>
            </a>
            <a href="#quienes_somos">
              <Button variant="info">Quienes Somos</Button>
            </a>
           <a href="#valores">
            <Button variant="info">Valores</Button>
           </a>
            <a href="#eventos">
              <Button variant="info">Eventos</Button>
            </a>
          </Col>
          
          <Col>
            <h5>Redes sociales</h5>
            <ul class="social-icons">
              <li>
                <a href="https://www.instagram.com/tuusuario" target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/tuusuario" target="_blank">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/tuusuario" target="_blank">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/tuusuario" target="_blank">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <Button className="colorButton">Donaciones</Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Pie;
