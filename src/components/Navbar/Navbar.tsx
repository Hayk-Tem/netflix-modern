import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">Popular</Link>
          </li>
          <li>
            <Link to="">Now Playing</Link>
          </li>
          <li>
            <Link to="">Uncoming</Link>
          </li>
          <li>
            <Link to="">Top Rated</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
