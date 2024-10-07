import logo from './src/logo.png'

function Navigation() {

  return (
    <>
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/">
                    <img className="logo" src={logo} alt="Logo" width={75} height={75} />
                </a>
            </div>
            <div className="navbar-right">
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Code</a></li>
                    <li><a href="/">Film</a></li>
                    <li><a href="/">About</a></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navigation
