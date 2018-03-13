import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY ='e5fc1bde853c8c0331714064bf294712'

class App extends Component {
  getWeather = async () =>{
    const api_call = await fetch(`http://samples.openweathermap.org/data/2.5/
    weather?q=London,uk&appid=${API_KEY}`)

    const data = await api_call.json()

    console.log(data)
  }

  render() {
    return (
      <div>
        <Title title={"Title"} subtitle={"Subtitle"}/>
        <Form/>
        <Weather/>        
      </div>
    );
  }
}

export default App;
