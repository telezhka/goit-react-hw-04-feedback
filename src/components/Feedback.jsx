import React, { Component } from 'react';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
export class Counter extends Component {
  static defaultProps = {
    step: 1,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    let { good, total } = this.state;
    total = this.countTotalFeedback();
    const percentage = (good / total) * 100;
    return percentage.toFixed(1);
  };

  handleLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + this.props.step,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);
    const isFeedbackCollected = total > 0;

    return (
      <div>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>

        {isFeedbackCollected ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
