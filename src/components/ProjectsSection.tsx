import React from "react";
import "../assets/styles/SectionTemplate.scss";

interface ProjectsSectionProps {
  mode: "light" | "dark";
}

function ProjectsSection({ mode }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className={`section-template section-template--${mode}`}
    >
      <div className="section-template__inner">
        <header className="section-template__header">
          <h2>Projects</h2>
        </header>
        <div className="section-template__body">
          <p>
            Will be updated.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;

