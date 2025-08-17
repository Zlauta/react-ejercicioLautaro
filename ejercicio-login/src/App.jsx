import React from "react";
import Header from "./components/ui/Header";
import AppRouter from "./router/AppRouter";
import Footer from "./components/ui/Footer";
import "sweetalert2/dist/sweetalert2.min.css";

const App = () => {
  return (
    <>
      <Header></Header>
      <AppRouter></AppRouter>
      <Footer></Footer>
    </>
  );
};

export default App;
