const projects = [
  {
    img: "./assets/website.png",
    alt: "Project 1",
    title: "Organic Ecommerce Website",
    tech: "Java | HTML | CSS | JSP | JDBC | Servlet | Oracle ",
    link: "",
  },
  {
    img: "./assets/python.webp",
    alt: "Project 2",
    title: "Driver Drowsiness Detection System",
    tech: "Python | OpenCV | MediaPipe ",
    link: "",
  },
  {
    img: "./assets/CQI.png",
    alt: "Project 3",
    title: "Analyzing Sales Insights ",
    tech: "Power BI | Excel ",
    link: "",
  },
  {
    img: "./assets/portfolio.png",
    alt: "Project 4",
    title: "My Porfolio",
    tech: "HTML | CSS | React | Bootstrap",
    link: "",
  },
];

export default function Projects(){
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
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
    </section>
  )
}

