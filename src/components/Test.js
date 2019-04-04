import React, { Component } from 'react';
import '../styles/Test.css';

class App extends Component {
    render() {
        return (
            <div className="Test">
                <header className="Test-header">
                    <h1>
                        Test
                    </h1>
                    <div>
                        Список сделанного...
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
