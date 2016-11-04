﻿import React from 'react';
import { Button } from 'react-bootstrap';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';

const EditFormModal = React.createClass({
	getInitialState() {
		return { showModal: false };
	},

	processSubmit(e) {
		console.log(e);
	},

	close() {
		this.setState({ showModal: false });
	},

	open() {
		this.setState({ showModal: true });
	},

	submitForm($form) {
		let { formFields, handleResult, data } = this.props;
		
		for(let p in data) {
			let $input = $('#' + p, $form);

			if( !($input[0]) )
				continue;

			data[p] = $input[0].value;
		}

		handleResult(data);

		this.close();
	},

	render() {
		let { title, modalButtonName, formFields, handleResult, data } = this.props;

		return (
		  <div>
		    <Button 
			    onClick={this.open}
			    bsStyle="warning">
		    	{modalButtonName}
		    </Button>

		    <div className="static-modal">
			    <Modal isOpen={this.state.showModal} onHide={this.close}>
			      <ModalHeader>
					<ModalClose onClick={this.close}/>
			        <ModalTitle>{title}</ModalTitle>
			      </ModalHeader>
			      <ModalBody>
			          <form id='form'>
			          {
				        formFields.map(function(element, index) {
				        	return (
					        	<div className="form-group" key={index}>
					              <label htmlFor={element.name} className="form-control-label">{element.label}:</label>
					              <input type="text" className="form-control" id={element.name} defaultValue={data[element.name]}/>
					            </div>
				        	);
				        })    
			          }
			          </form>
			      </ModalBody>
				  <ModalFooter>
				    <button className='btn btn-default' onClick={this.close}>
				      Close
				    </button>
				    <button className='btn btn-primary' onClick={this.submitForm.bind(null, $('#form'))}>
				      Save
				    </button>
				  </ModalFooter>
			    </Modal>
		    </div>
		  </div>
		);
	}
});

export default EditFormModal;