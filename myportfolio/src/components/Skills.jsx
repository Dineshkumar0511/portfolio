const skills = [
  { name: "Java", icon: "./assets/java.png" }, 
  { name: "Python", icon: "./assets/python.png" },
  { name: "HTML", icon: "./assets/html.png" },
  { name: "CSS", icon: "./assets/css.png" },
  { name: "Bootstrap", icon: "./assets/bootstrap.png" },
  { name: "JavaScript", icon: "./assets/javascript.png" },
  { name: "Spring Boot", icon: "./assets/springboot.png" },
  { name: "React", icon: "./assets/react.png" },
  { name: "MySQL", icon: "./assets/mysql.png" },
  { name: "PowerBI", icon: "./assets/powerbi.png" },
  { name: "Postman", icon: "./assets/postman.png" },
  { name: "GitHub", icon: "./assets/github.png" }
];

export default function Skills(){
  return (
    <>
        <section id="skills" className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-slider">
            <div className="skills-track">
            {[...skills, ...skills].map((skill, index) => (
                <div className="skill-card" key={index}>
                <img
                    src={skill.icon}
                    className="skill-icon"
                    alt={skill.name}
                />
                <h4>{skill.name}</h4>
                </div>
            ))}
            </div>
        </div>
        </section>
    </>
  )
}
