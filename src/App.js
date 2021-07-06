import React from 'react';
import axios from 'axios';
import ModalItem from './Component/ModalItem';
import CardItem from './Component/CardItem';
import './App.css'
import WeatherCard from './Component/WeatherCard';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cityData: {},
      search: '',
      showMap: false,
      WeatherInfor: [],
      showModal: false,
      showWeather: false

    }
  }
  getLocation = async (e) => {
    e.preventDefault();

    await this.setState({
      search: e.target.city.value
    })
    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.search}&format=json`;

    let respData = await axios.get(url);
    // console.log(respData)
    await this.setState({
      cityData: respData.data[0],
      showMap: true,

    })
    //https://explorer-city-api.herokuapp.com/
    this.getWeather()
  }
  getWeather = async () => {
    const city = this.state.search.charAt(0).toUpperCase() + this.state.search.slice(1);

    // let url = `https://explorer-city-api.herokuapp.com/weatherinfo?search=Amman&format=json`
    let url = `http://localhost:3001/weatherinfo?cityName=${city}`
    let weatherData = await axios.get(url);
    console.log(weatherData.data)
     this.setState({
      WeatherInfor: weatherData.data,
      showWeather: true,


    })
    // console.log(this.state.weatherInfo)
  }
  ShowModal =  () => {
     this.setState({
      showModal: true,
    })
  }
  handelClose = () => {
    this.setState({
      showModal: false,
    })
  }

  render() {
    return (
      <div className="main">
        <div>
          <h1>City Explorer</h1>
          <form onSubmit={this.getLocation}>
            <input type='text' placeholder='city name' name='city' />
            <input type='submit' value='Explore' />

          </form>
          {/* <p>City Name: {this.state.cityData.display_name},{this.state.cityData.lat},{this.state.cityData.lon}</p>
     {this.state.showMap && 
        <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=15`} />
        }   
        <p>{this.state.weatherData}</p> */}
        </div>

        <CardItem cityData={this.state.cityData} showMap={this.state.showMap} ShowModal={this.ShowModal} />
        <ModalItem handelClose={this.handelClose} showModal={this.state.showModal} cityData={this.state.cityData} />
        <WeatherCard cityData={this.state.cityData} showWeather={this.state.showWeather} WeatherInfor={this.state.WeatherInfor} getWeather={this.getWeather} />
      </div>


    )
  }


}
export default App