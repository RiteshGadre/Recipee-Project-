import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from '../pages/Home'

const Header = () => {
  return (
    <div className='py-10 px-8 flex justify-center gap-10 font-thin tracking-wide'>
        <NavLink className={(e) => e.isActive ? 'text-red-400 font-medium' : '' } to="/">Home</NavLink>
        <NavLink className={(e) => e.isActive ? 'text-red-400 font-medium' : '' } to="/recipee">Recipees</NavLink>
        <NavLink className={(e) => e.isActive ? 'text-red-400 font-medium' : '' } to="/about">About</NavLink>
        <NavLink className={(e) => e.isActive ? 'text-red-400 font-medium' : '' } to="/create-recipee">Create Recipee</NavLink>
    </div>
  )
}

export default Header