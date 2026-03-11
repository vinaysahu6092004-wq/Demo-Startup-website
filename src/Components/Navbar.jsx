import './Navbar.css'
import { useState } from "react"
import ApplyForm from "./ApplyForm"

function Navbar() {

  const [showForm,setShowForm] = useState(false)
  const [menuOpen,setMenuOpen] = useState(false)

  return (
    <>

    <nav className="navbar">

      <div className="nav-container">

        <a href="#home" className="logo">
          Karo Pitch
        </a>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#startups">Startups</a>
          <a href="#investors">Investors</a>

          <button
          className="apply-btn"
          onClick={()=>setShowForm(true)}
          >
            Apply
          </button>

        </div>

        <div
        className="menu-toggle"
        onClick={()=>setMenuOpen(true)}
        >
          ☰
        </div>

      </div>

    </nav>

    {/* overlay for mobile menu */}
    {menuOpen && (
      <div
      className="menu-overlay"
      onClick={()=>setMenuOpen(false)}
      />
    )}

    {showForm && <ApplyForm closeForm={()=>setShowForm(false)}/>}

    </>
  )
}

export default Navbar