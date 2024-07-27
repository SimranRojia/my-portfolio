import React from 'react'
import './sechead.scss'


function SecHead(prop) {
    return (

        <div className="header">
            <h1 className="head">
                {prop.head}
            </h1>
            <h6 className="intro">
               {prop.subhead}
            </h6>

        </div>


    )
}

export default SecHead
