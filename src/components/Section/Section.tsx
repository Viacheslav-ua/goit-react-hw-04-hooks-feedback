import React,{useState} from "react";
import S from "./Section.module.css";
interface PropsType {
  title: string;
  children: React.ReactChild | React.ReactNode;
}
const Section: React.FC<PropsType> = ({children, title}) => {

  return (
    <div className={S.section}>
      <h1 className={S.title}>{title}</h1>
      {children}
    </div>
  )
}
export default Section;
