import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {

  return (
    <>
        <nav className="navbar">
            <div className="navbar-left">
            </div>
            <div className="navbar-right">
                <ul className="nav-links">
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Code">Code</Link></li>
                    <li><Link to="/About">About</Link></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navigation;
