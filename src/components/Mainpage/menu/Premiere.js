import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/mainpage.css';
import image from '../../storage/images.json'

function Premiere() {

    return (
        <>
            <div className="card container rent">
                <section>
                    <h1>Sky Store Premiere</h1>
                    <Container>
                        <Row>
                            {
                                image.images ?
                                    <>
                                        {
                                            image.images.slice(0, 12).map((img, key) => {
                                                return (
                                                    <div className="card-wrapper" key={key}>
                                                        <a href="" className="card-content">

                                                            <div className="image-container">
                                                                <img
                                                                    src={img.url}
                                                                    alt=""
                                                                    className='cardimg' />
                                                            </div>
                                                            <p className="movieTitle">{img.title}</p>
                                                        </a>
                                                    </div>

                                                );
                                            })

                                        }
                                    </> : null
                            }
                        </Row>
                    </Container>
                </section>
            </div>
        </>
    );
}

export default Premiere