import React, { useState, useEffect } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./Mainpage/css/mainpage.css";
import { Helmet } from "react-helmet";
import Header from "./Mainpage/Header";
import Footer from "./Mainpage/Footer";

const MainPage = () => {
  return (
    <div className="page">
      <div className="background bgWrapper">
        <Helmet>
          <title>Sky Store – The Latest Movies Straight From The Cinema</title>
        </Helmet>
        <header className="headerWrapper">
          <Header />
        </header>
        <div className="movie-list">
          <Outlet />
          <div className="footer-wrapper">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
