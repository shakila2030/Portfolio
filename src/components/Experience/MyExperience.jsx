import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" >
      <h1 className="experience-title" style={{ color: darkMode ? "white" : "black" }}> My Experiences</h1>
      <h3 className="position" >Software Engineer Intern</h3>

      {/* Software Engineer Intern Experience */}
      <div className="experience-card" >
        
        <h4 className="company" style={{ color: darkMode ? "white" : "black" }} >DirectFN (7 months)</h4>
       
        <ul className="tasks">
          <li>Created a GraphQL Endpoint: Developed plugins in the core ESB to enable GraphQL services for clients.</li>
          <li>Unit Testing and Sonar/SNYK Issue Fixing: Improved  unit test line percentage and reduced SonarQube issue counts in the ESB .</li>
          <li>Frontend Issues: Made contributions to the ESB platform as required.</li>
          <li>Acquired expertise in Camel, a framework used in ESB for routing purposes.</li>
        </ul>
      </div>

      {/* Technical Writer Experience */}
      <div className="experience-card" >
        <h3 className="position">Technical Writer</h3>
        <h4 className="company" style={{ color: darkMode ? "white" : "black" }}>Techylo Solutions (2 years)</h4>
  
        <ul className="tasks">
          <li>Authored detailed documentation for technical processes and software tools.</li>
          <li>Collaborated with engineering teams to create user manuals and guides.</li>
          <li>Streamlined documentation processes for improved accuracy and accessibility.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;