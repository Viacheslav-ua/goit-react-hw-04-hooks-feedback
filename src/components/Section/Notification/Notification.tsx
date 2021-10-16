import React from "react";
import S from "./Notification.module.css";

const Notification: React.FC<{ message: string }> = ({ message }) => {
  return <span className={S.message}>{message}</span>;
};

export default Notification;
