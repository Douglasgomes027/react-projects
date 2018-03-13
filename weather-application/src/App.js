import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';

class App extends Component {
  render() {
    return (
      <div>
        <Title title={"Title"} subtitle={"Subtitle"}/>       
      </div>
    );
  }
}

export default App;
