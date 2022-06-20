import React, { useState, useEffect } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./Mainpage/css/mainpage.css";
import { Helmet } from "react-helmet";
import Home from "./Mainpage/Home";
import Header from "./Mainpage/Header";
import Footer from "./Mainpage/Footer";
import { Button } from "react-bootstrap";
/*Menu*/
import Rent from "./Mainpage/menu/Rent";
import Buy from "./Mainpage/menu/Buy";
import PreOrder from "./Mainpage/menu/PreOrder";
import MovieBox from "./Mainpage/menu/MovieBox/MovieBox";
import Bond from "./Mainpage/menu/Bond";
import Premiere from "./Mainpage/menu/Premiere";
/*Spring*/
import Picks from "./Mainpage/Store/Picks";
import Under3 from "./Mainpage/Store/Under3";
import Under4 from "./Mainpage/Store/Under4";
import Under5 from "./Mainpage/Store/Under5";
import SpringSet from "./Mainpage/Store/SpringSet";
import TVSet from "./Mainpage/Store/TVSet";
import Startrek from "./Mainpage/Store/Startrek";
/*TV*/
import All from "./Mainpage/TV/All";
import Comedy from "./Mainpage/TV/Comedy";
import Drama from "./Mainpage/TV/Drama";
import Kids from "./Mainpage/TV/Kids";
import NewStore from "./Mainpage/TV/NewStore";
import Popular from "./Mainpage/TV/Popular";
import Gift from "./Mainpage/Gift";
import Voucher from "./Mainpage/Voucher";
import Description from "./Mainpage/Description/Description";


const MainPage = () => {

  const [active, setActive] = useState("home");
  const getData = (data) => {
    setActive(data);
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="page">
      <div className="background bgWrapper">
        <Helmet>
          <title>Sky Store – The Latest Movies Straight From The Cinema</title>
        </Helmet>
        <header className="headerWrapper">
          <Header onClick={getData}/>
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
