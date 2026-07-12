import "./Education.css";

function Education() {
  return (
    <section className="education" id="education">
      <div className="education-container">

        <h2>Education</h2>
        <p>My academic journey.</p>

        <div className="education-grid">

          <div className="edu-card">
            <h3>MCA</h3>
            <h4>BMS Institute of Technology & Management</h4>
            <p>2025 - 2027</p>
            <span>CGPA: 7.90</span>
          </div>

          <div className="edu-card">
            <h3>BCA</h3>
            <h4>Global College of Management, Hubli</h4>
            <p>2022 - 2025</p>
            <span>CGPA: 8.85</span>
          </div>

          <div className="edu-card">
            <h3>PUC</h3>
            <h4>JG PU College</h4>
            <p>2020 - 2022</p>
            <span>75%</span>
          </div>

          <div className="edu-card">
            <h3>SSLC</h3>
            <h4>Navanagar Rotary School</h4>
            <p>Completed</p>
            <span>81.4%</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;