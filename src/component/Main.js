import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Uploader from './Uploader'
import Reporter from './Reporter'

class Main extends Component {

	constructor(){
		super();

		this.state = {
			file_content : null,
			file_destination : null,
			file_name : null
		};

		this.onFileChange = this.onFileChange.bind(this);
		this.mainHandler = this.mainHandler.bind(this);

	}

	//Handle file change, sets the states with file_destination & file_name
	onFileChange(value){ 
		this.setState({
			file_destination : value.destination,
			file_name : value.filename
		});
	}

	//To show only Uploader component
	mainHandler(){
		this.setState({
			file_destination : null,
			file_name : null
		});
	}

	render(){
		if(this.state.file_destination && this.state.file_name){
			return <Reporter file_destination={this.state.file_destination} file_name={this.state.file_name} mainHandler={this.mainHandler}/>
		}
		else {
			return <Uploader fileContentHandler={this.onFileChange} />
		}
	}

}

export default Main;