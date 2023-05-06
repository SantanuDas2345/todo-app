import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import Summary from './components/summary/Summary'
// import './app.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/summary' element={<Summary />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
