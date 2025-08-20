import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
  <div className="home-content">
    <h1>Hi, I'm <span className="highlight">Sanjay Kanth</span></h1>
    <h2>MERN Stack Developer | UI/UX Designer</h2>
    <p>
      I craft clean, user-friendly interfaces and build scalable full-stack
      web applications. Combining design thinking with technical skills,
      I bring ideas to life – from concept to deployment.
    </p>
    <div className="buttons">
      <a href="#projects" className="btn btn-secondary">View My Work</a>
      <a href="https://drive.google.com/file/d/1hrhTtw6pN6RLgHnl76e0yajV9EhYytvj/view?usp=sharing" className="btn btn-success">Download Resume</a>
    </div>
  </div>

  <div className="home-right">
    <div className="circle-bg"></div>
    <div className="icons">
      <img src="/icons/react.png" alt="React"/>
      <img src="/icons/node.png" alt="Node"/>
      <img src="/icons/mongo.png" alt="MongoDB"/>
      <img src="/icons/figma.png" alt="Figma"/>
    </div>
  </div>
</div>

  );
}

export default Home;
