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
              Experience
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
                <p>Designing Webpages</p>
                <h3>Web Development</h3>
                <p>Web App Development</p>
                <h3>App Development</h3>
                <p>Building Android/iOS apps</p>
              </>
            )}
            {activeTab === "Experience" && (
              <>
                <h2>Experience</h2>
                <ul>
                  <li>
                    <h3>Frontend Developer - XYZ Tech</h3>
                    <p>Developed responsive web applications using React.js.</p>
                    <p><strong>Duration:</strong> Jan 2020 - Dec 2021</p>
                  </li>
                  <li>
                    <h3>UI/UX Designer - ABC Solutions</h3>
                    <p>Designed interactive UI components and prototypes.</p>
                    <p><strong>Duration:</strong> Feb 2018 - Dec 2019</p>
                  </li>
                </ul>
              </>
            )}
            {activeTab === "Education" && (
              <>
                <h2>Education</h2>
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
