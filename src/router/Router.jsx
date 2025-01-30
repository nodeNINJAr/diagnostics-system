import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/public/Home/Home";
import About from "../pages/public/about/About";
import RegistrationForm from "../components/auth/RegistrationForm";
import LoginPage from "../components/auth/LoginPage";



// 
const Router = () => {
  return (
    <Routes>
      {/* public layouts */}
       <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="services" element={<About/>}/>
          <Route path="contact" element={<About/>}/>
       </Route>
        {/* auth */}
        <Route path="auth">
           <Route path="login" element={<LoginPage/>}/>
           <Route path="register" element={<RegistrationForm/>}/>
        </Route>
    </Routes>
  );
};

export default Router;
