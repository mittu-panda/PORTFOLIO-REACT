import React from 'react'
import'./Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import mittu from "../../assets/Mittu-photo.jpeg"
const Hero = () => {
  return (
    <div id='home' className='hero'>
       
        <h1><span>I'm Mittu Panda,</span> looking for frontend role. </h1>
        <p>I am skilled in c,java and python.I have deep knowledge in Html,css,Javascript and React.</p>
        <div className="hero-action">
            <div className="hero-connect">
            <AnchorLink className='anchor-link' offset={50} href='#contact'>
                connect with me
                </AnchorLink>
            </div>
            <div className="hero-resume">My Resume</div>
        </div>
        </div>
  )
}

export default Hero