import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as Colors from '../constants/colors';

class ProgramingArticles extends React.Component {
  render() {
    return (
      <Container>
        <ul style={{ textAlign: 'left' }}>
          <li>
            <ArticleLink href="https://medium.com/@dkhuong291/rxswift-with-mvvm-e4af71413298">
              RxSwift with MVVM
            </ArticleLink>
          </li>
          <li>
            <ArticleLink href="https://medium.com/@dkhuong291/throttle-vs-debounce-in-rxswift-86f8b303d5d4">
              Throttle vs Debounce in RxSwift
            </ArticleLink>
          </li>
          <li>
            <ArticleLink href="https://medium.com/@dkhuong291/convenience-init-in-swift-e0392e321f6">
              Convenience Init In Swift
            </ArticleLink>
          </li>
          <li>
            <ArticleLink href="https://medium.com/@dkhuong291/capture-list-in-swift-c79657b64974">
              Capture List in Swift
            </ArticleLink>
          </li>
          <li>
            <ArticleLink href="https://medium.com/@dkhuong291/t%E1%BA%A5t-c%E1%BA%A3-keywords-trong-swift-159b92806cfe">
              Tất cả Keywords trong Swift
            </ArticleLink>
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

const ArticleLink = styled.a`
  font-size: 20px;
  color: ${Colors.textTitle};
  font-weight: bold;
  text-align: left;
  margin-left: 10px;
  justify-content: center;
`;

export default ProgramingArticles;
