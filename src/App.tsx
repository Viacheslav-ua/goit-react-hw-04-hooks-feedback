import React,{useState}  from "react";
import Section from "./components/Section/Section";
import Statistics from "./components/Section/Statistics/Statistics";
import FeedbackOptions from "./components/Section/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Section/Notification/Notification";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (e: React.MouseEvent<HTMLButtonElement>) => {
    switch (e.currentTarget.name) {
      case "good":
        setGood((state: number) => state + 1);
        break;
      case "neutral":
        setNeutral((state: number) => state + 1);
        break;
      case "bad":
        setBad((state: number) => state + 1);
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const result: any = Math.round(
      (good /
        (good + neutral + bad)) *
        100
    );
    return Number.isNaN(result) ? 0 : result;
  };

  return (
    <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
        {good || neutral || bad ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    );
}
export default App;
