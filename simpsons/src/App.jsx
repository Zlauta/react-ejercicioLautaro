import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import "./index.css";
const App = () => {
  return (
    <div className=" d-flex flex-column border-2 alturaMinimaContenedor">
      <Header></Header>
      <main>
        <HomePage></HomePage>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;
