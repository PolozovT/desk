import React, { Component } from 'react';
import '../styles/ToDo.css';

class ToDo extends Component {
    render() {
        return (
            <div className="ToDo">
                <input type="text" />
                <input type="button" value="add"/>
            </div>
        )
    }
}

export default ToDo;
