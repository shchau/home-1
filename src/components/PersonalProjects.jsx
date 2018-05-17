import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as Colors from '../constants/colors';

class PersonalProjects extends React.Component {
  render() {
    return (
      <Container>
        <ProjectDiv>
          <img
            height="42"
            src="http://is2.mzstatic.com/image/thumb/Purple128/v4/ea/ed/a1/eaeda1d2-6e76-69e4-79d2-4332ab0ffa99/source/100x100bb.jpg"
          />
          <Title>Guess It - Word Picture Puzzle</Title>
        </ProjectDiv>
        <ProjectDiv>
          <img
            height="42"
            src="http://is4.mzstatic.com/image/thumb/Purple118/v4/46/5c/01/465c01db-0d05-e882-bbd6-d3b1da0bd36e/source/175x175bb.jpg"
          />
          <Title>GioThanhle</Title>
        </ProjectDiv>
        <ProjectDiv>
          <img
            height="42"
            src="https://lh3.googleusercontent.com/9c_otUOtS18B17BXJKPW3IS3X9IY3f4Oa8MeUmrVAS5NBmdPoRM_ZFgYIDnjWLDIpQZQ=s360-rw"
          />
          <Title>Guess The Footballer</Title>
        </ProjectDiv>
        <ProjectDiv>
          <img
            height="42"
            src="https://lh3.googleusercontent.com/RFHhrmnicle3V6wPhrRvdezSZ3H8tm99aNRofJL0HelGKi3spkM7qrjMm-B4BRRMdg=s360-rw"
          />
          <Title>Ease</Title>
        </ProjectDiv>
        <ProjectDiv>
          <img
            height="42"
            src="https://lh3.googleusercontent.com/S3Yk4k8WrVEq3zNUOAY9evuU1nhOAjOOa6UlPn1iwLr_xzVp795-fLTRbMkmDZ-Itg=s360-rw"
          />
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
