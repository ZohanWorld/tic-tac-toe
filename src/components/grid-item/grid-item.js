/* eslint-disable react/state-in-constructor */
import './grid-item.css'
import { Component } from 'react'

export default class GridItem extends Component {
  state = {
    pressed: false,
  }

  onHandleClick = (event) => {
    const { pressed } = this.state
    if (pressed) {
      return null
    }
    const { turn, handleClick } = this.props
    const btn = event.target

    if (turn === 'x') {
      btn.classList.add('button', 'button-o')
    } else {
      btn.classList.add('button', 'button-x')
    }
    this.setState({ pressed: true })
    handleClick()
    return null
  }

  render() {
    return (
      <button className="button" type="submit" onClick={this.onHandleClick}>
        {null}
      </button>
    )
  }
}
