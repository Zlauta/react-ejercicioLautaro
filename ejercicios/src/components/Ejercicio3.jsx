import { useState } from "react";

const Ejercicio3 = ({ saludo }) => {
  const [msj, setMsj] = useState("");
  function handleCLick() {
    msj === "" ? setMsj("(From changed State)") : setMsj("");
  }

  return (
    <div>
      <h1>
        hello{saludo}
        {msj}
      </h1>
      <button onClick={handleCLick}>Click Me</button>
    </div>
  );
};

export default Ejercicio3;
