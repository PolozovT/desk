import React, { Component } from 'react';
import '../styles/ToDo.css';

class App extends Component {
    render() {
        return (
            <div className="ToDo">
                <header className="ToDo-header">
                    <h1>
                        ToDo
                    </h1>
                    <div>
                        План дел...
                    </div>
                    <input type="text" value={"write..."} />
                    <ul>
                        <li></li>
                    </ul>
                </header>
            </div>
        );
    }
}

export default App;
