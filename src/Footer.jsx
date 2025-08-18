import React from 'react'
import './App.css'

const today = new Date();

function Footer() {
  return (
    <>
    <footer className="footer">
        <p>&copy; {today.getFullYear()} J Nguyen. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Footer;
