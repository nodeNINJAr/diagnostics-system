import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Layout = () => (
  <div className="container mx-auto">
    {/* navbar */}
    <Navbar />
    {/* main body */}
    <main className="py-20 px-4 min-h-screen">
      <Outlet />
    </main>
    {/* footer */}
    <Footer/>
  </div>
);

export default Layout;
