import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import Project from './components/Project';
// import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Intro />;
      case 'projects':
        return <Project />;
      case 'contact':
        return <Contact />;
      default:
        return <Intro />;
    }
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Router>
        <div className="app">
          <Navigation onNavigation={handleNavigation} />
          {renderPage()}
          <Footer />
        </div>
        
      </Router>
    </div>
  );
}

export default App;
