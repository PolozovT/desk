import React from 'react'
import "./styles/InProgress.css"

function InProgressCase(props) {
    return(
        <div className="InProgress">
            <li>{props.item.text}</li>
        </div>
    )
}

export default InProgressCase