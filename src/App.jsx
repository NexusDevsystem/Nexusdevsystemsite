// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import ForWhom from './components/ForWhom'
import Differences from './components/Differences'
import Screenshots from './components/Screenshots'
import Roadmap from './components/Roadmap'
import Download from './components/Download'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'

export default function App() {
  return (
    <div className="font-sans antialiased bg-white text-gray-900 overflow-x-hidden">
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <ScrollProgress />
              <CustomCursor />
              <Navbar home={true} />
              <Hero />
              <About />
              <Features />
              <HowItWorks />
              <ForWhom />
              <Differences />
              <Screenshots />
              <Roadmap />
              <Download />
              <Footer />
            </>
          } 
        />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </div>
  )
}
