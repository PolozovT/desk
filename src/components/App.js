import React, { Component } from 'react';
import Header from "./Header";
import ToDoItem from "./ToDoItem"
import Footer from "./Footer"
import todosData from "./todosData"
import ToDoHeader from "./ToDoHeader";
//import elems from './elems'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos:todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        //const elemComp = this.state.todos.map(elem => <Footer key = {elem.id} description = {elem.description} />)

        const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>)

        return (
            <div>
                <Header/>
                <ToDoHeader/>
                <InProgressHeader/>
                <FinishedHeader/>

                <!--<Footer/>-->
            </div>
        )
    }
}

export default App;
