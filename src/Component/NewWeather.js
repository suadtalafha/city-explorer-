import React from 'react'
import { Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 class NewWeather extends React.Component {
    render() {
        return (
            <div>
                   {this.props.showNewWeather &&
                    <Card style={{ width: '18rem' }}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>Weather fot today</Card.Title>

                            {this.props.newWeather.map(val => 
                                <div>

                                    <Card.Text>
                                        {val.data}
                                        
                                    </Card.Text>
                                    <Card.Text>
                                        {val.description}
                                        
                                    </Card.Text>

                                </div>
                            )}

                         
                        </Card.Body>
                    </Card>}
            </div>
        )
    }
}

export default NewWeather
