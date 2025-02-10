import "../styles.css";

const About = () => {
  return (
    <div className="main-content">
      <div className="page-container">
        <h2 style={{ color: "#ffcc00" }}>About Me</h2>
        <p>
          I am a dedicated <strong>Python Full Stack Developer</strong> with 4 years of experience 
          in building robust web applications.
        </p>
        <h3 style={{ textDecoration: "underline" }}>Technical Skills</h3>
        <ul style={{ listStyleType: "none", padding: "0" }}>
          <li>✅ Frontend: HTML, CSS, JavaScript, React</li>
          <li>✅ Backend: Python, Django, Flask, REST APIs</li>
          <li>✅ Databases: PostgreSQL, MySQL, SQLite</li>
          <li>✅ Data Analysis: NumPy, Pandas, Power BI</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
