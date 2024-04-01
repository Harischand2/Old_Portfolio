import React from 'react'
import about_me from "../about_me.jpeg"
import "../styles/about.css"
export default function About() {
  return (
   <div className='row d-flex'>
    <div className="col-12 col-md-6 about_img d-flex align-items-center justify-content-center">
    <img className='img-fluid' src={about_me} alt="about_me" />
    </div>
    <div className="col-12 col-md-6 d-flex flex-column justify-content-center d_">
    <p className='text-center a_m' >About Me</p>

    <p className='text-center a_title '>
    Full Stack Developer based in New York, U.S.A📍
    </p>
      <p className="a_d">
      Hello there! 👋 I'm currently a Junior at <b>Columbia University</b><span className='c_logo'>♔</span>, on the journey to earning my bachelor's degree in <b>Computer Science</b>. As a passionate and creative web developer, I thrive on the challenges of ensuring scalability, efficiency, and reliability in the products I bring to life. In my free time, you'll find me in the kitchen, cooking up a storm with my Grandma. It's in these moments of creativity and tradition that I find inspiration, translating those values into my approach to web development. Let's connect and explore the exciting intersection of technology and creativity!
      </p>
    </div>
   </div>
  )
}
