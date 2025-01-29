import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";



// 
const Router = () => {
  return (
    <Routes>
       <Route path="/" element={<Layout/>}/>

    </Routes>
  );
};

export default Router;
