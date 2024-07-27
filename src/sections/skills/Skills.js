import React from 'react'
import './skills.scss'
import SecHead from '../../components/secHead/SecHead'
import Skill from '../../components/skill/Skill'
function Skills() {

  const dummySkill = 
    [
      {
        heading: "Frontend Developement",
        desc: "11 months+ experience",
        icon:"uil2 uil-brackets-curly skill-icons",
        reports: [
          {
            title: "HTML",
            progress: "80%"
          },
          {
            title: "CSS",
            progress: "70%"

          },
          {
            title: "React",
            progress: "90%"

          }
        ]
      },
      {
        heading: "App Developement",
        desc: "1 months+ experience",
        icon:"uil2 uil-server skill-icons",
        reports: [
          {
            title: "Flutter",
            progress: "30%"
          },
          {
            title: "Dart",
            progress: "20%"

          }
        ]
      },{
        heading: "Backend Developement",
        desc: "8 months+ experience",
        icon:"uil2 uil-brackets-curly skill-icons",
        reports: [
          {
            title: "Node js",
            progress: "60%"
          },
          {
            title: "Express",
            progress: "50%"

          },
          {
            title: "MongoDB",
            progress: "90%"

          }
        ]
      },{
        heading: "AI & ML",
        desc: "6 months+ experience",
        icon:"uil2 uil-server skill-icons",
        reports: [
          {
            title: "Computer Vision",
            progress: "60%"
          },
          {
            title: "ML",
            progress: "50%"

          },
          {
            title: "Neural Network",
            progress: "30%"

          }
        ]
      }
    ]






  return (
    <div id="scroll-skills" data-aos="fade-up" className='skills'>
      <div className="container">
        <div className="content">

          <SecHead head="Skills" subhead="My technical levels" />
          <div className="all-skills">

            {
              dummySkill.map((item,i)=>{
                return(
                  <Skill idx ={i} key={i} content={item} />

                )
              })
            }
            

          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills
