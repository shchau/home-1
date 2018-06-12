import * as React from "react";
import styled from "styled-components";
import * as Colors from "../constants/colors";

interface IProps {
  onClick: () => void;
  title: string;
  isSelected: boolean;
}

class TabButton extends React.Component<IProps> {
  public onClick = () => {
    this.props.onClick();
  }

  public render() {
    return (
      <Container>
        {this.props.isSelected ? (
          <ButtonHighlighted onClick={this.onClick}>
            {this.props.title}
          </ButtonHighlighted>
        ) : (
          <Button onClick={this.onClick}>{this.props.title}</Button>
        )}
      </Container>
    );
  }
}

const Button = styled.button`
  @media (max-width: 425px) {
    font-size: 10px;
  }

  font-size: 18px;
  background-color: ${Colors.background};
  color: ${Colors.textTitle};
  text-align: center;
  border: none;
  outline: none;
  border-radius: 4px;
  margin: 0 2px 0 2px;
  padding: 10px;
`;

const ButtonHighlighted = Button.extend`
  background-color: ${Colors.base};
  color: white;
`;

const Container = styled.div`
  width: "25%";
  height: 50px;
`;

export default TabButton;
