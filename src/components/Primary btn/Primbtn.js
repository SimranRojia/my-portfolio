import React from 'react'
import './primbtn.scss'

function Primbtn(props) {
    
    return (
        <div >
            <span >

                <div className="btn-portfolio btn  btn-prim">
                    {props.value}
                    {props.icon}

                </div>
            </span>

        </div>
    )
}

export default Primbtn
