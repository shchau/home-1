import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as Colors from '../constants/colors';
import { Icon } from 'react-fa';
import LinkButton from './LinkButton';
import { Card, Row, Col } from 'antd';

const { Meta } = Card;

class Idols extends React.Component {
  render() {
    return (
      <Container>
        <Title>Awesome Developers</Title>
        <Row>
        <Col xs={24} sm={12}>
        <Card
              hoverable
              cover={
                  <img src="https://avatars0.githubusercontent.com/u/7659?s=460&v=4" />
              }
              >
              <Meta title="Mattt" description="Founder of @Flight-School. Formerly @Apple, @NSHipster, @AFNetworking." />
          </Card>
        </Col>
        <Col xs={24} sm={12}>
        <Card
              hoverable
              cover={
                  <img src="https://avatars1.githubusercontent.com/u/810438?s=460&v=4" />
              }
              >
              <Meta title="Dan Abramov" description="Working on @reactjs. Co-author of Redux and Create React App." />
          </Card>
        </Col>
        </Row>
        <Row>
        <Col xs={24} sm={12}>
          <Card
              hoverable
              cover={
                  <img src="https://avatars1.githubusercontent.com/u/15152540?s=460&v=4" />
              }
              >
              <Meta title="Chris Lattner" description="Swift author. Former Senior Director and Architect at @Apple." />
           </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card
              hoverable
              cover={
                  <img src="https://avatars0.githubusercontent.com/u/2466701?s=460&v=4" />
              }
              >
              <Meta title="John Sundell" description="Building apps, games and Swift developer tools! Passionate about open source & developer productivity." />
           </Card>
        </Col>
        </Row>
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

const CardBox = styled.div`
  display: flex;
  flex-direction: row;
`

export default Idols;
