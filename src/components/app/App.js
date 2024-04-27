/* eslint-disable react/state-in-constructor */
import { Component } from 'react'

import './App.css'
import GridArea from '../grid-area/grid-area'

export default class App extends Component {
  state = {
    turn: 'x',
    size: 9,
  }

  handleClick = () => {
    const { turn: turn2 } = this.state
    this.setState(({ turn }) => {
      if (turn === 'x') {
        return { turn: 'o' }
      }

      return { turn: 'x' }
    })
    console.log(turn2)
  }

  render() {
    const { size, turn } = this.state
    return (
      <div className="wrapper">
        <GridArea size={size} turn={turn} handleClick={this.handleClick} />
      </div>
    )
  }
}
