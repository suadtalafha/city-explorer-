import React from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class CardMoveis extends React.Component {
    render() {
        return (
            <div>
                {this.props.showMovei &&
                <Card style={{ width: '18rem' }}>
                    
                    <Card.Body>

                        <Card.Title>Movei List</Card.Title>
                        {this.props.movieInfo.map(movies=>
                            <div>
                              <Card.Text>
                                        Movie Title :  {movies.title}
                                    </Card.Text>
                                    <Card.Text>
                                        Movie Language : {movies.original_language}
                                    </Card.Text>
                                    <Card.Text>
                                        Movie Avg. Vote :  {movies.vote_average}
                                    </Card.Text>
                                    <Card.Text>
                                        Movie Overview :  {movies.overview}
                                    </Card.Text>
                                    <Card.Text>
                                        Movie Total Vote : {movies.total_votes}
                                    </Card.Text>
                                    <Card.Text>
                                        Movie Popularity :  {movies.popularity}
                                    </Card.Text>
                                    <Card.Text>
                                        Movie Release_date :  {movies.released_on}
                                    </Card.Text>
                                    <Card.Img src={movies.image_url}
                                      />




                            </div>
                            
                            
                            )}
                       
                       
                    </Card.Body>
                </Card>}
            </div>
        )
    }
}

export default CardMoveis
