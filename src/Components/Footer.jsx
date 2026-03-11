import "./Footer.css"

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}

        <div className="footer-brand">

          <h3 className="footer-logo">
            Karo <span>Pitch</span>
          </h3>

          <p className="footer-desc">
            A platform connecting early-stage founders with investors
            across India. Built to empower Bharat's startup ecosystem.
          </p>

          <div className="footer-social">

            <a href="#">🌐</a>
            <a href="#">📸</a>
            <a href="#">💼</a>

          </div>

        </div>


        {/* Platform */}

        <div>

          <h3 className="footer-title">Platform</h3>

          <div className="footer-links">

            <a href="#about">About</a>
            <a href="#startups">Startups</a>
            <a href="#investors">Investors</a>
            <a href="#home">Apply to Pitch</a>

          </div>

        </div>


        {/* Company */}

        <div>

          <h3 className="footer-title">KaroStartup</h3>

       <div className="footer-links">

  <a href="http://karostartup.com" target="_blank" rel="noopener noreferrer">Official Website</a>

  <a href="https://www.instagram.com/karopitch/" target="_blank" rel="noopener noreferrer">Instagram</a>

  <a href="https://www.linkedin.com/company/karo-startup/" target="_blank" rel="noopener noreferrer">LinkedIn</a>

  <a href="https://x.com/karo_startup" target="_blank" rel="noopener noreferrer">X</a>

  <a href="https://www.facebook.com/karostartup" target="_blank" rel="noopener noreferrer">FaceBook</a>

  <a href="https://www.youtube.com/@karostartup/videos" target="_blank" rel="noopener noreferrer">Youtube</a>

  <a href="#">Contact</a>

</div>

        </div>

      </div>


      <div className="footer-divider"></div>

      <div className="footer-bottom">

        © 2026 Karo Pitch • Built for Bharat Founders 🇮🇳

      </div>

    </footer>
  )
}

export default Footer