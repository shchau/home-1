import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as Colors from '../constants/colors';
import LinkButton from './LinkButton';

interface Props {
    image: string;
    name: string;
    description: string;
}

class IdolCard extends React.Component<Props> {
  render() {
    return (
      <Container>
        <Title>My Idols</Title>
        <Card
          hoverable
          style={{ width: '90%' }}
          cover={
            <img src="https://avatars0.githubusercontent.com/u/7659?s=460&v=4" />
          }
        >
          <Meta title="Mattt" description="Founder of @Flight-School. Writer and developer living in Portland, Oregon. Formerly @apple, @NSHipster, @AFNetworking." />
        </Card>
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

export default IdolCard;
