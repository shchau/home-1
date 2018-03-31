import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as Colors from '../constants/colors';
import { Icon } from 'react-fa';
import LinkButton from './LinkButton';
import SkillBar from 'react-skillbars';

class Skill extends React.Component {
  render() {
    const skills = [
      { type: 'Swift', level: 90 },
      { type: 'ObjectiveC', level: 85 },
      { type: 'JavaScript', level: 85 },
      { type: 'TypeScript', level: 80 },
      { type: 'Java', level: 75 },
      { type: 'HTML5', level: 75 },
      { type: 'CSS3', level: 75 },
    ];

    const colors = {
      bar: '#3498db',
      title: {
        text: '#fff',
        background: '#2980b9',
      },
    };

    return (
      <Container>
        <Title>Skills</Title>
        <SkillBar colors={colors} skills={skills} />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  background-color: white;
  padding: 5px 30px 30px 30px;
`;

const Title = styled.h1`
  font-size: 25px;
  color: ${Colors.textTitle};
  font-weight: bold;
  text-align: left;
`;

export default Skill;
