import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h2>Contact</h2>

      <p className="contact-intro">
        Ready to collaborate on a product or analytics initiative? Reach out via
        email or LinkedIn.
      </p>

      <div className="contact-card">
        <div className="contact-field">
          <span>Email</span>
          <p>vidyakumbar02@gmail.com</p>
        </div>

        <div className="contact-field">
          <span>Phone</span>
          <p>+91 8095083358</p>
        </div>

        <div className="contact-field">
          <span>Location</span>
          <p>Bengaluru, Karnataka</p>
        </div>

        <div className="contact-field">
          <span>LinkedIn</span>
          <p>
            <a
              href="https://www.linkedin.com/in/vidya-kumbar-557b47263/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/vidya-kumbar-557b47263
            </a>
          </p>
        </div>
      </div>

    </section>
  );
}

export default Contact;