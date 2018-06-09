import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as Colors from '../constants/colors';
import { Icon } from 'react-fa';
import LinkButton from './LinkButton';
import SkillBar from 'react-skillbars';
import { Tag } from 'antd';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class Skill extends React.Component {
  render() {
    const skills = [
      { type: 'Swift', level: 90 },
      { type: 'ObjectiveC', level: 82 },
      { type: 'JavaScript', level: 87 },
      { type: 'TypeScript', level: 84 },
      { type: 'Java', level: 71 },
      { type: 'HTML5', level: 81 },
      { type: 'CSS3', level: 83 },
    ];

    const colors = {
      bar: Colors.skillBar,
      title: {
        text: Colors.white,
        background: Colors.skillBackground,
      },
    };

    return (
      <Container>
        <Title>Skills</Title>
        <SkillBar colors={colors} skills={skills} />
        <br />
        <div>
          <Tag color="#40a9ff">iOS Development</Tag>
          <Tag color="#52c41a">Android Development</Tag>
          <Tag color="#08979c">Web Development</Tag>
          <Tag color="#ff4d4f">Agile Development</Tag>
          <Tag color="#69c0ff">ReactJS</Tag>
          <Tag color="#237804">NodeJS</Tag>
          <Tag color="#722ed1">Git</Tag>
          <Tag color="#ff4d4f">Cocoapods</Tag>
          <Tag color="#5cdbd3">Bootstrap</Tag>
          <Tag color="#f759ab">JQuery</Tag>
          <Tag color="#ff85c0">Responsive Design</Tag>
          <Tag color="#95de64">MongoDB</Tag>
          <Tag color="#1890ff">MySQL</Tag>
          <Tag color="#ffd591">AWS</Tag>
          <Tag color="#d3adf7">Heroku</Tag>
          <Tag color="#10239e">Photoshop</Tag>
          <Tag color="#d48806">Object Oriented Programming</Tag>
          <Tag color="#ffa39e">Protocol Priented Programming</Tag>
          <Tag color="#9e1068">Functional Reactive Programming</Tag>
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

export default Skill;
