import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Features from './components/Features'
import ProblemSection from './components/ProblemSection'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <ProblemSection />
      <Footer />
    </div>
  )
}

export default App