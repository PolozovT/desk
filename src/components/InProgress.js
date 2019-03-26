import React, { Component } from 'react';
import '../styles/InProgress.css';

class App extends Component {
    render() {
        return (
            <div className="InProgress">
                <header className="InProgress-header">
                    <h1>
                        In Progress
                    </h1>
                    <div>Дела в процессе...</div>
                </header>
            </div>
        );
    }
}

export default App;
