import React from 'react';
import { Link } from 'gatsby';

const About = () => (
  <section id="about">
    <div className="row section-intro">
      <div className="col-twelve">
        <h5>About</h5>
        <h1>Let me introduce myself.</h1>

        <div className="intro-info">
          <img src="images/vipin.jpg" alt="ProfilePicture" />

          <p className="lead">
            I am a passionate frontend-developer with an eye for design. I
            design websites that have a modern touch. Being from a design field,
            I can work on web aesthetics and transitions. I write blogs, poems,
            do sketches.
          </p>
        </div>
      </div>
    </div>
    <div className="row about-content">
      <div className="col-six tab-full">
        <h3>Profile</h3>
        <p>
          React developer and designer. I work on GatsbyJS, NextJS for web apps
          development. I make ios and android apps on React Native. I draw,
          design, write and develop solutions.
        </p>

        <ul className="info-list">
          <li>
            <strong>Fullname:</strong>
            <span>Vipin Kumar Rawat</span>
          </li>
          <li>
            <strong>Birth Date:</strong>
            <span>September 28, 1997</span>
          </li>
          <li>
            <strong>Job:</strong>
            <span>Frontend Developer</span>
          </li>
          <li>
            <strong>Website:</strong>
            <span>www.aesthytik.design</span>
          </li>
          <li>
            <strong>Email:</strong>
            <span>rawat.vipin4818@gmail.com</span>
          </li>
        </ul>
      </div>

      <div className="col-six tab-full">
        <h3>Skills</h3>
        <p>
          Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in
          magna sint minim officia consectetur nisi commodo ea magna pariatur
          nisi cillum.
        </p>

        <ul className="skill-bars">
          <li>
            <div className="progress percent90">
              <span>90%</span>
            </div>
            <strong>React</strong>
          </li>
          <li>
            <div className="progress percent85">
              <span>85%</span>
            </div>
            <strong>React Native</strong>
          </li>
          <li>
            <div className="progress percent80">
              <span>80%</span>
            </div>
            <strong>Apollo</strong>
          </li>
          <li>
            <div className="progress percent75">
              <span>75%</span>
            </div>
            <strong>Redux</strong>
          </li>
          <li>
            <div className="progress percent95">
              <span>95%</span>
            </div>
            <strong>Gatsby JS</strong>
          </li>
          <li>
            <div className="progress percent90">
              <span>90%</span>
            </div>
            <strong>Writing Skills</strong>
          </li>
        </ul>
      </div>
    </div>

    <div className="row button-section">
      <div className="col-twelve">
        <a
          href="#contact"
          title="Hire Me"
          className="button stroke smoothscroll"
        >
          Hire Me
        </a>
        <a href="#" title="Download CV" className="button button-primary">
          Download CV
        </a>
      </div>
    </div>
  </section>
);

export default About;
