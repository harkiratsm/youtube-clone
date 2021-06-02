import React from 'react'
import '../css/Siderow.css'
function Siderow({selected,Icon,title}) {
    return (
        <div className={`siderow-container ${selected && "selected"}`}>
            <Icon className="icons"/>
            <h2>{title}</h2>
        </div>
    )
}

export default Siderow
