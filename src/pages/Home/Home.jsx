import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import Navbar from '../../components/Navbar/Navbar'
import Carousel from '../../components/Carousel/Carousel'
import About from '../../components/About/About'
import Feature from '../../components/Feature/Feature'

function Home() {
  return (
    <div>
        <Topbar />
        <Navbar />
        <Carousel />
        <About />
        <Feature />
    </div>
  )
}

export default Home