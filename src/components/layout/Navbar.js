import React from 'react'
import { Link } from 'react-router-dom'
import "./Layout.css"

const Navbar = () => {
  return (
    <>
    <div className='navbar-flex'>
        <ul className='nav-link'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="student">Student</Link></li>
            <li><Link to="contact">Contact</Link></li>
            <li><Link to="about">About</Link></li>
        </ul>
    </div>
    </>
  )
}

export default Navbar