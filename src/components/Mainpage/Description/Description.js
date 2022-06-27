import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/mainpage.css';
import './details.css';
import LoadingSpinner from '../LoadingSpinner';

function Description(props) {
    const { id } = useParams();
    console.log(id);
    const [loading, setLoading] = useState(false);
    var regex = /(<([^>]+)>)/ig;
    const [data, getData] = useState([]);


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        setLoading(true);
        fetch('https://api.tvmaze.com/shows?_limit=30')
            .then((res) =>
                res.json())

            .then((response) => {
                console.log(response);
                response.forEach(element => {
                    if (element.id === parseInt(id)) {
                        setTimeout(() => {
                            getData(element);
                            setLoading(false);
                        }, 1000);

                        console.log(element);
                    }
                });
            })
    };

    return (
        <>
            {
                loading ? <LoadingSpinner /> :
                    <>
                        {
                            data.length !== 0 ?

                                <div className="detail-wrapper">
                                    <section>
                                        <div className="img-wrapper">
                                            <img className='voucherbg' src='https://images.store.sky.com/api/img/assetbackground/en/D26F51A8-7BCA-4B9F-987D-5397C85662C5_B327FD95-7B5A-46F0-BB17-F40B6831E9A4_2022-6-15-T9-39-21.jpg?s=1366x768&t=desktopwebbgmesh' alt="redeembg" />
                                        </div>
                                        <div className="container details">
                                            <div className="product-container">
                                                <div className="img-container">
                                                    <img src={data.image.original} alt="" className='product-image' />
                                                    {/* <img src="https://images.store.sky.com/api/img/asset/en/66D8BB8A-E4E8-4422-9242-603110084545_B327FD95-7B5A-46F0-BB17-F40B6831E9A4_2022-6-15-T9-39-21.jpg?s=260x371" alt="" className='product-image' /> */}
                                                </div>
                                                <div className="gradient grad-description"></div>
                                            </div>

                                            <div className="detailtext-wrapper">
                                                <h1 className='image-title'>{data.name}</h1>
                                                <ul>
                                                    <li>{data.premiered}</li>
                                                    <li>Cert. PG</li>
                                                </ul>

                                                <div className="description-para">
                                                    <p>{(data.summary).replace(regex, "")}</p>
                                                </div>

                                                <div className="info">
                                                    <p>Contains flashing images, strong language, mature themes, violence.</p>
                                                </div>

                                                <div className="info-wrapper">
                                                    <div className="cast-wrapper flexinfo">
                                                        <p>Cast: </p>

                                                        <div className="anchor-wrapper">
                                                            <a>Ben Schwartz</a>
                                                            <a>Idris Elba</a>
                                                            <a>Jim Carrey</a>
                                                        </div>
                                                    </div>
                                                    <div className="director-wrapper flexinfo">
                                                        <p>Director: </p>

                                                        <div className="anchor-wrapper">
                                                            <a>Jeff Fowler</a>
                                                        </div>
                                                    </div>
                                                    <div className="genre-wrapper flexinfo">
                                                        <p>Genre: </p>

                                                        <div className="anchor-wrapper">
                                                            {
                                                                (data.genres).map((anchor, key) => {
                                                                    return (
                                                                        <a key={key}>{anchor}</a>
                                                                    )
                                                                })
                                                            }

                                                            {/* <a>test</a> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                : null
                        }
                    </>
            }
        </>
    );
}
export default Description