import React from 'react'
import Navbar from '../components/Navbar'
import banner from "../images/banner.jpg"
import "./Home.css"

const Home = () => {
  return (
    <>
    <Navbar />
    <img className='banner' src={banner} alt='banner' />
    </>
  )
}

export default Home