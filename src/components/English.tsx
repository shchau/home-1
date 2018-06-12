import * as React from "react";
import styled from "styled-components";
import * as Colors from "../constants/colors";

class About extends React.Component {
  public render() {
    return (
      <Container>
        <Title>English</Title>
        <Description />
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
  margin-top: 20px;
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

export default About;
