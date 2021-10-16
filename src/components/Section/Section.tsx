import React from "react";
import S from "./Section.module.css";
interface PropsType {
  title: string;
  children: React.ReactChild | React.ReactNode;
}

class Section extends React.Component<PropsType> {
  render() {
    return (
      <div className={S.section}>
        <h1 className={S.title}>{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}
export default Section;
