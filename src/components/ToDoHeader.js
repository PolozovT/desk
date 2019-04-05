import React from 'react';
import '../styles/ToDoHeader.css';

function ToDoHeader(){
        return (
            <div className="ToDo">
                <header className="ToDo-header">
                    <h1>
                        ToDo
                    </h1>
                    <div>
                        План дел...
                    </div>
                </header>
            </div>
        );
}

export default ToDoHeader;
