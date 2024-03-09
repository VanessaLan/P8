import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FicheLogement from "./pages/FicheLogement";

const App = () => {
  return (
    <div className="main_container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/logement/:id" element={<FicheLogement />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
