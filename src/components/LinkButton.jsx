import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as Colors from '../constants/colors';
import { Icon } from 'react-fa';
import { pulse } from 'react-animations';

class LinkedButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseIsOn: false,
    };
  }

  render() {
    return (
      <a href={this.props.link}>
        {!this.state.mouseIsOn ? (
          <LinkIcon
            name={this.props.imageName}
            onMouseEnter={() => this.setState({ mouseIsOn: true })}
            onMouseLeave={() => this.setState({ mouseIsOn: false })}
          />
        ) : (
          <LinkIconHighlighted
            name={this.props.imageName}
            onMouseEnter={() => this.setState({ mouseIsOn: true })}
            onMouseLeave={() => this.setState({ mouseIsOn: false })}
          />
        )}
      </a>
    );
  }
}

const pulser = keyframes`${pulse}`;

const LinkIcon = styled(Icon)`
  font-size: 3vw;
  color: ${Colors.midGray};
  margin: 10px 10px 0 0;
  text-align: center;
`;

const LinkIconHighlighted = LinkIcon.extend`
  color: ${Colors.red};
  animation: 1s ${pulser} alternate infinite;
`;

export default LinkedButton;
