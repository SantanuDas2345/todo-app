import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./home.css";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Home = (props) => {
  const [store, setStore] = useState([]);
  const [object, setObject] = useState([]);
  const [src, setSrc] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await fetch("https://api.tvmaze.com/search/shows?q=all");

      const data = await res.json();

      setStore(data);
    })();
  }, []);

  const handleReview = () => {
    // e.preventDefault();
    props.movieDetails(store)
    // console.log(store)
  };

  useEffect(() => {
    let data = store.flatMap((itm) => itm.show);

    let Image = data.flatMap((itm) => itm.image);

    let Img1 = Image.map((itm) => itm);

    let arr = [...Img1];

    let imgSrc = arr.map((itm, ind) => {
      if (itm !== null) {
        return itm.medium;
      }
    });

    setSrc(imgSrc);
  });

  return (
    <div className=" home">
      <div className="navdiv">
        <Navbar />
      </div>
      <div class="cardDiv">
        {store.map((ele, ind) => {
          const { show, score } = ele;
          // console.log(ele);
          return (
            <div key={ind} className="items">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={src[ind]}
                  className="cardImage"
                />
                <Card.Body>
                  <Card.Title>{show.language}</Card.Title>
                  <Card.Text>{show.genres}</Card.Text>
                  <Button variant="success">
                    <Link to='/summary'
                      // to={{ pathname: '/summary', state: { data: 'hello' } }}
                      className="text-white"
                      onClick={handleReview}
                    >
                      review
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;