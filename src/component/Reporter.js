import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Delimiter from './Delimiter'
import Lines from './Lines'
import Table from './Table'
import Main from './Main'


class Reporter extends Component {

	constructor(props){
		super(props);
		this.state = {
			delimiter : ',',
			lines : 2
		};

		this.handleChange = this.handleChange.bind(this);
		this.onBack = this.onBack.bind(this);
	}

	//Called by clild component to update states when delimiter or lines value changes
	//Param : name, value
	handleChange(name, value){
		this.setState({
			[name] : value
		});
	}

	//Handle back click
	onBack(){ 
		this.props.mainHandler();
	}

	render(){
		return(
			<div className="container pt-5">
				<div className="row">
					<Delimiter delimiter={this.state.delimiter} handler={this.handleChange}/>
					<Lines lines={this.state.lines} handler={this.handleChange}/>
				</div>
				<Table file_destination={this.props.file_destination} file_name={this.props.file_name} 
				delimiter={this.state.delimiter} lines={this.state.lines}/>
				<button type="button" className="btn btn-light mt-5" onClick={this.onBack}>Back</button>
			</div>
		)
	}

}

export default Reporter;