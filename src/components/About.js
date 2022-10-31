import React from 'react'
import AboutImage from '../assets/fooda.jpeg'
import '../styles/About.css'
function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${AboutImage})`}}></div>
        <div className='aboutBottom' >
            <h1>About Us</h1>
        <p>
            This is about me
        </p>
        </div>
    </div>
  )
}

export default About