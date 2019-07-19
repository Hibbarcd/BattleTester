import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import enemies from "./data/enemies/testEnemies.json";
import {SearchBox} from './components/search-box/search-box.component'
import Lifecycles from './components/lifecycles/lifecycles.component'


class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      randomField: '',
      showChild: true,
      color: 'white',
    }
  }

  componentDidMount(){
       this.setState({monsters: enemies})

       function getRandomInt(max) {
          const randomInt = Math.floor(Math.random(7) + 1 );
          console.log("componentDidMount" + randomInt)
       }
       getRandomInt()
       }

       handleChange = (e)  => {
        this.setState({ randomfield: e.target.value })
      }

      buttonOnClick = () => {
        this.setState({ randomfield: Math.random(8)}, () => 
        console.log("buttonOnClick" + this.state))
      }

render() {
  const { monsters, randomField } = this.state

  const randomizedMonster = monsters.filter(monster => 
    monster.id.includes(randomField)
  )

  return (
    <div className="App">
    <button 
                onClick={() =>
                  this.setState(state => ({
                    showChild: !state.showChild
                  }))
                }
      >generate random
      </button>
      {this.state.showChild ? <Lifecycles text={this.state.text}/> : null}

      <input 
        type='search' 
        placeholder="search monsters"
        // code below logs value of input from keyboard and console.logs it, but it has to be set as the 2nd parameter of the setState function because it is async.
        onChange={e => this.setState({ randomField: e.target.value }, () => console.log(this.state)) }/>
    <SearchBox 
            placeholder="search monsters"
            handleChange={ this.handleChange }
    />
    <CardList monsters={randomizedMonster} />

    </div>
)
}
}
export default App;