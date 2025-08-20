import React, { useState } from "react";
import "./About.css";
import profileImage from "../images/sanjay3.jpg"; 

const About = () => {
  const [activeTab, setActiveTab] = useState("Skills"); 
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="profile-section">
          <img src={profileImage} alt="Sanjay" className="profile-picture" />
        </div>
        <div className="details-section">
          <h1>About Me</h1>
          <p>
          Hello Everyone, I'M Sanjay Kanth from Sathyamangalam, Tamilnadu.
          </p>
          <div className="tabs">
            <div
              className={`tab ${activeTab === "Skills" ? "active" : ""}`}
              onClick={() => setActiveTab("Skills")}
            >
              Skills
            </div>
            <div
              className={`tab ${activeTab === "Experience" ? "active" : ""}`}
              onClick={() => setActiveTab("Experience")}
            >
              Course
            </div>
            <div
              className={`tab ${activeTab === "Education" ? "active" : ""}`}
              onClick={() => setActiveTab("Education")}
            >
              Education
            </div>
          </div>
          <div className="tab-content">
            {activeTab === "Skills" && (
              <>
                <h3>MERN Stack Developer</h3>
                <p>Building dynamic and scalable web applications</p>
                <h3>Software Testing</h3>
                <p>Ensuring quality through efficient manual and automated testing strategies</p>
                <h3>UI/UX Developer</h3>
                <p>Designing intuitive and user-friendly digital experiences.</p>
              </>
            )}
            {activeTab === "Experience" && (
              <>
                
                <ul>
                  <li>
                    <h3>MERN Stack Development - KGiSl Microcollege</h3>
                    <p>Developed Fullstack applications using Frontend and backend</p>
                    <p><strong>Duration:</strong> July 2024 - Jan 2025</p>
                  </li>
                  <li>
                    <h3>UI/UX Designer - KGiSl Microcollege</h3>
                    <p>Designed interactive UI components and prototypes.</p>
                    <p><strong>Duration:</strong> Apr 2025 - Jun 2025 </p>
                  </li>
                    <li>
                    <h3>Software Testing - KGiSl Microcollege</h3>
                    <p>Ensuring quality through efficient manual and automated testing strategies</p>
                    <p><strong>Duration:</strong> Feb 2025 - Apr 2025 </p>
                  </li>
                </ul>
              </>
            )}
            {activeTab === "Education" && (
              <>
                
                <ul>
                  <li>
                    <h3>Bachelor of Engineering In EIE</h3>
                    <p>BIT College, Graduated in 2023</p>
                  </li>
                  <li>
                    <h3>Higher Secondary</h3>
                    <p>Bavn School, Graduated in 2019</p>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
