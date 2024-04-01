import React from 'react'
import transitions from "bootstrap";

export default function Nav(props) {
  return (
    <nav className="navbar fixed-top navbar-expand-sm  nav_">
     <div className="container-fluid">
      <div className="navbar-brand"><b>Adrian.dev</b></div>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
       </button> 
    <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
      <ul className="navbar-nav ">
        <li className="nav-item ">  <a href={props.home} className="nav-link link_" aria-current="page"> Home</a> </li>
        <li className="nav-item ">  <a href={props.about} className="nav-link  link_" aria-current="page">About</a> </li>
        <li className="nav-item ">  <a href={props.projects} className="nav-link  link_" aria-current="page">Projects</a> </li>
        <li className="nav-item ">  <a href={props.contacts} className="nav-link  link_" aria-current="page">Contacts</a> </li>
      </ul>
    </div>
     </div>
    </nav>
  );
} 