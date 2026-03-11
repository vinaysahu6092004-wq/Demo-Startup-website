import "./FeaturedStartups.css"

function FeaturedStartups() {

  const startups = [
    {
      name: "FarmFresh",
      category: "D2C Brand",
      desc: "A direct-to-consumer platform delivering organic farm products.",
      icon:"🌱"
    },
    {
      name: "TechBridge",
      category: "SaaS",
      desc: "A SaaS platform helping MSMEs manage business operations.",
      icon:"💻"
    },
    {
      name: "BuildMate",
      category: "Manufacturing",
      desc: "Innovative building materials for modern infrastructure.",
      icon:"🏗️"
    },
    {
      name: "HealthKart AI",
      category: "HealthTech",
      desc: "AI-powered health recommendations for personalized wellness.",
      icon:"🧠"
    }
  ]

  return (
    <section id="startups" className="startups">

      <div className="startups-container">

        <h2 className="startups-title">
          Featured <span>Startups</span>
        </h2>

        <p className="startups-subtext">
          Discover innovative startups pitching on Karo Pitch.
        </p>

        <div className="startups-grid">

          {startups.map((startup,index)=>(
            <div className="startup-card" key={index}>

              <div className="startup-icon">
                {startup.icon}
              </div>

              <h3 className="startup-name">
                {startup.name}
              </h3>

              <span className="startup-category">
                {startup.category}
              </span>

              <p className="startup-desc">
                {startup.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default FeaturedStartups