import * as React from "react";
import styled from "styled-components";
import * as Colors from "../constants/colors";
import CompanyProjects from "./CompanyProjects";
import Libraries from "./Libraries";
import PersonalProjects from "./PersonalProjects";
import ProgrammingArticles from "./ProgramingArticles";
import TabButton from "./TabButton";

enum TabStates {
  companyProjects = 1,
  personalProjects = 2,
  programmingArticles = 3,
  libraries = 4,
}

interface IStates {
  tabStates: TabStates;
}

class WorkTab extends React.Component<{}, IStates> {
  constructor(props: {}) {
    super(props);
    this.state = {
      tabStates: TabStates.companyProjects,
    };
  }

  public onClick = (tabStates: TabStates) => {
    this.setState({
      tabStates,
    });
  }

  public renderContent(tabStates: TabStates) {
    switch (tabStates) {
      case TabStates.companyProjects:
        return <CompanyProjects />;
      case TabStates.personalProjects:
        return <PersonalProjects />;
      case TabStates.programmingArticles:
        return <ProgrammingArticles />;
      case TabStates.libraries:
        return <Libraries />;
      default:
        return <div />;
    }
  }

  public render() {
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
            isSelected={this.state.tabStates === TabStates.libraries}
            title="Libraries"
            onClick={() => {
              this.onClick(TabStates.libraries);
            }}
          />
        </Tabs>
        {this.renderContent(this.state.tabStates)}
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
