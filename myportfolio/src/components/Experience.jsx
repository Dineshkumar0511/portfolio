const projects = [
  {
    img: "./assets/intern.png",
    alt: "Intern",
    title: "Internship-SSSIT Website",
    tech: "Spring Boot | React",
    link: "",
  }
];

export default function Experience(){
  return (
    <section id="experience" className="projects-section">
      <div className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.alt} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.tech}</p>
              {/* <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a> */}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}