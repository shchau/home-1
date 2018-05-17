import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as Colors from '../constants/colors';
import { Icon } from 'react-fa';

class TabButton extends React.Component {
  onClick = () => {
    this.props.onClick();
  };

  render() {
    return (
      <div styled={{ width: '25%', height: 50 }}>
        {this.props.isSelected ? (
          <ButtonHighlighted onClick={this.onClick}>
            {this.props.title}
          </ButtonHighlighted>
        ) : (
          <Button onClick={this.onClick}>{this.props.title}</Button>
        )}
      </div>
    );
  }
}

const Button = styled.button`
  @media (max-width: 425px) {
    font-size: 10px;
  }

  font-size: 18px;
  background-color: ${Colors.background};
  color: ${Colors.textTitle}
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

export default TabButton;
