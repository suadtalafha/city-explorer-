import React from 'react';
import axios from 'axios';


export class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cityData:{},
      search:'',
      showMap:false,

    }
  }
  getLocation = async (e) => {
    e.preventDefault();

    await this.setState({
     search: e.target.city.value
    })
    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.search}&format=json`;

    let respData = await axios.get(url);
    this.setState({
      cityData:respData.data[0],
      showMap:true
    })
    
  }
  render() {
    return (
      <div>
     <h1>City Explorer</h1>
     <form onSubmit={this.getLocation}>
     <input type='text' placeholder='city name' name='city'/>
          <input type='submit' value='Explore'/>

     </form>
     <p>City Name: {this.state.cityData.display_name},{this.state.cityData.lat},{this.state.cityData.lon}</p>
     {this.state.showMap && 
        <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=15`} />
        }   
      </div>
    )
  }
}

export default App
