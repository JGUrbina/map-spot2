import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsSpot from "../pages/details/DetailsSpot";
import Home from "../pages/home/home";

// import { Container } from './styles';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<DetailsSpot />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
