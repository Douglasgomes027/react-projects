import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY ='e5fc1bde853c8c0331714064bf294712'

class App extends Component {
  state={
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) =>{
    e.preventDefault();
    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${country}&APPID=${API_KEY}`)

    const data = await api_call.json()
      if(city && country){
        console.log(data)
        this.setState({
        temperature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:""
      })
    }else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error:"Please enter the values."
      })
    }    
  }

  render() {
    return (
      <div>
        <Title title={"Weather Application"} subtitle={"Discover the weather in your country"}/>
        <Form getWeather={this.getWeather}/>
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.description}
          description={this.state.description}
          error={this.state.error}
        />        
      </div>
    );
  }
}

export default App;
