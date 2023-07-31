import { Route, Routes } from 'react-router-dom'
import Landing from './Views/Landing/Landing'
import Home from './Views/Home/Home'
import Detail_Card from './Components/Detail_Card/Detail_Card'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/NavBar/Navbar'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detailCard/:id" element={<Detail_Card />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
