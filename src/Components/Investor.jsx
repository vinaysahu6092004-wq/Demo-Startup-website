import "./Investors.css"

function Investors() {

  const investors = [
    {
      name: "Angel Investors",
      type: "Early-stage startup investors",
      icon: "👨‍💼"
    },
    {
      name: "Venture Capital Firms",
      type: "Funding high-growth startups",
      icon: "💼"
    },
    {
      name: "Startup Accelerators",
      type: "Mentorship and investment programs",
      icon: "🚀"
    },
    {
      name: "Early Stage Funds",
      type: "Backing innovative founders",
      icon: "💰"
    }
  ]

  return (
    <section id="investors" className="investors">

      <div className="investors-container">

        <h2 className="investors-title">
          Meet <span>Investors</span> Looking for the Next Big Startup
        </h2>

        <p className="investors-subtext">
          Connect with investors actively seeking innovative startups across India.
        </p>

        <div className="investors-grid">

          {investors.map((investor,index)=>(
            <div className="investor-card" key={index}>

              <div className="investor-logo">
                {investor.icon}
              </div>

              <h3 className="investor-name">
                {investor.name}
              </h3>

              <p className="investor-type">
                {investor.type}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Investors