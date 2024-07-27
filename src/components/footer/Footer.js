import React from 'react'
import './footer.scss'
import { Link } from 'react-scroll/modules';

function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="content">
                    <div className="top">

                        <div className="left flex-col">
                            <h1 className="name">
                                Simran
                            </h1>
                            <h6 className="position">
                                Full-Stack Developer
                            </h6>

                        </div>

                        <div className="mid">

                            <ul>
                                <li>
                                    <Link duration={5} smooth={true} offset={-70} activeClass='active' to="scroll-home" spy={true} className='home'>Home</Link>

                                </li>
                                <li>
                                    <Link duration={5} to='scroll-proj' smooth={true} offset={-70} activeClass='active' spy={true} className='projects'  >Projects</Link>
                                </li>
                                <li>
                                    <Link duration={5} to="scroll-about" smooth={true} offset={-70} activeClass='active' spy={true} className='about' >About</Link>

                                </li>
                            </ul>

                        </div>

                        <div className="right">
                            <ul>
                                <li>
                                    <a
                                        target="_blank" rel="noreferrer"
                                        href="https://github.com/SimranRojia"
                                    >
                                        <i className="uil2 fa-brands fa-github"></i>

                                    </a>
                                </li>
                                {/* <li>
                                    <a target="_blank" rel="noreferrer"
                                        href="https://www.linkedin.com/in/abhishek-sharma-84a827212/">
                                        <i className="uil2 fa-brands fa-linkedin"></i>

                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noreferrer"
                                        href="https://twitter.com/abhishek_sh01">
                                        <i className={`uil2 fa-brands fa-twitter`}></i>

                                    </a>
                                </li> */}
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

                    <div className="bottom center">
                        <span className="copytight">
                            Created by Simran Rojia
                        </span>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;
