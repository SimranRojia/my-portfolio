import React from 'react'
import './about.scss'
import aboutpic from '../../assets/profilepicture1.png'
import SecHead from '../../components/secHead/SecHead'
import Primbtn from '../../components/Primary btn/Primbtn'



function About() {
    return (
        <div id='scroll-about' data-aos="fade-up" className='About'>
            <div className="container">
                <div className="content">

                    <SecHead subhead="My Introduction" head="About Me" />

                    <div data-aos="zoom-in" className="mid">
                        <div className="img">
                            <img src={aboutpic} alt="" />

                        </div>

                    </div>
                    <div className="bottom">

                        <div className="details">
                            <div className="top">
                                <span className="center" id="desc">
                                Hello! I'm Simran Rojia, a tech enthusiast and undergraduate student pursuing Information Technology at Delhi Technological University (DTU). Passionate about leveraging technology to solve real-world problems, I actively engage in web development and AI/ML projects alongside my academic endeavors
<br></br>  
<br></br>                              
My  Professional Journey<br/>
As the Co-Founder at MOOFLI, I have led the development of a social platform dedicated to empowering self-expression and fostering meaningful connections. In my role as a Full-Stack Developer at Delhi Police, I developed the backend for the COP App, significantly enhancing foot patrol efficiency. As the Co-Head and Frontend Developer at SKILLOP, I have designed responsive, user-centric components and optimized functionalities. Additionally, as a Frontend Developer at Resumify, I have worked on enhancing job application success with innovative tools and templates.


<br></br>
<br></br>
Skills & Expertise<br/>
Programming Languages : Python, C++, C, Java, JavaScript, HTML, CSS<br/>
Frameworks & Technologies: Flask, React, Node.js, Express.js, WebRTC<br/>
Domains: Full Stack Web Development, Artificial Intelligence & Machine Learning<br/>
Leadership & Management: Project Management, Team Leadership, Strategic Planning<br/><br/>
Let's Connect<br/>
I'm always eager to explore new opportunities and collaborations. Whether it's through professional connections or innovative projects, I believe in the power of technology to create positive change. Let's connect and embark on this exciting journey of innovation and growth together!



                                </span>

                            </div>

                            <div className="count center">

                                <div className="social">
                                    <ul>
                                        <li>
                                            <a
                                                target="_blank" rel="noreferrer"
                                                href="https://github.com/SimranRojia"
                                            >
                                                <i className="uil2 fa-brands fa-github"></i>

                                            </a>
                                        </li>
                                         <li>
                                            <a target="_blank" rel="noreferrer"
                                                href="https://www.linkedin.com/in/simran-rojia/">
                                                <i className="uil2 fa-brands fa-linkedin"></i>

                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" rel="noreferrer"
                                                href="https://twitter.com/SimranRojia2284">
                                                <i className={`uil2 fa-brands fa-twitter`}></i>

                                            </a>
                                        </li> 
                                        <li>
                                            <a target="_blank" rel="noreferrer"
                                                href="https://www.instagram.com/srsly_simran">
                                                <i
                                                    className='uil2 fa-brands fa-instagram'

                                                    id="uil-instagram-alt" aria-hidden="true"></i>

                                            </a>
                                        </li>
                                    </ul>

                                </div>

                            </div>

                            <a target='_blanck' href="https://drive.google.com/file/d/19NA-y1Fk3xCxPNEF-Htt-bgTwSiqw7uN/view?usp=sharing" className="buttons center">
                                <Primbtn value="My Resume" icon={<i className="uil uil-download-alt"></i>} />
                            </a>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    )
}

export default About
