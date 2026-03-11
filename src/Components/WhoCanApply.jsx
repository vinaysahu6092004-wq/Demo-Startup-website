import "./WhoCanApply.css"

function WhoCanApply() {

  const categories = [
    {name:"D2C Brands", icon:"🛍️"},
    {name:"Consumer Startups", icon:"🚀"},
    {name:"MSMEs", icon:"🏭"},
    {name:"SaaS Startups", icon:"💻"},
    {name:"Manufacturing Businesses", icon:"⚙️"},
    {name:"Bharat-focused Startups", icon:"🇮🇳"}
  ]

  return (
    <section className="apply">

      <div className="apply-container">

        <h2 className="apply-title">
          Who <span>Can Apply</span>
        </h2>

        <p className="apply-subtext">
          We welcome founders from diverse industries who are building innovative businesses.
        </p>

        <div className="apply-grid">

          {categories.map((category,index)=>(
            <div className="apply-card" key={index}>

              <div className="apply-icon">
                {category.icon}
              </div>

              <h3 className="apply-name">
                {category.name}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default WhoCanApply