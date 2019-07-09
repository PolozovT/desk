import React, { Component } from 'react';
import Header from "./components/Header";
import ToDoHeader from "./ToDo/ToDoHeader"
import InProgressHeader from "./InProgress/InProgressHeader"
import FinishedHeader from "./Finished/FinishedHeader"
import "./styles/App.css"
import ToDo from "./ToDo/ToDo"
import InProgress from "./InProgress/InProgress"
import Finished from "./Finished/Finished"
import todoCases from "./ToDoCases"
import ToDoCase from "./ToDoCase"
import inprogressCases from "./InProgressCases"
import InProgressCase from "./InProgressCase"
import finishedCases from "./FinishedCases"
import FinishedCase from "./FinishedCase"

class App extends Component{
    constructor(){
        super()
    };

    render()
    {
        const tdCases = todoCases.map(item => <ToDoCase key={item.id} item = {item}/>)
        const ipCases = inprogressCases.map(item => <InProgressCase key={item.id} item={item}/>)
        const fCases = finishedCases.map(item => <FinishedCase key={item.id} item={item}/>)

        return (
            <div>
                <Header/>
                <div className="headers">
                    <div className="1">
                        <ToDoHeader/>
                        <ToDo/>
                        {tdCases}
                    </div>
                    <div className="2">
                        <InProgressHeader/>
                        <InProgress/>
                        {ipCases}
                    </div>
                    <div className="3">
                        <FinishedHeader/>
                        <Finished/>
                        {fCases}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
