import { Tag } from "antd";
import * as React from "react";
import styled from "styled-components";
import * as Colors from "../constants/colors";
// import SkillBar from "react-skillbars";

class Skill extends React.Component {
  public render() {
    const skills = [
      { type: "Swift", level: 90 },
      { type: "ObjectiveC", level: 82 },
      { type: "JavaScript", level: 87 },
      { type: "TypeScript", level: 84 },
      { type: "Java", level: 71 },
      { type: "HTML5", level: 81 },
      { type: "CSS3", level: 83 },
    ];

    const colors = {
      bar: Colors.skillBar,
      title: {
        background: Colors.skillBackground,
        text: Colors.white,
      },
    };

    return (
      <Container>
        <Title>Skills</Title>
        {/* <SkillBar colors={colors} skills={skills} /> */}
        <br />
        <div>
          <PopupTag color="#40a9ff">iOS Development</PopupTag>
          <PopupTag color="#52c41a">Android Development</PopupTag>
          <PopupTag color="#08979c">Web Development</PopupTag>
          <PopupTag color="#ff4d4f">Agile Development</PopupTag>
          <PopupTag color="#69c0ff">ReactJS</PopupTag>
          <PopupTag color="#237804">NodeJS</PopupTag>
          <PopupTag color="#722ed1">Git</PopupTag>
          <PopupTag color="#ff4d4f">Cocoapods</PopupTag>
          <PopupTag color="#5cdbd3">Bootstrap</PopupTag>
          <PopupTag color="#f759ab">JQuery</PopupTag>
          <PopupTag color="#ff85c0">Responsive Design</PopupTag>
          <PopupTag color="#95de64">MongoDB</PopupTag>
          <PopupTag color="#1890ff">MySQL</PopupTag>
          <PopupTag color="#ffd591">AWS</PopupTag>
          <PopupTag color="#d3adf7">Heroku</PopupTag>
          <PopupTag color="#10239e">Photoshop</PopupTag>
          <PopupTag color="#d48806">Object Oriented Programming</PopupTag>
          <PopupTag color="#ffa39e">Protocol Oriented Programming</PopupTag>
          <PopupTag color="#9e1068">Functional Reactive Programming</PopupTag>
        </div>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  background-color: white;
  padding: 15px 30px 30px 30px;
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 25px;
  color: ${Colors.textTitle};
  font-weight: bold;
  text-align: left;
`;

const PopupTag = styled(Tag)`
  margin-bottom: 6px;
`;

export default Skill;
