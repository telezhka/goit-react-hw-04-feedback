import React, { Component, useState } from 'react';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
export function Feedback() {
  // static defaultProps = {
  //   step: 1,
  // };
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  let total = 0;

  const countTotalFeedback = () => {
    // const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    // let { good, total } = this.state;
    total = countTotalFeedback();
    const percentage = (good / total) * 100;
    return percentage.toFixed(1);
  };
  const countGood = () => {
    setGood(good + 1);
  };
  const countNeutral = () => {
    setNeutral(neutral + 1);
  };
  const countBad = () => {
    setBad(bad + 1);
  };
  // const handleLeaveFeedback = option => {
  //   this.setState(prevState => ({
  //     [option]: prevState[option] + this.props.step,
  //   }));
  // };

  // render() {
  //   const { good, neutral, bad } = this.state;
  //   const total = this.countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();
  // const options = { good, neutral, bad };
  const isFeedbackCollected = total > 0;

  return (
    <div>
      <Section title="Please leave Feedback">
        <FeedbackOptions
          setGood={countGood}
          setBad={countBad}
          setNeutral={countNeutral}
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
  // }
}
