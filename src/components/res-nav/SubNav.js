import React from 'react'
import './subnav.scss'
import { useSelector } from 'react-redux';
import { Link } from 'react-scroll/modules';

function SubNav() {
    const subNavActive = useSelector(s => s.utilsReducer.subNavActive);


    const active={ 
        visibility:"visible",
        opacity:"1"
      }
    const passive={ 
        top: "-1%",
        visibility:"hidden",
        opacity:"0"
      }






    return (
        <div style={subNavActive? active : passive} id="subnav" className='subnav'>
            <div className="content">
                <ul >
                    <li>
                        <Link  spy={true} duration={5} smooth={true} offset={-70} activeClass='active' to="scroll-home" > <i className="uil uil-estate"></i>
                            Home</Link>


                    </li>


                    <li>
                        <Link spy={true} duration={5} smooth={true} offset={-70} activeClass='active' to="scroll-proj" ><i className="uil uil-scenery"></i>
                            Projects</Link>


                    </li>
                    <li>
                        <Link  spy={true} duration={5} smooth={true} offset={-70} activeClass='active' to="scroll-about" ><i className="uil uil-user"></i>
                            About</Link>


                    </li>
                    
                    <li>
                        <Link spy={true} duration={5} smooth={true} offset={-70} activeClass='active' to="scroll-skills"><i className="uil uil-file-alt"></i>
                            Skills</Link>


                    </li>
                    <li>
                        <Link  spy={true} duration={5} smooth={true} offset={-70} activeClass='active' to="scroll-contact" ><i className="uil uil-envelope"></i>
                            Contact me</Link>


                    </li>
                </ul>
            </div>

        </div>
    )
}

export default SubNav
