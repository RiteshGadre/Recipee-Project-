import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'

const Header = () => {
  return (
    <div className='py-10 px-8 flex justify-center gap-10 font-thin tracking-wide'>
        <NavLink className={(e) => e.isActive ? 'text-red-400' : '' } to="/">Home</NavLink>
        <NavLink className={(e) => e.isActive ? 'text-red-400' : '' } to="/recipee">Recipees</NavLink>
        <NavLink className={(e) => e.isActive ? 'text-red-400' : '' } to="/about">About</NavLink>
        <NavLink className={(e) => e.isActive ? 'text-red-400' : '' } to="/create-recipee">Create Recipee</NavLink>
    </div>
  )
}

export default Header