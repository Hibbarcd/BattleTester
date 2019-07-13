import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import enemies from "./testEnemies.json";


class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchfield: ''
    }
  }

  componentDidMount(){
       this.setState({monsters: enemies})
     }

render() {
  return (
    <div className="App">
      <input 
        type='search' 
        placeholder="search monsters"
        // code below logs value of input from keyboard and console.logs it, but it has to be set as the 2nd parameter of the setState function because it is async.
        onChange={e => this.setState({ searchfield: e.target.value }, () => console.log(this.state)) }/>

    <CardList monsters={this.state.monsters} />

    </div>
)
}
}
export default App;
