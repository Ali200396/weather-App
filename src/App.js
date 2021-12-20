import React , {Component} from 'react';
import Form from './Components/Form';
import Weather from './Components/Weather';
import './App.scss'

const API_Key = "9504f9fc36285e86a146f694ec5efdb9"; 
// http://api.openweathermap.org/data/2.5/weather?q=cairo,egypt&appid=e36ed364400282e43250b6c4c0274d44
class App extends Component {

  state = {
    city: '',
    country : '',
    temprature: '',
    humidity : '',
    description: '',
    error:''
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`);
    const data = await api.json();
    console.log(data);
    if(city && country){
      this.setState({
        city:data.name,
        country:data.sys.country,
        temprature:Math.floor(data.main.temp - 273),
        description:data.weather[0].description,
        humidity: data.main.humidity, 
        error: '',
      })
    }else{
      this.setState({
        city: '',
        country : '',
        temprature: '',
        humidity : '',
        description: '',
        error:'please enter data'
      })
    }
    
  }

  render(){
    return (
      <div className="wrapper">
        <div className="form-container">
          <Form getWeather={this.getWeather}/>
          <Weather city={this.state.city} country={this.state.country} temprature={this.state.temprature} description={this.state.description} humidity= {this.state.humidity} error={this.state.error}/>
        </div>
      </div>
    )
  }
  
}

export default App;
