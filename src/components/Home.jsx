import React from "react";
import "../styles/home.css";
import adrian from "../adrian.jpeg";

function Home() {
  return (
    <>
      <div className="row d-flex justify-content-center home_main ">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center home_text">
          <h1>Full Stack Developer</h1>
          <p>
            Hi, I'm <b>Adrian Harischand</b>. A passionate Full Stack Developer
            based in New York, U.S.A📍
          </p>
          <span className="network_links d-flex">
            <a  href="https://github.com/Harischand2" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
         
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/adrianharischand/" target="blank">
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
              
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M8 11l0 5" />
                <path d="M8 8l0 .01" />
                <path d="M12 16l0 -5" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
              </svg>
            </a>
          </span>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img className="img-fluid my-img" src={adrian} alt="Profile" />
        </div>
      </div>

      <div className="row d-flex icon_list">
      <div className="col-12 col-md-4 d-flex align-items-center justify-content-center tech_stack">
        Tech Stack
      </div>
      <div className="col-12 col-md-8 d-flex justify-content-center">
        <span className="skills_icons d-flex">
          <a href="https://skillicons.dev">
          <img className="img-fluid " src="https://skillicons.dev/icons?i=html,css,bootstrap" alt="icons"/>
          </a>
          <a href="https://skillicons.dev">
          <img className="img-fluid " src="https://skillicons.dev/icons?i=javascript,typescript,python" alt="icons"/>
          </a>
          <a href="https://skillicons.dev">
          <img className="img-fluid" src="https://skillicons.dev/icons?i=react,express,flask" alt="icons"/>
          </a>
          </span>
        </div>
      </div>
    </>
  );
}
export default Home;
