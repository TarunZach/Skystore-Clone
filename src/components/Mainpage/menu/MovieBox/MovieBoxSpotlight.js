import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import '../../css/mainpage.css';
import image from '../../../storage/movieboxcarousel.json';

function MovieBoxSpotlight() {
    return (
        <>
                {
                    image.images ?
                        <Carousel>
                            {
                                image.images.map((img, key) => {
                                    return (

                                        <Carousel.Item interval={3000} key={key}>
                                            <img
                                                className="d-block w-100"
                                                src={img.url}
                                                alt="First slide"
                                            />
                                            <Carousel.Caption>
                                                <p>{img.description}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>

                                    );
                                })
                            }
                        </Carousel> : null
                }
        </>
    );
}

export default MovieBoxSpotlight