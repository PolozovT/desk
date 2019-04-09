import React from 'react'
import "./styles/Finished.css"

function FinishedCase(props) {
    return(
        <div className="Finished">
            <li>{props.item.text}</li>
        </div>
    )
}

export default FinishedCase