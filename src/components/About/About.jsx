import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About Me</h2>

        <p>
          I am an MCA student specializing in Full Stack Development and Data
          Analytics. I enjoy building responsive applications, solving real
          business problems, and delivering reliable solutions with modern
          technologies.
        </p>

        <div className="about-cards">
          <div className="card">
            <h3>🎓 Education</h3>
            <p>MCA candidate at BMS Institute of Technology & Management.</p>
          </div>

          <div className="card">
            <h3>💻 Development</h3>
            <p>React, Java, Python, SQL, HTML, CSS, Django, and end-to-end delivery.</p>
          </div>

          <div className="card">
            <h3>🚀 Focus</h3>
            <p>Building polished digital products and analytics tools that drive value.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;