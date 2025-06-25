import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    heads: 0,
    tails: 0,
    total: 0,
    even: false
  }
  onToss = () => {
    const { even } = this.state
    const number = Math.floor(Math.random() * 100)
    this.setState({ even: number % 2 === 0 })
    if (even) {
      this.setState((prevState) => ({ heads: prevState.heads + 1 }))
      this.setState((prevState) => ({ total: prevState.total + 1 }))
    }
    else {
      this.setState((prevState) => ({ tails: prevState.tails + 1 }))
    }
  }
  render() {
    const { heads, tails, total, even } = this.state
    return (
      <div class="card-container">
        <div className='coin-container'>
          <h1 className='game-heading'>Coin Toss Game</h1>
          <h4 className='heading'>Heads (or) Tails</h4>
          <div className='coin-img-container'>
            {even ? <img className='coin-img' src="https://assets.ccbp.in/frontend/react-js/heads-img.png" alt="heads" /> :
              <img className='coin-img' src="https://assets.ccbp.in/frontend/react-js/tails-img.png" alt="tails" />}
          </div>
          <button className='button' onClick={this.onToss}>Toss Coin</button>
          <div className='counts-container'>
            <p>Total: <span>{total}</span></p>
            <p>Heads: <span>{heads}</span></p>
            <p>Tails: <span>{tails}</span></p>
          </div>
        </div>
      </div>
    )
  }
}

export default App