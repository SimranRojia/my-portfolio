import React from 'react';
import './project.scss';
import SecHead from '../../components/secHead/SecHead';
import EachProject from '../../components/Each-proj/EachProject';

import skillopgif from '../../assets/skillop.gif';
import doctorease from '../../assets/Doctorease.gif'
import COP from '../../assets/COP.gif'

import 'glider-js/glider.min.css';

import react from '../../assets/react.svg'
import mongodb from '../../assets/mongodb.svg'
import node from '../../assets/node-js.svg'
import js from '../../assets/javascript.svg'
import redux from '../../assets/redux.svg'
import express from '../../assets/express.svg'
import css from '../../assets/css.svg'






function Project() {
    
    
    const projects = [
        {
            title: "Skillop",
            desc: `SKILLOP Society, based at Delhi Technological University, is a student-led organization dedicated to fostering technical prowess and personal growth among students. Our mission is to empower individuals across India to excel as skilled tech professionals through a variety of initiatives, including workshops, competitions, mentorship programs, and industry collaborations. By providing a supportive and dynamic learning environment, SKILLOP Society aims to bridge the gap between academic knowledge and real-world application, preparing students for successful careers in the ever-evolving tech landscape.`,
            thumImg: skillopgif,


            live: "https://skillop.in",
       

            stackUsed: [{
                head: "React",
                logo: react
            },
            {
                head: "Redux",
                logo: redux
            },
            {
                head: "js",
                logo: js
            },
            {
                head: "css",
                logo: css
            },
            {
                head: "Node-js",
                logo: node
            },
            {
                head: "Express-js",
                logo: express
            },
            {
                head: "MongoDB",
                logo: mongodb
            }
            ]

        },
        {
            title: "ConstableOnPatrol",
            desc:`COP is designed specifically for the Delhi Police. It serves as a comprehensive tool for managing crime statistics and constable operations. The platform features a dynamic crime stats graph that visualizes crime trends and statistics over time. Users can easily enter and update crime details through a user-friendly interface. Additionally, COP allows for the efficient management of constable resources, including adding and removing constables, assigning them specific duties, and retrieving detailed information about constables in particular areas. This system is tailored to enhance the operational efficiency of the Delhi Police by streamlining data management and resource allocation.`,
            thumImg: COP,

            live: "delhicop.in",
            // github: "https://github.com/Ekansh-Bhushan/HackAI_230344",


            stackUsed: [{
                head: "React",
                logo: react
            },
            
            {
                head: "CSS",
                logo: css
            },
            {
                head: "Node-js",
                logo: node
            },
            {
                head: "Express-js",
                logo: express
            },
            {
                head: "MongoDB",
                logo: mongodb
            }
            ]

        },
        {
            title: "DoctorEase",
            desc: "DoctorEase is a web application designed to facilitate online doctor consultations with a modern and user-friendly interface. Built with React.js, it offers a range of services like general checkups, psychological consulting, and post-surgery care. The platform features a clean design with appealing visuals and a responsive layout, ensuring an engaging user experience. Key components include an intuitive navigation bar, a detailed footer, and a streamlined contact form for user inquiries and feedback",
            thumImg: doctorease,


            // live: "https://skillop.in",
            github :"https://github.com/SimranRojia/DoctorEase.git",
       

            stackUsed: [{
                head: "React",
                logo: react
            },
            // {
            //     head: "Redux",
            //     logo: redux
            // },
            {
                head: "js",
                logo: js
            },
            {
                head: "css",
                logo: css
            },
            // {
            //     head: "Node-js",
            //     logo: node
            // },
            // {
            //     head: "Express-js",
            //     logo: express
            // },
            // {
            //     head: "MongoDB",
            //     logo: mongodb
            // }
            ]
            

        },
        
        // {
        //     title: "How's the weather",
        //     desc: "Indulge in the epitome of weather exploration through our exceptional app. Powered by the dynamic trio of React and open source API \"Open Weather \", it offers unparalleled precision, immersive visuals, and seamless user engagement.",
        //     thumImg: weathergif,


        //     live: "https://howstheweatherapp.netlify.app",
        //     github: "https://github.com/abk-403/weather-app",

        //     stackUsed: [{
        //         head: "React",
        //         logo: react
        //     },
        //     {
        //         head: "Javascript",
        //         logo: js
        //     },
        //     {
        //         head: "CSS",
        //         logo: css
        //     }
        //     ]

        // },
       
    ]





    return (
        <>
        <div id='scroll-proj' data-aos="fade-up" className='project'>
            
            <div className="container">
                <div className="content">
                    <SecHead head="My Projects" subhead="Most recent work" />


                    <div className="slider center">


                        {
                            projects.map((item, i) => {
                                return (
                                    <EachProject idx={i} project={item} key={i} />
                                )
                            })
                        }
                    </div>


                </div>
            </div>
        </div>
        </>

    )
}

export default Project
