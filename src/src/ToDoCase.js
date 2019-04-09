import React from 'react'
import "./styles/ToDo.css"

function ToDoCase(props) {
    return(
        <div className="ToDo">
            <li>{props.item.text}</li>
        </div>
    )
}

export default ToDoCase