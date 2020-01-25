import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Completed from './Completed';
import Uncompleted from './Uncompleted';

export default class Appointments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            completed: true,
            uncompleted: false
        }
    } 

    handleComplete = e => {
        e.preventDefault();
        this.setState({
            completed: !this.state.completed,
            uncompleted: !this.state.completed
        })
    }
    render() {
        return (
			<div>
				<button onClick={this.handleComplete}>Completed</button>
				<button onClick={this.handleComplete}>UnCompleted</button>
				{this.state.completed ? <Completed /> : <Uncompleted />}
			</div>
		);
    }
}
