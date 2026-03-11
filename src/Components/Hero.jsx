import './Hero.css'
import { useState } from 'react'
import ApplyForm from './ApplyForm'

function Hero() {

  const [showForm,setShowForm] = useState(false)

  return (

    <section id="home" className="hero">

      <div className="hero-bg"></div>

      <div className="hero-container">

        <h1 className="hero-title">
          Pitch Your Startup to
          <span> India’s Top Investors</span>
        </h1>

        <p className="hero-subtext">
          Karo Pitch is a platform where founders across India
          present their startups to investors and raise funding.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-btn"
            onClick={()=>setShowForm(true)}
          >
            Apply to Pitch
          </button>

          <a href="#startups">
            <button className="secondary-btn">
              Explore Startups
            </button>
          </a>

        </div>

      </div>

      {showForm && <ApplyForm closeForm={()=>setShowForm(false)}/>}

    </section>

  )
}

export default Hero