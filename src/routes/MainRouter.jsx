import React from 'react'
import { BrowserRouter, Routes, Route    } from 'react-router-dom'
import Home from '../pages/Home'
import Recipee from '../pages/Recipee'
import About from '../pages/About'
import Create from '../pages/Create'

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