import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h2>
          Hi, I'm <span className="highlight">Sanjay Kanth</span>
        </h2>
        <h3>MERN Stack Developer </h3><br></br><br></br>
        <h3>what is MERN stack development?</h3>
        <p>
        MERN stack development involves creating web applications using four main technologies: MongoDB (a NoSQL database), 
        Express.js (a web application framework for Node.js), React (a front-end JavaScript library), and Node.js (a JavaScript runtime environment). 
        Together, they provide a powerful and flexible framework for building dynamic and scalable full-stack web applications.</p>
      </div>
     
    </div>
  );
}

export default Home;
