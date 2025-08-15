import { Button, Form } from "react-bootstrap";

function Formulario() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-light">Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingresar Nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-light">Apellido</Form.Label>
        <Form.Control type="text" placeholder="Ingresar Apellido" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="text-light">DNI</Form.Label>
        <Form.Control type="number" placeholder="Ingresar DNI" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-light">Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresar Email" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Formulario;
