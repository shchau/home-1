import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as Colors from '../constants/colors';
import { Icon } from 'react-fa';
import { fadeInLeft } from 'react-animations';
import LinkButton from './LinkButton';

class About extends React.Component {
  render() {
    return (
      <Container>
        <Title>About Me</Title>
        <Description>
          Hi there, I'm a Software Engineer at SourceSage. I make both Web and
          iOS App. I love programming, so I also write articles about
          programming on Medium and make some iOS libraries on Cocoapods, I
          think this is a good way to increase my skill.
          <br /> <br />I have 3 years experience on iOS development which I
          developed some apps used for hundreds of thousands users. And now I am
          learning ReactJS, I realize that the best way to learn is by doing, so
          I decided to create this website write entirely with ReactJS.
        </Description>
      </Container>
    );
  }
}

const fader = keyframes`${fadeInLeft}`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  background-color: white;
  padding: 5px 30px 30px 30px;
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 25px;
  color: ${Colors.textTitle};
  font-weight: bold;
  text-align: left;
  animation: 1s ${fader};
`;

const Description = styled.h2`
  font-size: 18px;
  color: ${Colors.textDescription};
  text-align: left;
  animation: 2s ${fader};
  font-weight: lighter;
`;

export default About;
