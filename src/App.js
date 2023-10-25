import React from "react";
import { Navbar, Footer } from "./components";
import './App.css';
import { Layout } from "antd";

export const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>

        </Layout>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}


