import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Nav from "./components/Nav";
import './App.css';
 
function App() {
  return (
    <>
    <Nav home="#home" about="#about" projects="#projects" contacts="#contacts"/>
    
     <div className="container-fluid flex-wrap d-flex justify-content-center align-items-center home_page" id="home">
        <Home/>
    </div>
    <div className="container-fluid about_page d-flex" id="about">
        <About/>
    </div>
    <div className="container-fluid project_page" id="projects">
        <Projects/>
    </div>
    <div className="container-fluid d-block contact_page" id="contacts">
        <Contacts/>
    </div>
    </>
   );
}
 
export default App;


  