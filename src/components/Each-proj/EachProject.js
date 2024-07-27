import React from 'react'
import './each-proj.scss'
import Primbtn from '../../components/Primary btn/Primbtn';
import Tech from '../stack/Tech';

function EachProject(props) {
    return (
        <div data-aos={`fade-${(props.idx)%2===0 ? 'left':'right'}`} className='each-proj ' >
            <div className="each-slide">
                <div className="center left">
                    <div className="center thumb-img">
                        <img src={props.project.thumImg} alt="" />
                    </div>

                </div>
                <div className="right">


                    <div className="heading">
                        <h4 className="head">
                            {props.project.title}
                        </h4>
                    </div>



                    <div className="mid">
                        <p className="desc">
                            {props.project.desc}
                        </p>
                        <div className="stack-used">
                            <div className="head">
                                <p>Stack Used</p>

                            </div>
                            <div className="logos">
                                {
                                    props.project.stackUsed.map((item, i) => {
                                        return <Tech stack={item} key={i} />
                                    })
                                }

                            </div>



                        </div>

                    </div>



                    <div className="buttons">
                        <a target="_blank" rel="noreferrer" href={props.project.live}>

                            <Primbtn value="Live" icon={<i className="uil uil-arrow-up-right"></i>} />
                        </a>
                        <a target="_blank" rel="noreferrer" href={props.project.github}>

                            <Primbtn value="GitHub" icon={<i className="uil uil-github"></i>} />
                        </a>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default EachProject
