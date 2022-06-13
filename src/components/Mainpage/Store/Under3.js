import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/mainpage.css';
import { Button } from 'react-bootstrap';
import LoadingSpinner from '../LoadingSpinner';

function Under3() {
    const max = 200;

    const [data, getData] = useState([]);
    const [limit, setLimit] = useState(100);
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
                        <h1>Under £3</h1>
                        <Container>
                            <Row>

                                {
                                    data.slice(70, limit).map((img, key) => {
                                        return (
                                            <div className="card-wrapper" key={key}>
                                                <a href="" className="card-content">

                                                    <div className="image-container">
                                                        <img
                                                            src={img.image.original}
                                                            alt=""
                                                            className='cardimg' />
                                                    </div>
                                                    <p className="movieTitle">{img.name}</p>
                                                </a>
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
                    </>
            }
        </>
    );
}
export default Under3