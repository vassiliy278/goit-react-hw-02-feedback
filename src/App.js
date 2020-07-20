import React, {Component} from 'react'
import Section from './components/Section'
import Statistics from './components/Statistics'
import FeedbackOption from './components/FeedbackOptions'
import Notification from './components/Notification'

export default class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0
  }
  handleChange = ({target}) => {
    const { name } = target
    this.setState((prevState) => ({
      [name]: prevState[name] + 1
    }))
  }
  totalFeedbackCounter = () => {
    const { Good, Neutral, Bad } = this.state;
    return Good + Neutral + Bad
  }
  positivePercentageCounter = () => {
    const {Good} = this.state
    if (this.totalFeedbackCounter()){
      return Math.floor((Good/this.totalFeedbackCounter())*100)
    }
  }
  render() {
    const { Good, Neutral, Bad } = this.state;
    return (
      <>
        <Section title="Please Leave Feedback">
          <FeedbackOption  onLeaveFeedback={this.handleChange} options={this.state}/>
        </Section>
        {this.totalFeedbackCounter() ? <Section title="Feedback">
          <Statistics 
          Good={Good} 
          Neutral={Neutral} 
          Bad={Bad} 
          total={this.totalFeedbackCounter()} 
          positivePercentage={this.positivePercentageCounter()}/>
        </Section> : <Notification message="No feedback given"/>}
      </>
    )
  }
}
