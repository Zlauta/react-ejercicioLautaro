import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              width="50px"
              src="https://tse1.mm.bing.net/th/id/OIP.4DRvvGKLEV1Vfagii3WSTAHaHq?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Logo simpsons"
            />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/favoritos">
              Favoritos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/registro">
              Registro
            </Nav.Link>
            <Nav.Link as={NavLink} to="/iniciar-secion">
              Iniciar Secion
            </Nav.Link>
            <Nav.Link as={NavLink} to="/panel-administrador">
              Panel Administrador
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
