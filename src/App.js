import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import Summary from './components/summary/Summary'
import { useEffect, useState } from "react"
import {movieDetails} from './components/home/Home'
// import './app.css'

function App() {
  const [dataStore, setDataStore] = useState([])
  const movieDetails = (data) => {
    const arr = [...data];
    // console.log(arr);
    setDataStore([arr])
    console.log(dataStore)
  }

  return (
    <BrowserRouter>
    <Routes>
    {/* <Route path='/' element={<Home movieDetails={movieDetails} />} /> */}
    <Route path='/' element={<Home  movieDetails={movieDetails}/>} />
    <Route path='/summary' element={<Summary value={dataStore}/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
