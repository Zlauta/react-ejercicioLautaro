import React from "react";
import { Route, Routes } from "react-router";
import HomePages from "../pages/HomePages";
import FormularioPages from "../pages/FormularioPages";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages></HomePages>}></Route>
        <Route
          path="/Formulario"
          element={<FormularioPages></FormularioPages>}
        ></Route>
      </Routes>
    </>
  );
};

export default AppRouter;
