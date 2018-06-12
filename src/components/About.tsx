import * as React from "react";
import styled from "styled-components";
import * as Colors from "../constants/colors";

export default class About extends React.Component {
  public render() {
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
          I decided to create this website written entirely with ReactJS.
        </Description>
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

const Description = styled.h2`
  font-size: 18px;
  color: ${Colors.textDescription};
  text-align: left;
  font-weight: lighter;
`;
