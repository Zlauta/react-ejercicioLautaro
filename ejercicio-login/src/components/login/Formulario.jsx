import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Swal from "sweetalert2/dist/sweetalert2.js";

function Formulario() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      nombre: "",
      apellido: "",
      dni: "",
      email: "",
    },
  });

  const navegacion = useNavigate();

  function onSubmit(data) {
    console.log(data);
    if (data === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El usuario no existe en la base de datos",
      });
      return;
    }
    const usuarioLogueado = {
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email,
      loginAt: new Date().toISOString(),
    };
    sessionStorage.setItem("usuario", JSON.stringify(usuarioLogueado));
    Swal.fire({
      title: "Usuario Logueado",
      icon: "success",
      draggable: true,
    });
    reset();
    navegacion("/");
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Label className="text-light">Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresar Nombre"
          isInvalid={errors.nombre}
          {...register("nombre", {
            required: "El nombre es requerido",
            minLength: {
              value: 3,
              message: "Minimo ingresar 3 caracteres",
            },
            maxLength: {
              value: 20,
              message: "Maximo de caracteres 20",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.nombre?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="text-light">Apellido</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresar Apellido"
          isInvalid={errors.apellido}
          {...register("apellido", {
            required: "El apellido es requerido",
            minLength: {
              value: 3,
              message: "Minimo ingresar 3 caracteres",
            },
            maxLength: {
              value: 20,
              message: "Maximo de caracteres 20",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.apellido?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="text-light">DNI</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresar DNI"
          isInvalid={errors.dni}
          {...register("dni", {
            required: "El dni es requerido",
            pattern: {
              value: /^[0-9]{7,8}$/,
              message: "El DNI debe tener 7 u 8 numeros",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.dni?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-light">Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingresar Email"
          isInvalid={errors.email}
          {...register("email", {
            required: "El email es requerido",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Debe ingresar un email válido",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        Enviar Formulario
      </Button>
    </Form>
  );
}

export default Formulario;
