import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import * as Colors from './constants/colors';
import * as Profile from './components/index';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Profile.Header />
        <Grid>
          <LeftColumn>
            <Profile.About />
          </LeftColumn>
          <RightColumn>
            <Profile.Skill />
          </RightColumn>
        </Grid>
      </Container>
    );
  }
}

const Container = styled.div`
  background-color: ${Colors.background};
  padding: 0 0 50px 0;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px 40px 0 40px;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 0 0 0 20px;
`;

export default App;
