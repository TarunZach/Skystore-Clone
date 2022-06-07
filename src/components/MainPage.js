import React, { useState, useEffect } from 'react';
import './css/mainpage.css';
import { Helmet } from 'react-helmet';
import Header from './Mainpage/Header';
import Spotlight from './Mainpage/Spotlight';
import Moviecard from './Mainpage/Moviecard';
import Footer from './Mainpage/Footer';
import { Button } from 'react-bootstrap';

const MainPage = (props) => {

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
                </div>
            </div>
            <div className="footer-wrapper">
                <Footer />
            </div>
        </div>
    );
}


export default MainPage
