import React, { useState } from 'react'
import './skill.scss'
import EachReport from '../eachReport/EachReport';

function Skill(props) {
    const [active, setActive] = useState(true)
    function handleSkillClick() {
        setActive(!active);

    }
    return (
        <div data-aos={`fade-${(props.idx)%2===0 ? 'right':'left'}`} className="skill-overlay">

            <div className="each-skill ">

                <div onClick={handleSkillClick} className="head">
                    <i className={props.content.icon}></i>
                    <h4 className="heading">
                        {props.content?.heading}
                    </h4>

                    <p className="desc">
                        {props.content?.desc}
                    </p>
                    <i className={`angle uil2 uil-angle-${active ? 'up':'down'}`}></i>
                    

                </div>


                <div style={{ height: active ? '195px' : '10px' }} className="report">
                    
                    {
                        props.content?.reports?.map((item,i)=>{
                            return(
                                <EachReport key={i} content={item} />
                            )
                        })
                    }


                   




                </div>




            </div>

        </div>
    )
}

export default Skill
