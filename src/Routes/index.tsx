import React from "react";
import New from "../screens/New";
import Start from "../screens/Start";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Start />}></Route>
        <Route path="/new" element={<New />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
