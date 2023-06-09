import React from 'react';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Intro />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}

export default App