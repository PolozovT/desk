import React, { Component } from 'react';
import '../styles/ToDo.css';

class ToDo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.defaultOpen
        }
    }

    render() {
        return (
            <div className="ToDo">
                <input type="text" />
                <input type="button" value="add"/>
                <button onClick={this.handleClick}>close</button>
            </div>
        )
    }

    handleClick = () => {
        console.log('---','clicked');
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default ToDo;
