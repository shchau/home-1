import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as Colors from '../constants/colors';

class Libraries extends React.Component {
  render() {
    return (
      <Container>
        <ul style={{ textAlign: 'left' }}>
          <li>
            <LibraryLink href="https://github.com/khuong291/100DaysOfSwift">
              100 Days Of Swift
            </LibraryLink>
          </li>
          <li>
            <LibraryLink href="https://github.com/khuong291/MagicPresent">
              Magic Present
            </LibraryLink>
          </li>
          <li>
            <LibraryLink href="https://github.com/khuong291/KPActionSheet">
              KPActionSheet
            </LibraryLink>
          </li>
          <li>
            <LibraryLink href="https://github.com/khuong291/KPImageView">
              KPImageView
            </LibraryLink>
          </li>
          <li>
            <LibraryLink href="https://github.com/khuong291/Croppy">
              Croppy (Incomplete)
            </LibraryLink>
          </li>
          <li>
            <LibraryLink href="https://github.com/khuong291/Binder">
              Binder (Incomplete)
            </LibraryLink>
          </li>
        </ul>
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

const LibraryLink = styled.a`
  font-size: 20px;
  color: ${Colors.textTitle};
  font-weight: bold;
  text-align: left;
  margin-left: 10px;
  justify-content: center;
`;

export default Libraries;
