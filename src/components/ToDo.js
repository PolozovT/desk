import React, { Component } from 'react';
import '../styles/ToDo.css';

class App extends Component {
    render() {
        return (
            <div className="ToDo">
                <input type="text" />
                <input type="button" value="add"/>
                <ul>
                    <li></li>
                </ul>
            </div>
        );
    }
}

export default App;
