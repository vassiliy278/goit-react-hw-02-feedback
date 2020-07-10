import React, {Component} from 'react'
import Section from './components/Section'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  }
  
  goodInc = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
        total: prevState.total + 1,
      }
    })}
  neutralInc = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
        total: prevState.total + 1
      }
    })}
  badInc = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
        total: prevState.total + 1
      }
    })}

  render() {
    return (
      <Section
      title={'Please Leave Feedback'}
      state={this.state}
      goodInc={this.goodInc}
      neutralInc={this.neutralInc}
      badInc={this.badInc}/>
    )
  }
}


export default App