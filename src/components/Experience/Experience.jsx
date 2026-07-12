import "./Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">

        <h2>Experience</h2>
        <p>Internships and project experience delivering production-ready solutions.</p>

        <div className="timeline">

          <div className="timeline-item">
            <div className="circle"></div>

            <div className="content">
              <span>Mar 2026 – Apr 2026</span>

              <h3>Full Stack Developer Intern</h3>

              <h4>CodeMyFYP – IT & Software Solutions</h4>

              <ul>
                <li>Built a responsive E-Commerce application using React.js.</li>
                <li>Integrated frontend with backend services.</li>
                <li>Developed product browsing, filtering and cart features.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="circle"></div>

            <div className="content">
              <span>Jan 2024 – Feb 2025</span>

              <h3>Machine Learning Intern</h3>

              <h4>Farmercoin Smart Robotic Solutions Pvt. Ltd.</h4>

              <ul>
                <li>Developed ML pipelines using Python and Scikit-learn.</li>
                <li>Improved model accuracy through hyperparameter tuning.</li>
                <li>Worked with Pandas, Git and data preprocessing.</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;