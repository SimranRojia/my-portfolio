import React from 'react'
import './eachrepo.scss'

function EachReport({content}) {
    const style={
        width:`${content.progress}`

    }
  return (
    <div className="each-report">

    <div className="top">
        <h6 className="html-skill">{content.title}</h6>
        <p className="percent">{content.progress}</p>

    </div>
    <div className="bottom">
        <span style={style} className='progress-line for-html' />

    </div>
</div>
  )
}

export default EachReport
