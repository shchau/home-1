import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as Colors from '../constants/colors';
import { Icon } from 'react-fa';
import { zoomIn, lightSpeedIn } from 'react-animations';
import LinkButton from './LinkButton';

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Avatar src="https://avatars2.githubusercontent.com/u/11523438?s=460&v=4" />
        <InfoBox>
          <NameLabel>Khuong Pham</NameLabel>
          <JobLabel>iOS and ReactJS Developer</JobLabel>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <LinkButton
              link="https://github.com/khuong291"
              imageName="fab fa-github"
            />
            <LinkButton
              link="https://twitter.com/khuong291"
              imageName="fab fa-twitter"
            />
            <LinkButton
              link="https://medium.com/@dkhuong291"
              imageName="fab fa-medium"
            />
            <LinkButton
              link="https://stackoverflow.com/users/4742830/khuong"
              imageName="fab fa-stack-overflow"
            />
            <LinkButton
              link="https://www.facebook.com/profile.php?id=100003211267207"
              imageName="fab fa-facebook"
            />
            <LinkButton
              link="https://www.linkedin.com/in/khuong-pham-7b1635108"
              imageName="fab fa-linkedin"
            />
          </div>
        </InfoBox>
      </Container>
    );
  }
}

const zoomer = keyframes`${zoomIn}`;
const lightSpeeder = keyframes`${lightSpeedIn}`;

const Container = styled.div`
  height: 200px;
  display: flex;
  justify-content: left;
  padding: 20px 0 20px 0;
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 0 0 60px;
  border: 4px solid ${Colors.red};
  animation: 1s ${zoomer};
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin: 0 0 0 30px;
`;

const NameLabel = styled.h1`
  font-size: 40px;
  color: ${Colors.darkGray};
  font-weight: bold;
  text-align: left;
  animation: 1s ${lightSpeeder};
`;

const JobLabel = styled.h2`
  font-size: 26px;
  color: ${Colors.midGray};
  text-align: left;
  margin: -20px 0 0 0;
  animation: 2s ${lightSpeeder};
`;

export default Header;
