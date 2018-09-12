import React from 'react';
import { Link } from 'gatsby';

const Intro = () => (
  <section id="intro">
    <div className="intro-overlay" />

    <div className="intro-content">
      <div className="row">
        <div className="col-twelve">
          <h5>Hello,</h5>
          <h1>I'm Vipin Rawat.</h1>

          <p className="intro-position">
            <span>React Developer</span>
            <span>UI/UX Designer</span>
          </p>

          <a className="button stroke smoothscroll" href="#about" title="">
            More About Me
          </a>
        </div>
      </div>
    </div>

    <ul className="intro-social">
      <li>
        <a href="https://github.com/aesthytik">
          <i className="fab fa-github" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/aesthytik">
          <i className="fab fa-twitter" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/aesthytik/">
          <i className="fab fa-linkedin-in" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/aesthytik/">
          <i className="fab fa-instagram" />
        </a>
      </li>
      <li>
        <a href="https://medium.com/@aesthytik">
          <i className="fab fa-medium-m" />
        </a>
      </li>
    </ul>
  </section>
);

export default Intro;
