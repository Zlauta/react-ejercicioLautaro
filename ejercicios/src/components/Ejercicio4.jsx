import { useState } from "react";

const Ejercicio4 = () => {
  const [listadoTareas, setListadoTareas] = useState([]);
  const [tarea, setTarea] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setListadoTareas([...listadoTareas, tarea]);
  }
  return (
    <div className="container">
      <h1 className="text-center my-3">Listado de Tarea</h1>
      <form
        onSubmit={handleSubmit}
        className="text-center d-flex justify-content-center"
      >
        <input
          type="text"
          placeholder="Ingrese una Tarea"
          className="p-1 form-control w-25 "
          onChange={(event) => setTarea(event.target.value)}
        />
        <button type="submit" className="btn btn-primary mx-2 p-2">
          Guardar
        </button>
      </form>
      <h2>Listado</h2>
      <ul>
        {listadoTareas.map((listadoTarea, indice) => (
          <li key={indice}>{listadoTarea}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ejercicio4;
