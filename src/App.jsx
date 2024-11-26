import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from '../Navigation'
import Home from './pages/Home'
import Code from './pages/Code'
import About from './pages/About'

function App() {
  return (
    <Router basename="/Portfolio"> 
      <Navigation />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Code" element={<Code />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
