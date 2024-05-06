import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
const About = () => {
  return (
    <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
     <div className="about-sections">
            <div className="about-left">
                <img src="src\assets\Mittu-photo.jpeg" alt="" />
            </div>
         <div className="about-right">
                <div className="about-para">
                    <p>Mittu</p>
                    <p>Panda</p>
                </div>
                <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}}/></div>
                   </div>
        </div>
        </div>
        <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>Fresher</h1>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>10</h1>
                        <p>PROJECTS COMPLETED</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>500+</h1>
                        <p>Leetcode problems Solved</p>
                    </div>
            </div>
    </div>
  )
}

export default About
