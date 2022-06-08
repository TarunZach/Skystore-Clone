import React, { useState, useEffect } from 'react';
import './css/mainpage.css';
import { Helmet } from 'react-helmet';
import Header from './Mainpage/Header';
import Spotlight from './Mainpage/Spotlight';
import Moviecard from './Mainpage/Moviecard';
import Footer from './Mainpage/Footer';
import { Button } from 'react-bootstrap';
import Rent from './Mainpage/Rent';
import MovieBoxSpotlight from './Mainpage/MovieBoxSpotlight';
import MovieBoxCards from './Mainpage/MovieBoxCards';

const MainPage = () => {
    const [active, setActive] = useState("home");
    const getData = (data) => {
        setActive(data);
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
                    {
                        active === "home" &&
                        <>
                            <div className="carouselItem">
                                <Spotlight />
                            </div>
                            <div className="gradient">
                            </div>
                            <div className="card container">
                                <section>
                                    <Moviecard />
                                </section>
                                <Button variant="primary" >Show More</Button>
                            </div>
                        </>
                    }

                    {
                        active === "rent" &&
                        <>
                            <div className="card container rent">
                                <section>
                                    <Rent />
                                </section>
                                <Button variant="primary" >Show More</Button>
                            </div>
                        </>

                    }

                    {
                        active === "moviebox" &&
                        <>
                            <div className="carouselItem">
                                <MovieBoxSpotlight />
                            </div>
                            <div className="gradient">
                            </div>
                            <div className="card container">
                                <section>
                                    <MovieBoxCards />
                                </section>
                                <Button variant="primary" >Show More</Button>
                            </div>
                        </>
                    }

                </div>
            </div>
            <div className="footer-wrapper">
                <Footer />
            </div>
        </div>
    );
}


export default MainPage
