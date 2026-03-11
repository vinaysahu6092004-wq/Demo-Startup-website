import './About.css'

function About() {
  return (
    <section id="about" className="about">

      <div className="about-container">

        <h2 className="about-title">
          What is <span>Karo Pitch?</span>
        </h2>

        <p className="about-text">
          Karo Pitch is a platform designed to help early-stage founders 
          from across India connect with investors, gain visibility, 
          and raise funding to grow their businesses.
        </p>

        <div className="about-cards">

          <div className="about-card">

            <div className="card-icon">🚀</div>

            <h3>Founder Visibility</h3>

            <p>
              Helping promising founders showcase their ideas to investors.
            </p>

          </div>

          <div className="about-card">

            <div className="card-icon">💰</div>

            <h3>Investor Access</h3>

            <p>
              Connecting startups with angel investors and venture funds.
            </p>

          </div>

          <div className="about-card">

            <div className="card-icon">📈</div>

            <h3>Startup Growth</h3>

            <p>
              Providing mentorship and funding opportunities.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About