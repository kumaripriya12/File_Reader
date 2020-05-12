import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Delimiter extends Component {

	constructor(props){
		super(props);

		this.onInputChange = this.onInputChange.bind(this);

	}

	onInputChange(name, value){ 
		this.props.handler(name, value.target.value)
	} 

	render(){
		let delimiter = this.props.delimiter;
		return (
			<div className="col-sm form-group">
			    <label for="inputDelimiter">Delimiter</label>
			    <input className="form-control" 
			    onChange={value => this.onInputChange('delimiter', value)} value={delimiter} />
			</div>
		)
	}

}

export default Delimiter;