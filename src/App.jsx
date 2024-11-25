import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from '../Navigation'
import Home from '../src/pages/Home'
import Code from '../src/pages/Code'
import About from '../src/pages/About'
import Footer from '../Footer'

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />}/>
        <Route path="/Code" element={<Code />} /> 
        <Route path="/About" element={<About />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
