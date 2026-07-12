import "./projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <h2>Projects</h2>

        <p>
          Selected work demonstrating full-stack development, user-focused
          design, and data-driven application logic.
        </p>

        <div className="project-grid">

          <div className="project-card">
            <h3>🎓 Academy Pro</h3>

            <p>
              A Student Management System built using Django with
              authentication, attendance tracking and academic management.
            </p>

            <div className="tech-stack">
              <span>Django</span>
              <span>SQLite</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>

          </div>

          <div className="project-card">
            <h3>🛒 E-Commerce Website</h3>

            <p>
              Responsive e-commerce application featuring product browsing,
              filtering, shopping cart and backend integration.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>CSS</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;