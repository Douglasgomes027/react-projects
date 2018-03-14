import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Board from './components/Board'
import Button from './components/Button'
import GameResults from './components/GameResults'

class App extends Component {
  render() {
    return (
      <body>
        <div className="container">
          <Title/>
          <Button/>
          <GameResults/>
          <Board/>
        </div>
    </body>
    );
  }
}

export default App;
