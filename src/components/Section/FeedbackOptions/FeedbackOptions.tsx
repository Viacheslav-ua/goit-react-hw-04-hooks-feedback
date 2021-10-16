import React from "react";
import S from "./FeedbackOptions.module.css";
interface PropsType {
  onLeaveFeedback: any;
}

const FeedbackOptions: React.FC<PropsType> = ({ onLeaveFeedback }) => {
  return (
    <div className={S.control}>
      <button
        type="button"
        className={S.btn}
        name="good"
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        type="button"
        className={S.btn}
        name="neutral"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        type="button"
        className={S.btn}
        name="bad"
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
