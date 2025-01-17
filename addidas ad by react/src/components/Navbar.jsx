import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <nav>
            <div className="Logo">
                <img src="/Logo.png" alt="Logo" />
            </div>
        <ul>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      <div className="btn">
        <button>Login</button>
      </div>



        </nav>
    </div>
  )
}

export default Navbar
