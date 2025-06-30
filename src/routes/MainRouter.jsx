import React from 'react'
import { BrowserRouter, Routes, Route    } from 'react-router-dom'
import Home from '../components/Home'
import Recipee from '../components/Recipee'
import About from '../components/About'
import Create from '../components/Create'

const MainRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipee" element={<Recipee />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-recipee" element={<Create />} />
    </Routes>
  )
}

export default MainRouter