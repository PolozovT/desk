import React, { Component } from 'react';
import Header from "./Header";
import ToDoHeader from "./ToDoHeader"
import InProgressHeader from "./InProgressHeader"
import FinishedHeader from "./FinishedHeader"
import "../styles/App.css"
import ToDo from "./ToDo"
import InProgress from "./InProgress"
import Finished from "./Finished"

function App() {
        return (
            <div>
                <Header/>
                <div className  ="headers">
                    <div className="1">
                        <ToDoHeader/>
                        <ToDo/>
                    </div>
                    <div className="2">
                        <InProgressHeader/>
                        <InProgress/>
                    </div>
                    <div className="3">
                        <FinishedHeader/>
                        <Finished/>
                    </div>
                </div>
            </div>
        )
}

export default App;
