import React from 'react';
import { Button } from 'react-bootstrap';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';


const EditProjectModal = React.createClass({
	getInitialState() {
		return { showModal: false };
	},

	processSubmit(e) {
		console.log(params);
	},

	close() {
		this.setState({ showModal: false });
	},

	open() {
		this.setState({ showModal: true });
	},

	render() {
		return (
		  <div>
		    <Button
		      	onClick={this.open}>
		    	Edit
		    </Button>
		    <div className="static-modal">
			    <Modal isOpen={this.state.showModal} onHide={this.close}>
			      <ModalHeader closeButton>
    				<ModalClose onClick={this.hideModal}/>
			        <ModalTitle>Edit Project</ModalTitle>
			      </ModalHeader>
			      <ModalBody>
			          <form>
			            <div className="form-group">
			              <label for="recipient-name" className="form-control-label">Recipient:</label>
			              <input type="text" className="form-control" id="recipient-name"/>
			            </div>
			            <div className="form-group">
			              <label for="message-text" className="form-control-label">Message:</label>
			              <textarea className="form-control" id="message-text"/>
			            </div>
			          </form>
			      </ModalBody>
				  <ModalFooter>
				    <button className='btn btn-default' onClick={this.close}>
				      Close
				    </button>
				    <button className='btn btn-primary'>
				      Save changes
				    </button>
				  </ModalFooter>
			    </Modal>
		    </div>
		  </div>
		);
	}
});
export default EditProjectModal;