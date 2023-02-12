

import React from 'react';

function Home(props) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      id="mainNav"
      rel="noopener noreferrer"
    >
      <div className="container">
        <a
          className="navbar-brand js-scroll-trigger"
          href="#page-top"
          rel="noopener noreferrer"
        >
          Salisu Isah
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link js-scroll-trigger"
                href="#about"
                rel="noopener noreferrer"
              >
                About{" "}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link js-scroll-trigger"
                href="#project"
                rel="noopener noreferrer"
              >
                Project
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link js-scroll-trigger"
                href="#contact"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Home;
