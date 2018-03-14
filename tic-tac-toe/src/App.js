import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Board from './components/Board'
import Button from './components/Button'
import GameResults from './components/GameResults'

class App extends Component {
  

  marcarBoard(){
      
      alert("Clicou");
  }

  render() {
    return (      
      <div className="container">
        <Title/>
        <Button/>
        <GameResults/>
        <button onClick={this.marcarBoard} className="btn btn-primary playAgain">
              Clique para alertar
          </button>
        <Board onClick={this.marcarBoard}/>
      </div>    
    );
  }
}

export default App;
