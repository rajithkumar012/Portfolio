import "../styles.css";

const projects = [
  {
    name: "MediScan: Teleradiology Management System",
    description: "Developed a remote medical imaging platform using Django & React.",
  },
  {
    name: "DataStream for Sales",
    description: "Automated ETL for sales data management using MySQL & AWS.",
  },
  {
    name: "AutoTrack: Vehicle Records Management",
    description: "Built a vehicle record management system using Django & React.",
  },
  {
    name: "BroadBot: AI-powered Chatbot",
    description: "Created an interactive chatbot with Flask and NLP for automated responses.",
  },
];

const Projects = () => {
  return (
    <div className="main-content">
      <div className="page-container">
        <h2 style={{ color: "#ffcc00" }}>My Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
