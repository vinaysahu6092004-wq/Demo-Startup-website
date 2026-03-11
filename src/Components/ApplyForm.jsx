import "./ApplyForm.css"

function ApplyForm({ closeForm }) {

  return (

    <div id='/form' className="form-overlay" onClick={closeForm}>

      <div
      className="form-container"
      onClick={(e)=>e.stopPropagation()}
      >

        <h2>Apply to Pitch</h2>

        <p className="form-subtext">
          Submit your startup details to pitch in front of investors
        </p>

        <form>

          <div className="form-group">
            <label>Founder Name</label>
            <input type="text" placeholder="Enter your name"/>
          </div>

          <div className="form-group">
            <label>Startup Name</label>
            <input type="text" placeholder="Startup name"/>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="your@email.com"/>
          </div>

          <div className="form-group">
            <label>Startup Category</label>

            <select>

              <option>D2C Brand</option>
              <option>SaaS Startup</option>
              <option>Consumer Startup</option>
              <option>MSME</option>
              <option>Manufacturing</option>

            </select>

          </div>

          <div className="form-group">
            <label>Funding Required</label>
            <input type="text" placeholder="Example: ₹50 Lakhs"/>
          </div>

          <div className="form-group">
            <label>Startup Description</label>

            <textarea
            placeholder="Describe your startup idea"
            />

          </div>

          <div className="form-buttons">

            <button className="submit-btn">
              Submit Application
            </button>

            <button
            type="button"
            className="cancel-btn"
            onClick={closeForm}
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>

  )
}

export default ApplyForm