/* global $:true */
import React from 'react';
import { Link } from 'gatsby';

class Header extends React.Component {
  componentDidMount() {
    const toggleButton = $('.menu-toggle');

    const nav = $('.main-navigation');

    // toggle button
    toggleButton.on('click', e => {
      e.preventDefault();
      toggleButton.toggleClass('is-clicked');
      nav.slideToggle();
    });

    // nav items
    nav.find('li a').on('click', () => {
      // update the toggle button
      toggleButton.toggleClass('is-clicked');
      // fadeout the navigation panel
      nav.fadeOut();
    });
  }

  render() {
    return (
      <header>
        <div className="row">
          <div className="top-bar">
            <a className="menu-toggle" href="#">
              <span>Menu</span>
            </a>

            <nav id="main-nav-wrap">
              <ul className="main-navigation">
                <li className="current">
                  <a className="smoothscroll" href="#intro" title="">
                    Home
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#about" title="">
                    About
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#resume" title="">
                    Resume
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#portfolio" title="">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#services" title="">
                    Services
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#contact" title="">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
