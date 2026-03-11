import "./CTA.css"
import { useState } from "react"
import ApplyForm from "./ApplyForm"

function CTA() {

  const [showForm, setShowForm] = useState(false)

  return (

    <section id="apply" className="cta">

      {/* Aura Background */}
      <div className="cta-aura"></div>

      <div className="cta-container">

        <h2 className="cta-title">
          Ready to <span>Pitch Your Startup?</span>
        </h2>

        <p className="cta-text">
          Join Karo Pitch and present your startup to investors
          looking for the next big opportunity.
        </p>

        <div className="cta-buttons">

          <button
            className="cta-primary"
            onClick={() => setShowForm(true)}
          >
            Apply Now
          </button>

          <button className="cta-secondary">
            Partner With Us
          </button>

        </div>

      </div>

      {/* FORM POPUP */}
      {showForm && (
        <ApplyForm closeForm={() => setShowForm(false)} />
      )}

    </section>

  )
}

export default CTA