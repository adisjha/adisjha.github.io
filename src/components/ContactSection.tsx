import React from "react";
import "../assets/styles/SectionTemplate.scss";

interface ContactSectionProps {
  mode: "light" | "dark";
}

function ContactSection({ mode }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className={`section-template section-template--${mode}`}
    >
      <div className="section-template__inner">
        <header className="section-template__header">
          <h2>Contact</h2>
        </header>
        <div className="section-template__body">
          <p>
            I exist in many places on the internet. The following is a short snippet of places where you can contact or see me.
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:adijha2@illinois.edu">
                adijha2@illinois.edu
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/adi-jha-60231022a/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/adi-jha-60231022a/
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/endqrmqn"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/endqrmqn
              </a>
            </li>
            <li>
              Google Scholar:{" "}
              <a
                href="https://scholar.google.com/citations?user=2EUDXLwAAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
              >
                https://scholar.google.com/citations?user=2EUDXLwAAAAJ&hl=en
              </a>
            </li>
          </ul>
          <p>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
