import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Uploader from './Uploader'
import Reporter from './Reporter'


class Table extends Component {

	constructor(props){
		super(props);

		this.state = {
			file_content : null,
			file_destination : null,
			file_name : null,
			totalLine : 0,
			totalColumn : 4
		};
	}

	//Call to server to read content of uploaded file
	componentDidMount(){
		axios.get("http://localhost:8000?destination="+this.props.file_destination+"&filename="+this.props.file_name)
		.then((response) => {
		    this.setState({
		    	file_content: response.data.file_content,
		    	totalLine:  response.data.file_content.split('\n').length
		    });
		});
   	}

	render(){ 
		if(this.state.file_content){ 
			let delimiter = this.props.delimiter;
			let rows = this.props.lines;
			if(delimiter == ''){
				delimiter = ',';
			} 
			if(rows == ''){
				rows = 2;
			} 
			let fileText = this.state.file_content; console.log('11', fileText);
			let newText = fileText.split('\n').map((lines,key) => {
				if(key < rows){
				    return (
					  <div className="row align-items-start no-gutters" key={key}>
					    {
					    	lines.split(delimiter).map((lineItems, keyItems) => {
					    		if(keyItems < this.state.totalColumn){
						    		return (
						    				<div className="col-sm border border-dark pl-2">{lineItems}</div>
						    		)
					    		}
					    	})
					    }
					  </div>
				    )
				}
			});

			return (
					<div>{newText}</div>	  
			)		
		}

		return null;
	}

}

export default Table;