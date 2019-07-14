import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import enemies from "./data/enemies/testEnemies.json";


class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      randomField: ''
    }
  }

  componentDidMount(){
       this.setState({monsters: enemies})

       function getRandomInt(max) {
         const randomInt = Math.floor(Math.random() * Math.floor(max));
         console.log(randomInt)
       }
       getRandomInt()

       }


render() {
  const { monsters, randomField } = this.state

  const randomizedMonster = monsters.filter(monster => 
    monster.id.includes(randomField)
  )

  return (
    <div className="App">
      <input 
        type='search' 
        placeholder="search monsters"
        // code below logs value of input from keyboard and console.logs it, but it has to be set as the 2nd parameter of the setState function because it is async.
        onChange={e => this.setState({ randomField: e.target.value }, () => console.log(this.state)) }/>

    <CardList monsters={randomizedMonster} />

    </div>
)
}
}
export default App;
