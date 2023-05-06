import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import './home.css'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'

const Home = () => {
  const [store, setStore] = useState([])

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(res => res.json())
      .then(data => setStore([data]))
  }, [])
  // console.log(store)

  return (
    <div className="home">
      <Navbar />
      {
        store.map((ele, ind) => {
          const { show, score } = ele;
          return (
            <div key={ind}>
              <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" 
                src="https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg"
                className='cardImage'
                />
                <Card.Body>
                  <Card.Title>{ele.score}</Card.Title>
                  <Card.Text>
                    losses and struggles of two families from vastly different worlds
                  </Card.Text>
                  <Button variant="success"><Link to='/summary' className='text-white'>review</Link></Button>
                </Card.Body>
              </Card>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home
