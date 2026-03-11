import './HowItWorks.css'

function HowItWorks() {

  const steps = [
    {
      title: "Apply with Pitch Deck",
      text: "Submit your startup details and pitch deck through our application form.",
      icon: "📄"
    },
    {
      title: "Get Shortlisted",
      text: "Our team reviews applications and selects promising startups.",
      icon: "✅"
    },
    {
      title: "Pitch to Investors",
      text: "Shortlisted founders pitch their startups directly to investors.",
      icon: "🎤"
    },
    {
      title: "Raise Funding",
      text: "Connect with investors and secure funding to scale your startup.",
      icon: "💰"
    }
  ]

  return (
    <section className="how">

      <div className="how-container">

        <h2 className="how-title">
          How <span>Karo Pitch</span> Works
        </h2>

        <p className="how-subtext">
          A simple 4-step process to help founders raise funding.
        </p>

        <div className="how-steps">

          {steps.map((step, index) => (
            <div className="step-card" key={index}>

              <div className="step-top">

                <div className="step-number">
                  {index + 1}
                </div>

                <div className="step-icon">
                  {step.icon}
                </div>

              </div>

              <h3 className="step-title">
                {step.title}
              </h3>

              <p className="step-text">
                {step.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default HowItWorks