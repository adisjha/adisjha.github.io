import React from "react";
import "../assets/styles/SectionTemplate.scss";

function ResearchSection({ mode }: { mode: "light" | "dark" }) {
  return <section id="research" className={`section-template section-template--${mode}`}>
    <div className="section-template__inner">
      <header className="section-template__header"><h2>Research</h2></header>
      <div className="section-template__body">
        <details className="research-interests">
          <summary>Research interests</summary>
          <p>I study nonlinear dynamics, reduced-order modeling, fluid mechanics, and plasma physics. I am interested in understanding how complex systems transfer energy and building efficient models that predict their behavior.</p>
          <p>My current work examines energy-transfer pathways in time-periodic fluid flows using the harmonic resolvent, and data-driven reduced-order models of capacitively coupled plasmas using POD and optimized Petrov–Galerkin projections.</p>
        </details>
        <section id="publications" className="research-listings">
          <h3>Preprints, Publications &amp; Presentations</h3>
          <h4>Manuscripts</h4>
          <ol><li>Jha, A. S. &amp; Padovan, A., “The harmonic resolvent operator can expose the fundamental energy-transfer pathways in fluid flows.” <em>Journal of Fluid Mechanics</em> (2026). <strong>Under revision.</strong> <a href="/documents/harmonic-resolvent-energy-transfer.pdf">Read paper (PDF)</a></li></ol>
          <h4>Presentations</h4>
          <ol start={2}><li>Jha, A. S. &amp; Padovan, A., “Insights into energy-transfer mechanisms in fluid flows via the harmonic resolvent.” <em>APS Division of Fluid Dynamics</em> (2026). <strong>Accepted.</strong></li></ol>
        </section>
      </div>
    </div>
  </section>;
}
export default ResearchSection;
