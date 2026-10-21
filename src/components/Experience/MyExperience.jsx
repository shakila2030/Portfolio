import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" >
      <h1 className="experience-title" style={{ color: darkMode ? "white" : "black" }}> My Experiences</h1>

      <h3 className="position" >Software Engineer</h3>

      {/* Software Engineer Experience */}
      <div className="experience-card" >
        
        <h4 className="company" style={{ color: darkMode ? "white" : "black" }} >IGT1 - Sitecore (1 year 2 months)</h4>
       
        <ul className="tasks">
          <li>Provided advanced technical support for Sitecore Search, Discover, and Send, resolving configuration, API integration, dataingestion, and web-crawling issues</li>
          <li>Troubleshot customer implementations using client-server architecture and frontend technologies including HTML, CSS, JavaScript, and React.</li>
          <li>Analyzed application and infrastructure logs using AWS CloudWatch, Elastic, Kibana and Snowflake within a 24/7 production support environment.</li>
          <li>Handled 200 customer support cases while achieving an 90% customer satisfaction rating.</li>
          <li>Managed escalated and high-priority customer issues through timely communication and coordination with customers, stakeholders, and engineering teams.</li>
        </ul>
      </div>

      <h3 className="position" >Software Engineer Intern</h3>

      {/* Software Engineer Intern Experience */}
      <div className="experience-card" >
        
        <h4 className="company" style={{ color: darkMode ? "white" : "black" }} >DirectFN (7 months)</h4>
       
        <ul className="tasks">
          <li>GraphQL Integration: Developed a GraphQL endpoint within the company's ESB system using Spring Boot and tested it 
            using a test GraphQL server. Designed, developed, and tested ESB plugins, while supporting the migration of the ESB system 
            from Apache Camel 3 to Apache Camel 4.</li>
          <li>Unit Testing and Sonar /SNYK issue Fixing: Improved unit test coverage using JUnit 5, Jetty, and Mockito. Resolved code quality 
            and security issues identified by SonarQube and Snyk.</li>
          <li>Frontend Development: Contributed to frontend development using React, implementing and maintaining software features.</li>
          <li>Team Collaboration: Participated in daily stand-ups, sprint planning, and iteration retrospectives, collaborating with 
            crossfunctional teams to track development progress, resolve technical challenges, and support continuous improvement.</li>
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