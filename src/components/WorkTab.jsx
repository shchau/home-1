import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as Colors from '../constants/colors';
import TabButton from './TabButton';

var TabStates = {
  companyProjects: 1,
  personalProjects: 2,
  programmingArticles: 3,
  iOSLibraries: 4,
};
Object.freeze(TabStates);

class WorkTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabStates: TabStates.companyProjects,
    };
  }

  onClick = tabStates => {
    this.setState({
      tabStates: tabStates,
    });

    console.log(tabStates);
  };

  render() {
    return (
      <Container>
        <Title>My Works</Title>
        <Tabs>
          <TabButton
            isSelected={this.state.tabStates === TabStates.companyProjects}
            title="Company Projects"
            onClick={() => {
              this.onClick(TabStates.companyProjects);
            }}
          />
          <TabButton
            isSelected={this.state.tabStates === TabStates.personalProjects}
            title="Personal Projects"
            onClick={() => {
              this.onClick(TabStates.personalProjects);
            }}
          />
          <TabButton
            isSelected={this.state.tabStates === TabStates.programmingArticles}
            title="Programing Articles"
            onClick={() => {
              this.onClick(TabStates.programmingArticles);
            }}
          />
          <TabButton
            isSelected={this.state.tabStates === TabStates.iOSLibraries}
            title="iOS Libraries"
            onClick={() => {
              this.onClick(TabStates.iOSLibraries);
            }}
          />
        </Tabs>
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

const Title = styled.h1`
  font-size: 25px;
  color: ${Colors.textTitle};
  font-weight: bold;
  text-align: left;
`;

const Tabs = styled.div`
  display: flex;
  flex-direction: row;
`;

export default WorkTab;
