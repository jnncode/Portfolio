import logo from './src/logo.png'
import { Link } from 'react-router-dom'

function Navigation() {

  return (
    <>
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <img className="logo" src={logo} alt="Logo" width={75} height={75} />
                </Link>
            </div>
            <div className="navbar-right">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Code">Code</Link></li>
                    <li><Link to="/About">About</Link></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navigation
