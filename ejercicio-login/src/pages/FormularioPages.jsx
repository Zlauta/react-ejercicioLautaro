import React from "react";
import Formulario from "../components/login/Formulario";
import { Container } from "react-bootstrap";

const FormularioPages = () => {
  return (
    <>
      <Container className="p-3 border rounded-3 bg-dark w-25 mt-4">
        <h1 className="text-center text-light ">Formulario</h1>
        <Formulario></Formulario>
      </Container>
    </>
  );
};

export default FormularioPages;
