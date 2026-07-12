import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div
        className="logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Vidya<span>.</span>
      </div>

      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Work</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#contact">Connect</a></li>
      </ul>

    </nav>
  );
}

export default Navbar;