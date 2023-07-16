import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ButtonContact from '../../Atoms/ButtonContact/ButtonContact';
import "./css/MenuNav.css"
function MenuNav() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#inicio">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#quienes_somos">Quienes Somos</Nav.Link>
            <Nav.Link href="#valores">Valores</Nav.Link>
            <Nav.Link href="#eventos">Eventos</Nav.Link>
          </Nav>
          <Nav>
           <ButtonContact text={"Contactanos"}></ButtonContact>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuNav;