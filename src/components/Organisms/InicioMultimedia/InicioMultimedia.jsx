import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import img1 from "../../../assets/img/img1.jpeg";
import img2 from "../../../assets/img/img2.jpeg";
import img3 from "../../../assets/img/img3.jpeg";
import img4 from "../../../assets/img/img4.jpeg";
import img5 from "../../../assets/img/img5.jpeg";
import img6 from "../../../assets/img/img6.jpeg";

const InicioMultimedia = ({ imagenFondo }) => {
  const seccionStyle = {
    backgroundImage: `url(${imagenFondo})`,
  };

  // Definimos el arreglo de imágenes con sus respectivas propiedades
  const multimediaData = [
    {
      titulo: "Aventura en los Frailejones",
      descripcion:
        "Una emocionante aventura en los frailejones, rodeados de la majestuosidad de la naturaleza. ¡Descubre paisajes impresionantes y vive momentos inolvidables!.",
      imagenSrc: img1,
    },
    {
      titulo: "Explicación de proyecto",
      descripcion:
        "Una explicación detallada sobre nuestro apasionante proyecto. Descubre cómo trabajamos para lograr nuestros objetivos y cómo impactamos positivamente en la comunidad",
      imagenSrc: img2,
    },
    {
      titulo: "Evento con la Corporación",
      descripcion:
        "Un evento inolvidable en compañía de nuestra corporación. Celebremos juntos los logros alcanzados y compartamos momentos de alegría y compañerismo.",
      imagenSrc: img3,
    },
    {
      titulo: "Evento con la Corporación",
      descripcion:
        "Un encuentro especial con nuestra corporación, donde celebramos el espíritu de equipo y la colaboración en cada actividad que realizamos",
      imagenSrc: img4,
    },
    {
      titulo: "Triunfo de Kevin Peña",
      descripcion:
        "¡Kevin Peña, miembro destacado de nuestra corporación, alcanza el primer puesto en una competencia de patinaje! Un logro que nos llena de orgullo",
      imagenSrc: img5,
    },
    {
      titulo: "La importancia de los Frailejones",
      descripcion:
        "Descubre la importancia y belleza de los frailejones, plantas emblemáticas de nuestra región. Aprende sobre su ecosistema y su valiosa contribución al medio ambiente.",
      imagenSrc: img6,
    },
  ];
  

  return (
    <div>
      <section className="seccion" style={seccionStyle}>
        <Container className="seccion1">
          <a name="inicio" />
          <Row>
            <Col lg="5" style={{ marginTop: "40vh" }}>
              <h4>Multimedia - Corporación Cuarta Generación</h4>
              <h1>Conoce las experiencias de la comunidad</h1>
            </Col>
          </Row>
        </Container>
        <Container className="seccion2" style={{ marginTop: "7rem" }}>
          <Row xs={1} md={2} className="g-4">
            {multimediaData.map((item, index) => (
              <Col key={index}>
                <Card>
                  <Card.Img variant="top" src={item.imagenSrc} alt={item.titulo} />
                  <Card.Body>
                    <Card.Title>{item.titulo}</Card.Title>
                    <Card.Text>{item.descripcion}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default InicioMultimedia;
