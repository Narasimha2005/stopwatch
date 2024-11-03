import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    minutes: 0,
    seconds: 0,
  }

  increaseTimer = () => {
    this.timerId = setInterval(() => {
      this.setState(prevState => {
        if (prevState.seconds === 59) {
          return {seconds: 0, minutes: prevState.minutes + 1}
        }
        return {seconds: prevState.seconds + 1}
      })
    }, 1000)
  }

  clearTimeInterval = () => {
    clearInterval(this.timerId)
  }

  startButtonClick = () => {
    this.increaseTimer()
  }

  stopButtonClick = () => {
    this.clearTimeInterval()
  }

  resetButtonClick = () => {
    clearInterval(this.timerId)
    this.setState({
      minutes: 0,
      seconds: 0,
    })
  }

  render() {
    const {minutes, seconds} = this.state
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds % 60 > 9 ? seconds : `0${seconds % 60}`

    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="card">
            <div className="timer-heading-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="timer-heading">Timer</p>
            </div>
            <h1 className="timer">{`${stringifiedMinutes}:${stringifiedSeconds}`}</h1>
            <div>
              <button
                className="button start-button"
                type="button"
                onClick={this.startButtonClick}
              >
                Start
              </button>
              <button
                className="button stop-button"
                type="button"
                onClick={this.stopButtonClick}
              >
                Stop
              </button>
              <button
                className="button reset-button"
                type="button"
                onClick={this.resetButtonClick}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
