import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import CarruselImagen from "../../Molecules/CarruselImagen/CarruselImagen";
import ListaEventos from "../../Molecules/ListaEventos/ListaEventos";
import Pie from "../../Molecules/Pie/Pie";
import "./css/InicioSeccion1.css";
import imgevent from "../../../assets/img/img4.jpeg"
import imgevent2 from "../../../assets/img/img4.png"

const InicioSeccion1 = ({ imagenFondo }) => {
  const seccionStyle = {
    backgroundImage: `url(${imagenFondo})`,
  };

  return (
    <div>
        <section className="seccion" style={seccionStyle}>
        <a name="inicio" />
          <Container className="seccion1">
            <Row>
              <Col lg="5" style={{ marginTop: "40vh" }}>
                <h3>Corporación Cuarta Generación</h3>
                <h1>Ven y únete a nuestra comunidad</h1>
                <a href="#quienes_somos">
                  <Button className="colorButton">Conocenos</Button>
                </a>
              </Col>
            </Row>
          </Container>
          <Container className="seccion2">
            <a name="quienes_somos" />
            <Row style={{ justifyContent: "center" }}>
              <Col
                lg="10"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <h1 className="title">Quienes somos</h1>
                  <p>
                    Somos una entidad sin ánimo de lucro con más de treinta años de
                    experiencia en el campo de los servicios culturales, sociales,
                    recreativos, educativos, morales y espirituales. Nuestro
                    objetivo principal es promover la edificación integral del ser
                    humano en la sociedad, brindando apoyo y acompañamiento en todas
                    las áreas de su vida.
                  </p>
                  <div className="d-flex justify-content-center">
                    <CarruselImagen />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <Container className="seccion3">
            <a name="valores" />
            <Row style={{ justifyContent: "center" }}>
              <Col
                lg="10"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <h1 className="title">Misión y Visión</h1>
                  <Row>
                    <Col lg="6" sm="12">
                      <h2>Misión</h2>
                      <p>
                        Fomentar mediante la educación el conocimiento del ser
                        humano en todo su ser, fortaleciendo su propósito de vida y
                        su responsabilidad social. Realizando actividades educativas
                        y de promoción social, sembrar, transferir, cultivar,
                        promover los principios, los valores éticos y morales
                        universales en los miembros de la familia, transformando
                        mentalidades y generando una firme actitud de cambio para el
                        fortalecimiento de la paz, fraternidad y felicidad del ser
                        humano. Ofrecer a la sociedad alternativas de recreación,
                        educación, y formación moral y espiritual con el propósito
                        de mejorar el bien común. Unir esfuerzos con otras entidades
                        cuyos fines sean similares a los de la corporación, con el
                        propósito de lograr mayor cobertura y efectividad en el
                        alcance de los proyectos y actividades. Promover proyectos,
                        campañas y acciones que contribuyan al cuidado y bienestar
                        del ser humano, incentivando el amor por Su creador, por la
                        vida y el deseo constante de ayudar a los demás.
                      </p>
                    </Col>
                    <Col lg="6" sm="12">
                      <h2 className="title">Visión</h2>
                      <p>
                        Lograr formar una sociedad con valores marcados, en el
                        ámbito social, humano y espiritual, donde se garantice las
                        libertades y las convicciones de las personas; libertad de
                        de culto, de creencia, de preferencias etc; personas que se
                        puedan expresar libremente, respetando las leyes de la
                        naciòn y ejerciendo respetuosamente sus derechos. Que los
                        jóvenes se eduquen para la paz, generando vínculos de
                        hermandad entre estos. Ser un medio de ayuda para los
                        jóvenes y que acoge a la sociedad en general que quiere
                        construir un país en paz.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
          <Container className="seccion4">
            <a name="eventos" />
            <Row style={{ justifyContent: "center" }}>
              <Col
              className="eventos"
                lg="10"
                style={{
                  marginTop: "15vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <h1 className="title">Únete a nosotros y forma parte de algo grandioso.</h1>
                  <Row style={{ background: "#FFF5EB", borderRadius:"10px", gap:"5px" }}>
                    <Col lg="5">
                      <div className="d-flex justify-content-between align-items-between">
                        <h5>Proximo evento</h5>
                        <h3>
                          Agosto <h4>13</h4>
                        </h3>
                      </div>
                      <div>
                        <h5>¡Gran evento de donación de sangre para salvar vidas!</h5>
                        <p>
                        Únete a nosotros en nuestro emocionante evento de donación de sangre, donde puedes marcar la diferencia y ser un héroe para aquellos que lo necesitan
                        </p>
                        <ul className="d-flex justify-content-between">
                          <li className="item-icono1">
                            <p>
                              <h5>Domingo:</h5> 11:00 am
                            </p>
                          </li>
                          <li className="item-icono2">
                            <p>
                              <h5>Lugar:</h5> Bogotá D.C
                            </p>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeMSJDKrl3-xZEfUF4iez4WU_uhj476JJJb2hfzXDVxXgBCKA/viewform">
                            <Button variant="success">Registro</Button>
                            </a>
                            
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col lg="6">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <div>
                            <img src={imgevent} alt="imagen_evento" />
                        </div>
                    </div>
                    </Col>
                    <Col lg="5">
                      <div className="d-flex justify-content-between align-items-between">
                        <h5>Proximo evento</h5>
                        <h3>
                          Sin programar
                        </h3>
                      </div>
                      <div>
                        <h5>¡Sembrando un futuro verde juntos!</h5>
                        <p>
                        Te invitamos a un evento especial de siembra de árboles, donde uniremos fuerzas para hacer del mundo un lugar más verde y sostenible
                        </p>
                        <ul className="d-flex justify-content-between">
                          <li className="item-icono1">
                            <p>
                              Próximo evento por programar 
                            </p>
                          </li>
                          <li className="item-icono2">
                            <p>
                              <h5>Lugar:</h5> Bogotá D.C
                            </p>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col lg="6">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <div>
                            <img src={imgevent2} alt="imagen_evento" />
                        </div>
                    </div>
                    </Col>
                    <Col lg="12" className="d-flex flex-column align-items-center justify-content-center">
                    <h1 className="title" >Articulos</h1>
                    <ListaEventos></ListaEventos>
                    <br />
                    </Col>
                    <Col style={{margin:" 0px", padding:"3rem 0px 3rem 0px", background:"#FFFFFF"}}>
                    <Pie></Pie>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            
          </Container>
        </section>
    </div>
  );
};

export default InicioSeccion1;
