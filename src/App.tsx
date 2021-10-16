import React from "react";
import Section from "./components/Section/Section";
import Statistics from "./components/Section/Statistics/Statistics";
import FeedbackOptions from "./components/Section/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Section/Notification/Notification";

interface StateType {
  good: number;
  neutral: number;
  bad: number;
}

interface PropsType {
  initialGood: number;
  initialNeutral: number;
  initialBad: number;
}

class App extends React.Component<PropsType> {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  state: StateType = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  onLeaveFeedback = (e: React.MouseEvent<HTMLButtonElement>) => {
    switch (e.currentTarget.name) {
      case "good":
        this.setState((currentState: StateType) => {
          return { good: currentState.good + 1 };
        });
        break;
      case "neutral":
        this.setState((currentState: StateType) => {
          return { neutral: currentState.neutral + 1 };
        });
        break;
      case "bad":
        this.setState((currentState: StateType) => {
          return { bad: currentState.bad + 1 };
        });
        break;
    }
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const result: any = Math.round(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    );
    return Number.isNaN(result) ? 0 : result;
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        {this.state.good || this.state.neutral || this.state.bad ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    );
  }
}

export default App;
