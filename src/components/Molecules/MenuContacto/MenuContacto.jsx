import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../../../assets/img/logo.jpeg";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from 'react-router-dom';
import ButtonContact from "../../Atoms/ButtonContact/ButtonContact";
function MenuContacto() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="back"
      bg="dark"
      data-bs-theme="dark"
      fixed="top"
    >
      <Container>
      <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavLink to="/">
            <ButtonContact text={"Inicio"}></ButtonContact>
          </NavLink>
          <NavLink to="/inicio/contacto">
            <ButtonContact text={"Contacto"}></ButtonContact>
          </NavLink>
          <NavLink to="/inicio/multimedia">
            <ButtonContact text={"Multimedia"}></ButtonContact>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuContacto;
