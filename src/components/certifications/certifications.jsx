import { useEffect, useState } from "react";
import "./certifications.css";
import cloudCert from "./Cloud Computing in AWS.png";
import dbmsCert from "./DBMS with Oracle PL SQL.png";
import fullStackCert from "./Full Stack Developer Internship .png";
import mlCert from "./Machine Learning Internship.png";

const certificates = [
  {
    src: mlCert,
    title: "Machine Learning Internship",
    alt: "Machine Learning Internship Certificate",
  },
  {
    src: cloudCert,
    title: "Cloud Computing in AWS",
    alt: "Cloud Computing in AWS Certificate",
  },
  {
    src: dbmsCert,
    title: "DBMS with Oracle PL/SQL",
    alt: "DBMS with Oracle PL/SQL Certificate",
  },
  {
    src: fullStackCert,
    title: "Full Stack Developer Internship",
    alt: "Full Stack Developer Internship Certificate",
  },
];

function Certifications() {
  const [activeCert, setActiveCert] = useState(null);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setActiveCert(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="certifications" id="certifications">
      <div className="certifications-container">

        <h2>Certifications</h2>

        <div className="certificate-list">
          {certificates.map((cert) => (
            <article key={cert.title} className="certificate-card">
              <button
                type="button"
                className="certificate-button"
                onClick={() => setActiveCert(cert)}
                title={`Open ${cert.title} certificate`}
              >
                <img src={cert.src} alt={cert.alt} />
              </button>
              <div className="certificate-info">
                <h3>{cert.title}</h3>
              </div>
            </article>
          ))}
        </div>

        {activeCert && (
          <div className="certificate-preview">
            <button
              type="button"
              className="certificate-preview-back"
              onClick={() => setActiveCert(null)}
            >
              ← Back to certificates
            </button>

            <div className="certificate-preview-content">
              <img src={activeCert.src} alt={activeCert.alt} />
              <h3>{activeCert.title}</h3>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Certifications;