import React from 'react';
import axios from 'axios';
import ModalItem from './Component/ModalItem';
import CardItem from './Component/CardItem';
import './App.css'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cityData:{},
      search:'',
      showMap:false,
      showModal:false,
     

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
      showMap:true,
      
    })
    
  }
  // getWeather =async()=>{
  //   let weatherData=await axios.get(`${process.env.REACT_APP_SERVER}/}`);
  //   this.setState({
  //     weatherInfo=weatherData.data
  //   })
  // }
  ShowModal=()=>{
    this.setState({
      showModal:true,
    })
  }
  handelClose=()=>{
  this.setState({
    showModal:false,
  })
  }
  
  render() {
    return (
      <div className="main">
 <div>
     <h1>City Explorer</h1>
     <form onSubmit={this.getLocation}>
     <input type='text' placeholder='city name' name='city'/>
          <input type='submit' value='Explore'/>

     </form>
     {/* <p>City Name: {this.state.cityData.display_name},{this.state.cityData.lat},{this.state.cityData.lon}</p>
     {this.state.showMap && 
        <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=15`} />
        }   
        <p>{this.state.weatherData}</p> */}
      </div>

      <CardItem cityData={this.state.cityData} showMap={this.state.showMap} ShowModal={this.ShowModal} />
      <ModalItem  handelClose={this.handelClose} showModal={this.state.showModal}    cityData={this.state.cityData}    />
      </div>
     
    
    )
  }


}

export default App
