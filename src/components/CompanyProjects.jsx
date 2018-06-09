import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as Colors from '../constants/colors';

class CompanyProjects extends React.Component {
  render() {
    return (
      <Container>
        <ProjectDiv>
          <img height="42" src="sourcesage.jpg" />
          <Title>SourceSage</Title>
        </ProjectDiv>
        <ProjectDiv>
          <img height="42" src="jhkelly.jpg" />
          <Title>JHKelly</Title>
        </ProjectDiv>
        <ProjectDiv>
          <img height="42" src="360live.png" />
          <Title>360Live</Title>
        </ProjectDiv>
        <ProjectDiv>
          <img height="42" src="ryde.png" />
          <Title>Ryde Sharing</Title>
        </ProjectDiv>
        <ProjectDiv>
          <img height="42" src="sistic.jpg" />
          <Title>Sistic</Title>
        </ProjectDiv>
        <ProjectDiv>
          <img height="42" src="odibly.png" />
          <Title>Odibly</Title>
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

export default CompanyProjects;
