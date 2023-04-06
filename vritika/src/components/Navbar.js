import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import logo from "../images/logo.png"

const Navbar = () => {
    return (
        <div className='header'>
            <Link to={"/"}>
                <img src={logo} alt='logo' width="200px" />
            </Link>

            <ul className='nav-menu'>

                <Link to="/">
                <button className='btn'>Home</button>
                </Link>
            
                <Link to="/product">
                <button className='btn'>Product</button>
                </Link>
                
                <Link to="/about">
                <button className='btn'>About</button>
                </Link>
                
                <Link to="/contact">
                <button className='btn'>Contact</button>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar