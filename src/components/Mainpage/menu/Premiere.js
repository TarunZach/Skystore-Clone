import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../css/mainpage.css";
import image from "../../storage/images.json";
import LoadingSpinner from "../LoadingSpinner";

function Premiere() {
  let history = useNavigate();

  const [data, getData] = useState([]);
  const [limit, setLimit] = useState(12);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchData();
    console.log(limit);
  }, [limit]);

  const fetchData = () => {
    if (count === 0) {
      setLoading(true);
    }

    fetch("https://api.tvmaze.com/shows?_limit=30")
      .then((res) => res.json())

      .then((response) => {
        console.log(response);
        setTimeout(() => {
          getData(response);
          setLoading(false);
          setCount(count + 1);
        }, 1500);
      });
  };

  return (
    <>
      <div className="card container rent">
        <section>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <>
              <h1 className="mobile-menutitle">Sky Store Premiere</h1>
              <Container>
                <Row>
                  {data.slice(50, 62).map((img, key) => {
                    return (
                      <div className="card-wrapper" key={key}>
                        <a
                          onClick={() => {
                            history("/description/" + img.id);
                          }}
                          className="card-content"
                        >
                          <div className="image-container">
                            <img
                              src={img.image.original}
                              alt=""
                              className="cardimg"
                            />
                          </div>
                          <p className="movieTitle">{img.name}</p>
                        </a>
                      </div>
                    );
                  })}
                </Row>
              </Container>
            </>
          )}
        </section>
      </div>
    </>
  );
}

export default Premiere;
