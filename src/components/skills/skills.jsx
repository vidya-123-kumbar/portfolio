import "./skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaLinux
} from "react-icons/fa";

import {
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiDjango
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React.js", icon: <FaReact /> },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Django", icon: <SiDjango /> },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "C", icon: <>💻</> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "SQL", icon: <>🗄️</> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Power BI", icon: <>📊</> },
      { name: "Excel", icon: <>📈</> },
      { name: "Tableau", icon: <>📉</> },
      { name: "Linux", icon: <FaLinux /> },
    ],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <h2>Technical Skills</h2>

        <p className="skills-description">
          Technologies and tools I use to build scalable applications,
          data workflows, and polished user experiences.
        </p>

        {skillCategories.map((category, index) => (
          <div className="skill-category" key={index}>

            <h3>{category.title}</h3>

            <div className="skills-grid">
              {category.skills.map((skill, i) => (
                <div className="skill-card" key={i}>

                  <div className="skill-icon">
                    {skill.icon}
                  </div>

                  <h4>{skill.name}</h4>

                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Skills;