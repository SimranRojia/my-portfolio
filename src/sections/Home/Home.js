import React from 'react'
import './home.scss'
import profilepic from '../../assets/profilepicture1.png'
import Primbtn from '../../components/Primary btn/Primbtn'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-scroll/modules'

import react from '../../assets/react.svg'
import mongodb from '../../assets/mongodb.svg'
import node from '../../assets/node-js.svg'
import js from '../../assets/javascript.svg'
import redux from '../../assets/redux.svg'
import express from '../../assets/express.svg'
import css from '../../assets/css.svg'
import html from '../../assets/html.svg'
import scss from '../../assets/sass.svg'
import boots from '../../assets/bootstrap.svg'
import firebase from '../../assets/firebase.svg'

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import {useSelector} from 'react-redux'


function Home() {

    const particlesInit = useCallback(async engine => {
        
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {}, []);



    const darkTheme = useSelector(s=>s.utilsReducer.darkTheme)





    return (<>


        <div id='scroll-home' className='Home'>
            <Particles
                style={{
                    position: "absolute",
                    height:"100vh"
                }}
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    "fullScreen": {
                        "enable": false,
                        "zIndex": 0
                    },
                    "interactivity": {
                        "events": {
                            "onClick": {
                                "enable": false,
                            },
                            "onDiv": {
                                "elementId": "repulse-div",
                                "enable": false,
                                "mode": "repulse"
                            },
                            "onHover": {
                                "enable": true,
                                "mode": "bubble",
                                "parallax": {
                                    "enable": false,
                                    "force": 60,
                                    "smooth": 10
                                }
                            },
                            "resize": true
                        },
                        "modes": {
                            "bubble": {
                                "distance": 100,
                                "duration": 2,
                                "opacity": .8,
                                "size":20,
                                "speed": 3
                            },
                            "connect": {
                                "distance": 80,
                                "lineLinked": {
                                    "opacity": 0.7
                                },
                                "radius": 60
                            },
                            "grab": {
                                "distance": 400,
                                "lineLinked": {
                                    "opacity": .9
                                }
                            },
                            
                            "remove": {
                                "quantity": 2
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4
                            }
                        }
                    },
                    "particles": {
                        "color": {
                            "value": "#ffffff"
                        },
                        "lineLinked": {
                            "blink": false,
                            "color": "#000",
                            "consent": false,
                            "distance": 150,
                            "enable": false,
                            "opacity": 0.5,
                            "width": 1
                        },
                        "move": {
                            "attract": {
                                "enable": false,
                                "rotate": {
                                    "x": 600,
                                    "y": 1200
                                }
                            },
                            "bounce": false,
                            "direction": "none",
                            "enable": true,
                            "outMode": "out",
                            "random": false,
                            "speed": 2,
                            "straight": false
                        },
                        "number": {
                            "density": {
                                "enable": true
                            },
                            "limit": 0,
                            "value": 40
                        },
                        "opacity": {
                            "animation": {
                                "enable": true,
                                "minimumValue": 0.1,
                                "speed": 1,
                                "sync": false
                            },
                            "random": true,
                            "value": .6
                        },
                        "rotate": {
                            "animation": {
                                "enable": true,
                                "speed": 5,
                                "sync": false
                            },
                            "direction": "random",
                            "random": true,
                            "value": 20
                        },
                        "shape": {
                            "character": {
                                "fill": false,
                                "font": "Verdana",
                                "style": "",
                                "value": "*",
                                "weight": "400"
                            },
                            "image": [
                                {
                                    "src": `${react}`,
                                    "width": 40,
                                    "height": 40
                                },
                                {
                                    "src": `${redux}`,
                                    "width":  40,
                                    "height":  40
                                },
                                {
                                    "src": `${mongodb}`,
                                    "width": 40,
                                    "height": 40
                                },
                                {
                                    "src":`${css}`,
                                    "width": 40,
                                    "height": 40
                                },
                                {
                                    "src": `${js}`,
                                    "width": 40,
                                    "height": 40
                                },
                                {
                                    "src": `${express}`,
                                    "width": 40,
                                    "height":40
                                },
                                {
                                    "src": `${node}`,
                                    "width": 40,
                                    "height":40
                                },
                                {
                                    "src": `${html}`,
                                    "width": 40,
                                    "height":40
                                },
                                {
                                    "src": `${scss}`,
                                    "width": 40,
                                    "height":40
                                },
                                {
                                    "src": `${boots}`,
                                    "width": 40,
                                    "height":40
                                },
                                {
                                    "src": `${firebase}`,
                                    "width": 40,
                                    "height":40
                                }
                            ],
                            "polygon": {
                                "sides": 5
                            },
                            "stroke": {
                                "color": "#000000",
                                "width": 0
                            },
                            "type": "image"
                        },
                        "size": {
                            "animation": {
                                "enable": false,
                                "minimumValue": 0.1,
                                "speed": 20,
                                "sync": false
                            },
                            "random": false,
                            "value": 25
                        }
                    },
                    "polygon": {
                        "draw": {
                            "enable": false,
                            "lineColor": "#ffffff",
                            "lineWidth": 0.5
                        },
                        "move": {
                            "radius": 10
                        },
                        "scale": 0.1,
                        "type": "none",
                        "url": ""
                    },
                    "background": {
                        "color": `${ darkTheme? "#191627" : "#fbfbfe"}`,
                        "image": "",
                        "position": "50% 50%",
                        "repeat": "no-repeat",
                        "size": "contain"
                    }
                }}
            />

            <div className="container">
                <div className="content">


                    <div data-aos="fade-right" className="left" id="left-home">
                        <div className="details">
                            <h1 className="head">
                                Hi, I'm Simran Rojia
                            </h1>
                            <h4 className="position">
                                I'm {' '}
                                <span id='typewriter'>

                                    <Typewriter
                                        words={['Tech enthusiast','Full-stack developer', 'AI & ML enthusiast','Innovator','Co-Head @SKILLOP','Co-Founder @MOOFLI']}
                                        loop={Infinity}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={50}
                                        deleteSpeed={25}

                                    />
                                </span>

                            </h4>
                            <p className="desc">
                            Hello! I'm Simran Rojia, an Information Technology student at Delhi Technological University (DTU). I'm passionate about solving real-world problems through technology. As a Co-Head of Web Development and Full Stack Developer at SKILLOP, I've designed and deployed user-centric components. I also co-founded Moofli, where I led the development of key features to enhance user experience. Let's connect and explore how we can collaborate!                                </p>

                        </div>

                        <div className="bottom hover-link">
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
                                    {/* in future jab account bana duga tab kar luga */}
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

                            <div className="buttons">
                                <a target='_blanck' href="https://drive.google.com/file/d/19NA-y1Fk3xCxPNEF-Htt-bgTwSiqw7uN/view?usp=sharing" >

                                    <Primbtn
                                        value="My Resume" icon={<i className="uil uil-bag"></i>} />

                                </a>
                                <Link duration={5} to='scroll-contact' offset={-70}>
                                    <Primbtn value="Contact Me" icon={<i className="uil uil-message"></i>} />
                                </Link>
                            </div>


                        </div>


                    </div>

                    <div data-aos="fade-left" className="right center" id="right-home">


                        <div className="profile-img center">

                            <img src={profilepic} alt="" />


                        </div>



                    </div>

                </div>
            </div>


        </div >
    </>
    )
}

export default Home
