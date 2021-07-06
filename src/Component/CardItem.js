import React from 'react';
import { Card,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class CardItem extends React.Component {
    render() {
        return (
            <div>
                {this.props.showMap &&
                <Card style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>{this.props.cityData.display_name}</Card.Title>
                        <Card.Text>
                        {this.props.cityData.lat},{this.props.cityData.lon}
                        </Card.Text>
                        <Button onClick={this.props.ShowModal}>See The Map</Button>
                    </Card.Body>
                </Card>}
            </div>
        )
    }
}

export default CardItem
