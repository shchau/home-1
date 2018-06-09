import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as Colors from '../constants/colors';

class PersonalProjects extends React.Component {
  render() {
    return (
      <Container>
        <ProjectDiv>
          <img height="42" src="guessit.jpg" />
          <Title>Guess It - Word Picture Puzzle</Title>
        </ProjectDiv>
        <ProjectDiv>
          <img height="42" src="giothanhle.jpg" />
          <Title>GioThanhle</Title>
        </ProjectDiv>
        <ProjectDiv>
          <img height="42" src="guessfootballer.jpg" />
          <Title>Guess The Footballer</Title>
        </ProjectDiv>
        <ProjectDiv>
          <img height="42" src="ease.jpg" />
          <Title>Ease</Title>
        </ProjectDiv>
        <ProjectDiv>
          <img height="42" src="mathduelfight.jpg" />
          <Title>Math Duel Fight</Title>
        </ProjectDiv>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  background-color: white;
  padding: 15px 30px 15px 30px;
  border-radius: 8px;
  margin-top: 20px;
`;

const Title = styled.h1`
  @media (max-width: 425px) {
    font-size: 10px;
    margin-top: 15px;
  }

  font-size: 20px;
  color: ${Colors.textTitle};
  font-weight: bold;
  text-align: left;
  margin-left: 10px;
`;

const ProjectDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export default PersonalProjects;
