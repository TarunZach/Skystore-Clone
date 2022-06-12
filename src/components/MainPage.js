import React, { useState, useEffect } from "react";
import "./Mainpage/css/mainpage.css";
import { Helmet } from "react-helmet";
import Header from "./Mainpage/Header";
import Spotlight from "./Mainpage/Spotlight";
import Moviecard from "./Mainpage/Moviecard";
import Footer from "./Mainpage/Footer";
import { Button } from "react-bootstrap";
/*Menu*/
import Rent from "./Mainpage/menu/Rent";
import MovieBoxSpotlight from "./Mainpage/menu/MovieBoxSpotlight";
import MovieBoxCards from "./Mainpage/menu/MovieBoxCards";
import Buy from "./Mainpage/menu/Buy";
import PreOrder from "./Mainpage/menu/PreOrder";
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
          <Header onClick={getData} />
        </header>
        <div className="movie-list">
          {active === "home" && (
            <>
              <div className="carouselItem">
                <Spotlight />
              </div>
              <div className="gradient"></div>
              <div className="card container">
                <section>
                  <Moviecard />
                </section>
                <div className="button-wrapper">
                  <div className="button">
                    <Button variant="primary" className="buybutton">
                      Show More
                    </Button>
                  </div>
                  <a onClick={goTop}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-compact-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"
                      />
                    </svg>{" "}
                    Back to top
                  </a>
                </div>
              </div>
            </>
          )}

          {active === "rent" && (
            <>
              <div className="card container rent">
                <section>
                  <Rent />
                </section>
                <div className="button-wrapper">
                  <div className="button">
                    <Button variant="primary" className="buybutton">
                      Show More
                    </Button>
                  </div>
                  <a onClick={goTop}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-compact-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"
                      />
                    </svg>{" "}
                    Back to top
                  </a>
                </div>
              </div>
            </>
          )}

          {active === "moviebox" && (
            <>
              <div className="carouselItem">
                <MovieBoxSpotlight />
              </div>
              <div className="gradient"></div>
              <div className="card container">
                <section>
                  <MovieBoxCards />
                </section>
                <div className="button-wrapper">
                  <div className="button">
                    <Button variant="primary" className="buybutton">
                      Show More
                    </Button>
                  </div>
                  <a onClick={goTop}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-compact-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"
                      />
                    </svg>{" "}
                    Back to top
                  </a>
                </div>
              </div>
            </>
          )}

          {active === "buy" && (
            <>
              <div className="card container rent">
                <section>
                  <Buy />
                </section>
              </div>
            </>
          )}

          {active === "pre" && (
            <>
              <div className="card container rent">
                <section>
                  <PreOrder />
                </section>
              </div>
            </>
          )}

          {active === "bond" && (
            <>
              <div className="card container rent">
                <section>
                  <Bond />
                </section>
              </div>
            </>
          )}

          {active === "prem" && (
            <>
              <div className="card container rent">
                <section>
                  <Premiere />
                </section>
              </div>
            </>
          )}

          {active === "picks" && (
            <>
              <div className="card container rent">
                <section>
                  <Picks />
                </section>
              </div>
            </>
          )}

          {active === "under3" && (
            <>
              <div className="card container rent">
                <section>
                  <Under3 />
                </section>
              </div>
            </>
          )}

          {active === "under4" && (
            <>
              <div className="card container rent">
                <section>
                  <Under4 />
                </section>
              </div>
            </>
          )}

          {active === "under5" && (
            <>
              <div className="card container rent">
                <section>
                  <Under5 />
                </section>
              </div>
            </>
          )}

          {active === "springset" && (
            <>
              <div className="card container rent">
                <section>
                  <SpringSet />
                </section>
                <div className="button-wrapper">
                  <div className="button">
                    <Button variant="primary" className="buybutton">
                      Show More
                    </Button>
                  </div>
                  <a onClick={goTop}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-compact-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"
                      />
                    </svg>{" "}
                    Back to top
                  </a>
                </div>
              </div>
            </>
          )}

          {active === "tvset" && (
            <>
              <div className="card container rent">
                <section>
                  <TVSet />
                </section>
              </div>
            </>
          )}

          {active === "startrek" && (
            <>
              <div className="card container rent">
                <section>
                  <Startrek />
                </section>
              </div>
            </>
          )}

          {active === "all" && (
            <>
              <All />
            </>
          )}

          {active === "comedy" && (
            <>
              <div className="card container rent">
                <section>
                  <Comedy />
                </section>
              </div>
            </>
          )}

          {active === "drama" && (
            <>
              <div className="card container rent">
                <section>
                  <Drama />
                </section>
              </div>
            </>
          )}

          {active === "kids" && (
            <>
              <div className="card container rent">
                <section>
                  <Kids />
                </section>
              </div>
            </>
          )}

          {active === "newstore" && (
            <>
              <div className="card container rent">
                <section>
                  <NewStore />
                </section>
              </div>
            </>
          )}

          {active === "popular" && (
            <>
              <div className="card container rent">
                <section>
                  <Popular />
                </section>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
