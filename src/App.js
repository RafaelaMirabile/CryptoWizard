import React from "react";
import './App.css';
import { Layout } from "antd";
import { Routes, Route } from 'react-router-dom'
import { HomePage, CryptoCurrencies, CryptoDetails, News, Exchange, Navbar, Footer } from './components'
import './App.css'
export const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/exchanges" element={<Exchange />} />
              <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}


