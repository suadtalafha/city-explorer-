import React from 'react';
import { Modal } from 'react-bootstrap';
import { Card,Button } from 'react-bootstrap';


 class ModalItem extends React.Component {
    render() {
        return (
            <div>
                   <Modal show={this.props.showMap} onHide={this.props.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.cityData.display_name}</Modal.Title>
        </Modal.Header>
        <Card.Img  src={`http://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=15`} /> 
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={this.props.handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
            </div>
        )
    }
}

export default ModalItem
