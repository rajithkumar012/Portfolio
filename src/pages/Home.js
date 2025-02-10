import "../styles.css";

const Home = () => {
  return (
    <div className="main-content">
      <div className="page-container">
        <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "#ffcc00" }}>
          Welcome to My Portfolio
        </h2>
        <p style={{ fontSize: "20px" }}>
          I am a <strong>Python Full Stack Developer</strong> passionate about 
          building scalable applications.
        </p>
      </div>
    </div>
  );
};

export default Home;
