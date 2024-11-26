import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import Code from './Code'
import About from './About'

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
