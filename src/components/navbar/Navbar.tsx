import React from "react"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="navbar bg-dark navbar-expand-lg navbar-dark">
      <Link href="/">
        <a className="navbar-brand">Inmobi 3.0</a>
      </Link>
      <div className="navbar-nav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="customers">
              <a className="nav-link">Clientes</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="collections">
              <a className="nav-link">Cobranzas</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
