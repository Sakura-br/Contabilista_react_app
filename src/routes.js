import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomePage from "./components/HomePage";
import About from "./components/About";
import Create from "./components/Create";
import Lists from "./components/Lists";
import Costs from "./components/Costs";

const RoutesGroup = () => {
  return (
    <Routes>
      <Route element={<HomePage/>} path="/" />
      <Route path="/create" element={<Create/>} />
      <Route path="/lists" element={<Lists/>} />
      <Route path="/costs" element={<Costs/>} />
    </Routes>
  );
};

export default RoutesGroup;
