import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Cards from './components/CardsSection.jsx'
import Newsletter from './components/Newsletter.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <Cards />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App