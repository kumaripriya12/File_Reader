import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Lines extends Component {

	constructor(){
		super();

		this.state = {
			lineError : null,
			totalLine : 4
		};

		this.onInputChange = this.onInputChange.bind(this);

	}

	onInputChange(name, value){
		this.props.handler('lines', value.target.value);
		if(name == 'lines' && (value.target.value > this.state.totalLine)){
			this.setState({ 
				lineError : 'There are only '+this.state.totalLine+' records.'
			});
		}
		else {
			this.setState({
				lineError : null
			});
		}
	} 

	render(){
		return (
			<div className="col-sm form-group">
			    <label for="inputLines">Lines</label>
			    <input className="form-control" 
			    onChange={value => this.onInputChange('lines', value)} value={this.props.lines} />
			    <div className="invalid-feedback d-block">
    				{this.state.lineError}
  				</div>
			</div>
		)
	}

}

export default Lines;