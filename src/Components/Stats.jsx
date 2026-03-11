import "./Stats.css"
import CountUp from "react-countup"

function Stats() {

  const stats = [
    {number:150, label:"Startups Discovered", icon:"🚀"},
    {number:40, label:"Active Investors", icon:"💼"},
    {number:5, label:"Funding Raised (Cr+)", icon:"💰"},
    {number:20, label:"Cities Reached", icon:"🌍"}
  ]

  return (

    <section className="stats">

      <div className="stats-bg"></div>

      <div className="stats-container">

        <h2 className="stats-title">
          Empowering <span>Founders Across India</span>
        </h2>

        <div className="stats-grid">

          {stats.map((stat,index)=>(

            <div className="stat-card" key={index}>

              <div className="stat-icon">
                {stat.icon}
              </div>

              <div className="stat-number">
                <CountUp end={stat.number} duration={2}/>+
              </div>

              <div className="stat-label">
                {stat.label}
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Stats
