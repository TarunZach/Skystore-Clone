import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './css/mainpage.css';
import LoadingSpinner from './LoadingSpinner';
import Spotlight from './Spotlight';

function Moviecard(props) {
    const max = 100;

    const [data, getData] = useState([]);
    const [limit, setLimit] = useState(30);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        fetchData();
        console.log(limit)
    }, [limit])

    const fetchData = () => {
        if (count === 0) {
            setLoading(true);
        }

        fetch('https://api.tvmaze.com/shows?_limit=30')
            .then((res) =>
                res.json())

            .then((response) => {
                console.log(response);
                setTimeout(() => {
                    getData(response);
                    setLoading(false);
                    setCount(count + 1);
                }, 1500);
            })
    };

    const handleLimit = () => {
        if (limit <= max) {
            setLimit(limit + 12);
        }
    };
    return (
        <>
            {
                loading ? <LoadingSpinner /> :
                    <>
                        <div className="carouselItem">
                            <Spotlight />
                        </div>
                        <div className="gradient"></div>
                        <div className="card container">
                            <section>
                                <h1>Latest Movies & TV</h1>
                                <Container>
                                    <Row>

                                        {
                                            data.slice(0, limit).map((img, key) => {
                                                return (
                                                    <div className="card-wrapper" key={key}>
                                                        <Link to={'description/'+img.id}>
                                                            <a className="card-content">

                                                                <div className="image-container">
                                                                    <img
                                                                        src={img.image.original}
                                                                        alt=""
                                                                        className='cardimg' />
                                                                </div>
                                                                <p className="movieTitle">{img.name}</p>
                                                            </a>
                                                        </Link>
                                                    </div>

                                                );
                                            })
                                        }

                                    </Row>
                                </Container>
                                <div className="button-wrapper">
                                    <div className="button">
                                        <Button variant="primary" className='buybutton' onClick={handleLimit}>Show More</Button>
                                    </div>
                                    <a onClick={goTop}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-up" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z" />
                                    </svg> Back to top</a>
                                </div>
                            </section>
                        </div>
                    </>
            }
        </>
    );
}

export default Moviecard