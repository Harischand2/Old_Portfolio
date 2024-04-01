import React from 'react'
import jjf_img from "../jjf_img.png";
import gl from "../gl.png";
import git_logo from "../github_logo.png";
import "../styles/projects.css";
export default function Projects() {
  return (
    <>    
    <div className="row d-flex">
      <div className="col-12  d-flex justify-content-center align-items-center">
        <p className='projects_'>Projects</p>
      </div>
    </div>
    <div className="row d-flex">
    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
    <img className='img-fluid img_jjf' src={jjf_img} alt="Mental Health App" />
    </div>
    <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center description">
    <p className='p_d'><b>Joy-Ride-Junction</b> is a mental health application constructed with <b>React, Bootstrap & Restful API</b>. It has a nature-themed design to foster user engagement. It implements a one time secure user authorization system via the Spotify API, and optimizes accessibility for uninterrupted exploration of diverse moods, accompanied by curated playlists from Spotify and steps to achieve each mood, complemented by relevant quotes.</p>
    <span className='code_git_demo d-flex align-items-center'>
    <a className="btn btn-light align-items-center d-flex" href="https://github.com/Harischand2/Joy_Ride_Junction" target="blank"> <span >Code</span> <img className="img-fluid" src={git_logo} alt="github"/> </a>

    <a className="align-items-center d-flex btn btn-light" href="https://joy-ride-junction.vercel.app/" target="blank"> <span >Demo </span><span className="material-symbols-outlined open_new ">
open_in_new
</span> </a>
    </span>
    </div>

    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
    <img className='img-fluid img_jjf' src={gl} alt="Mental Health App" />
    </div>
    <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center description">
    <p className='p_d'> <b>Gamers Library</b> is a robust web application constructed with <b>JavaScript, Bootstrap, jQuery, AJAX & Flask</b>, facilitating seamless game browsing and management. Users can explore games through selection or search based on name, description, or year, with options to view detailed information, discover related games, and edit entries. Additionally, the intuitive CRUD functionality empowers users to effortlessly add new games, ensuring a comprehensive and user-friendly experience.</p>
    <span className='code_git_demo d-flex align-items-center'>
    <a className="btn btn-light align-items-center d-flex" href="https://github.com/Harischand2/Gamers_Library" target="blank"> <span >Code</span> <img className="img-fluid" src={git_logo} alt="github"/> </a>

    <a className="align-items-center d-flex btn btn-light" href="https://adrian2.pythonanywhere.com/" target="blank"> <span >Demo </span><span className="material-symbols-outlined open_new ">
open_in_new
</span> </a>
    </span>
    </div>

    </div>
    

    </>

  )
}
