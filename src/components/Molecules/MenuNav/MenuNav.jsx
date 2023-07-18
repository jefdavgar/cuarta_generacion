import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from 'react-router-dom';
import ButtonContact from "../../Atoms/ButtonContact/ButtonContact";
import logo from "../../../assets/img/logo.jpeg";
import "./css/MenuNav.css";
function MenuNav() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
      fixed="top"
    >
      <Container>
      <Navbar.Brand href="#home"><img src={logo} alt="logo" className="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#quienes_somos">Quienes Somos</Nav.Link>
            <Nav.Link href="#valores">Valores</Nav.Link>
            <Nav.Link href="#eventos">Eventos</Nav.Link>
          </Nav>
          <NavLink to="/inicio/contacto">
            <ButtonContact text={"Contactanos"}></ButtonContact>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuNav;
