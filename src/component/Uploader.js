import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Delimiter from './Delimiter'
import Lines from './Lines'

class Uploader extends Component {

	constructor(){
		super();
		this.state = {
			selectedFile : null,
			selectedFileName : "Choose file",
			uploadStatus : false,
			fileError : null
		};

		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.onUploadClick = this.onUploadClick.bind(this);
	}

	//Select file handler, file type validation and set selectde file and selected file name states
	//Params : event
	onChangeHandler(event){
		if(event.target.files[0].type != 'text/plain'){
			this.setState({
				fileError : 'Please select only text file.'
			});
		}
		else{
			this.setState({
				selectedFile : event.target.files[0],
				selectedFileName : event.target.files[0].name,
				fileError : null
			});
		}
	}

	//File upload method using axios, call to node server
	//Params : event
	onUploadClick(event){
		event.preventDefault();

		if((this.state.fileError == null) && (this.state.selectedFile)){
			const data = new FormData() 
	    	data.append('file', this.state.selectedFile)

	    	axios.post("http://localhost:8000/upload", data, {
	    	})
		    .then((response) => { 
		  		this.props.fileContentHandler(response.data);
		    })
		}
	}

	render () {		
		return ( 
			<div className="container w-50 pt-5">
				<form enctype="multipart/form-data" method="POST"> 
					<div className="custom-file">
					    <input type="file" className="custom-file-input" name="myFile" accept='.txt' 
					    onChange={this.onChangeHandler}/>
					    <div className="invalid-feedback d-block">
            				{this.state.fileError}
          				</div>
					    <label className="custom-file-label" for="customFile">{this.state.selectedFileName}</label>
				  	</div>					   
				   <button type="button" className="btn btn-success btn-block mt-5" onClick={this.onUploadClick}>Upload</button>
				</form>
			</div>
		)
	}
}

export default Uploader;