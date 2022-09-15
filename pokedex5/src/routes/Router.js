import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BattlePage from "../Pages/BattlePage/BattlePage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="page/:page/" element={<HomePage />} />
        <Route path="details/:id" element={<DetailsPage />} />
        <Route path="pokedex" element={<PokedexPage />} />
        <Route path="battle" element={<BattlePage/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
