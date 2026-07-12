import "./Hero.css";
import profile from "../../assets/Profile.jpeg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <div className="hero-text">

          <p className="greeting">Hello,</p>

          <h1>Vidya B. Kumbar</h1>

          <h2>Full Stack Developer | Data Analyst</h2>

          <p className="description">
            I build polished web products and analytics workflows that help teams
            make smarter decisions and deliver measurable business outcomes.
          </p>

          <div className="hero-buttons">

            <a
              href="/resume.pdf"
              className="btn primary"
              download
            >
              Download CV
            </a>

            <a
              href="#projects"
              className="btn secondary"
            >
              View Work
            </a>

          </div>

        </div>

        <div className="hero-image">
          <img src={profile} alt="Vidya B. Kumbar" />
        </div>

      </div>
    </section>
  );
}

export default Hero;