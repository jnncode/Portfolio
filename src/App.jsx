import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './Navigation'
import Home from './screens/Home'
import Code from './screens/Code'
import About from './screens/About'
import Footer from './Footer'

function App() {
  return (
    <Router> 
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Code" element={<Code />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;