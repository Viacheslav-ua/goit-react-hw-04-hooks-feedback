import React from "react";
import S from "./Statistics.module.css";

interface PropsType {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: number;
}
const Statistics: React.FC<PropsType> = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <h2 className={S.title}>Statistics</h2>
      <div className={S.statistics}>
        <span className={S.value}>Good: {good}</span>
        <span className={S.value}>Neutral: {neutral}</span>
        <span className={S.value}>Bad: {bad}</span>
        <span className={S.value}>Total: {total}</span>
        <span className={S.value}>Positive feedback: {positivePercentage}</span>
      </div>
    </>
  );
};

export default Statistics;
