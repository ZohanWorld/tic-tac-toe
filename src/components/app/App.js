/* eslint-disable react/state-in-constructor */
import { Component } from 'react'

import './App.css'
import GridArea from '../grid-area/grid-area'

export default class App extends Component {
  state = {
    size: 9,
  }

  render() {
    const { size } = this.state
    return (
      <div className="wrapper">
        <GridArea size={size} />
      </div>
    )
  }
}
