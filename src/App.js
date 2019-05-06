import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Newgame from "./components/Newgame/Newgame"
import Restart from './components/Restart/Restart';
import Difficulty from './components/Difficulty/Difficulty';
import Navbar from './components/Navbar/Navbar';
import Game from './components/Game/Game';
import Check from './components/Check/Check';

class App extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render (){
    return(
      <div>
        <Navbar />
        <Game />
        <div className="container">
          <Newgame />
          <Difficulty />
          <Restart />
        </div>
        <Check />
      </div>
          )
  }
}

export default App;
