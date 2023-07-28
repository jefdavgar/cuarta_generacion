import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./css/InicioContacto.css";
import PieContacto from "../../Molecules/PieContacto/PieContacto";

const InicioContacto = ({ imagenFondo }) => {
  const seccionStyle = {
    backgroundImage: `url(${imagenFondo})`,
  };

  return (
    <div>
      <section className="seccion" style={seccionStyle}>
        <Container className="seccion1">
          <a name="inicio" />
          <Row>
            <Col lg="5" style={{ marginTop: "40vh" }}>
              <h4>Contacto - Cuarta Generación: Corporación Cuarta Generación</h4>
              <h1>Ponte en contacto con nuestra Corporación</h1>
            </Col>
          </Row>
        </Container>
        <Container className="seccion2" style={{ marginTop: "7rem" }}>
          <a name="quienes_somos" />
          <Row style={{ justifyContent: "center" }}>
            <Col
              lg="6"
              style={{
                marginTop: "15vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <h1>Contactanos</h1>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre completo</Form.Label>
                    <Form.Control type="text" placeholder="Escribe tu nombre" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Número telefonico</Form.Label>
                    <Form.Control type="number" placeholder="Escribe tu número" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>¿Donde Vives?</Form.Label>
                    <Form.Control type="text" placeholder="Escribe tu ubicación" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo electronico</Form.Label>
                    <Form.Control type="email" placeholder="Escribe email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Enviar
                  </Button>
                </Form>
              </div>
            </Col>
            <Col
              lg="6"
              style={{
                marginTop: "15vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <h1>Cuarta Generación</h1>
                <PieContacto></PieContacto>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default InicioContacto;
