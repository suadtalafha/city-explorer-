import React from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class WeatherCard extends React.Component {
    render() {
        return (
            <div>
                {this.props.showWeather &&
                    <Card style={{ width: '18rem' }}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>{this.props.cityData.display_name}</Card.Title>

                            {this.props.WeatherInfor.map(val => 
                                <div>

                                    <Card.Text>
                                        {val.data}
                                        
                                    </Card.Text>
                                    <Card.Text>
                                        {val.description}
                                        
                                    </Card.Text>

                                </div>
                            )}

                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>}
            </div>
        )
    }
}

export default WeatherCard
