import React from 'react'
import './tech.scss'

function Tech({stack}) {
  return (
    <div className='tech'>
        <div className="content center">
            <div className="logo center">
                <img src={stack.logo} alt="" />

            </div>
            <div className="title">
                {stack.head}
            </div>
        </div>
      
    </div>
  )
}

export default Tech
