import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import Navbar from '../navbar/Navbar'
import './summary.css'

const Summary = (props) => {
    // const location = useLocation();
    // const myData = location.state.data;
    // console.log(location.state.data)

    // const [data, setData] = useState([]);
    // // console.log(data);
    // console.log(props.dataStore)

    // const handleBook = (e) => {
    //     e.preventDefault();
    //     setData([props.dataStore])
    //     console.log(data)
    // }
    return (
        <>
        <Navbar />
        <div className='mainSum'>
            <Card style={{ width: '18rem' }} className='cardHead'>
                <Card.Img variant="top"
                    src="https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg"
                    className='cardImage'
                />
                <Card.Body>
                    <Card.Title>64</Card.Title>
                    <Card.Text>
                        losses and struggles of two families from vastly different worlds
                    </Card.Text>
                    <Button variant="info"><Link to='/summary' className='text-white' >Book Now</Link></Button>
                </Card.Body>
            </Card>
        </div>
        </>
    )
}

export default Summary
