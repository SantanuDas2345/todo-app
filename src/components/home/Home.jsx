import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import './home.css'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'

const Home = (props) => {
  const [store, setStore] = useState([])
  const [object, setObject] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await fetch("https://api.tvmaze.com/search/shows?q=all");

      const data = await res.json();

      setStore(data);
      // console.log(store)
    })();
  }, []);

  const handleReview = (e) => {
    e.preventDefault();
  }

  return (
    <div className=" home">
      <div className='navdiv'>
      <Navbar />
      </div>
      <div class='cardDiv'>
      {
        store.map((ele, ind) => {
          const { show, score } = ele;
          // console.log(ele);
          return (
            <div key={ind} className='items'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"
                  src="https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg"
                  className='cardImage'
                />
                <Card.Body>
                  <Card.Title>{show.language}</Card.Title>
                  <Card.Text>
                    {show.genres}
                  </Card.Text>
                  <Button variant="success"><Link to='/summary' className='text-white' onClick={handleReview}>review</Link></Button>
                </Card.Body>
              </Card>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Home
