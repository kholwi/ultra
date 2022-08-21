import React from 'react'
import Footer from '../components/Menu/Footer';
import Navbar from '../components/Menu/Navbar';
import About from '../components/Menu/About';
import Hero from '../components/Hero';

function Home() {
  return (
      <div className="">
          <Navbar />
          <Hero />
          <About />
          <Footer />
      </div>
  )
}

export default Home
