import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as Colors from '../constants/colors';
import { Icon } from 'react-fa';
import LinkButton from './LinkButton';

class Contact extends React.Component {
  render() {
    return (
      <Container>
        <ContactDiv>
          <ContactIcon name="far fa-map-marker" />
          <LocationLabel>HCMC, VietNam</LocationLabel>
        </ContactDiv>
        <ContactDiv>
          <ContactIcon name="fal fa-envelope" />
          <LocationLabel>
            <a style={{ color: '#686464' }} href="dkhuong291@gmail.com">
              dkhuong291@gmail.com
            </a>
          </LocationLabel>
        </ContactDiv>
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
  margin-bottom: 20px;
`;

const LocationLabel = styled.h2`
  font-size: 14px;
  color: ${Colors.textDescription};
  font-weight: initial;
  text-align: left;
`;

const ContactIcon = styled(Icon)`
  font-size: 16px;
  color: ${Colors.midGray};
  margin: 10px 10px 0 0;
  text-align: center;
`;

const ContactDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Contact;
