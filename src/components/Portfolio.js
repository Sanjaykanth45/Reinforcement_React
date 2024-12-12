import React from "react";
import "./Portfolio.css";
import projectImage from '../images/project1.png'; 
import project1Image from '../images/project2.png'; 
import project2Image from '../images/project3.png'; 


const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1 className="portfolio-title">My Latest Project</h1>
      <div className="portfolio-cards">
        <div className="portfolio-card">
          <div className="portfolio-overlay">
            <h3 className="portfolio-title">Sign Up page</h3>
            <p className="portfolio-subtitle">
            A sign-up page is the gateway for new users to create an account, 
            providing their essential information to access the website's features and services.
            </p>
            <a href="https://glowing-axolotl-59c843.netlify.app/" className="portfolio-link">View Details</a>
          </div>
          <img
            src={projectImage}
            alt="Sign Up page"
            className="portfolio-image"
          />
        </div>
        <div className="portfolio-card">
          <div className="portfolio-overlay">
            <h3 className="portfolio-title">Weather App</h3>
            <p className="portfolio-subtitle">
            A weather app provides real-time weather updates, forecasts, 
            and alerts to help users plan their day accordingly.
            </p>
            <a href="https://strong-paletas-af7ca8.netlify.app/task3" className="portfolio-link">View Details</a>
          </div>
          <img
            src={project1Image}
            alt="Weather App"
            className="portfolio-image"
          />
        </div>
        <div className="portfolio-card">
          <div className="portfolio-overlay">
            <h3 className="portfolio-title">Online Shopping App</h3>
            <p className="portfolio-subtitle">
            An online shopping app allows users to browse, purchase, 
            and manage orders of various products from their mobile devices.
            </p>
            <a href="https://gorgeous-hotteok-cf4bcf.netlify.app/" className="portfolio-link">View Details</a>
          </div>
          <img
            src={project2Image}
            alt="Online Shopping App"
            className="portfolio-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
