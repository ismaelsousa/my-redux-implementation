import React from "react";
import Account from "../screens/Account";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "../screens/Posts";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Posts />}></Route>
        <Route path="/account" element={<Account />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
