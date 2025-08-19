import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-warning py-4 mt-auto ">
      <Container>
        <Row>
          <Col md={4} className="mb-3 text-center">
            <h5>Homer Simpson</h5>
            <p>
              Fan de las donas 🍩 y la cerveza Duff 🍺. Trabaja en la planta
              nuclear de Springfield.
            </p>
            <p>
              <em>"¡D'oh!"</em>
            </p>
          </Col>
          <Col md={4} className="mb-3 text-center">
            <h5>Marge Simpson</h5>
            <p>
              La voz de la razón 💙. Siempre intentando mantener unida a la
              familia.
            </p>
            <p>
              <em>"Mmm..."</em>
            </p>
          </Col>
          <Col md={4} className="mb-3 text-center">
            <h5>Bart Simpson</h5>
            <p>
              Travieso, rebelde y fan de la patineta 🛹. Siempre listo para
              decir:
            </p>
            <p>
              <em>"¡Ay caramba!"</em>
            </p>
          </Col>
        </Row>
        <Row className="pt-3 border-top border-secondary">
          <Col className="text-center">
            <small>© 2025 Springfield. Todos los derechos reservados.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
