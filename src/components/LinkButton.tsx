import * as React from "react";
import { Icon } from "react-fa";
import styled from "styled-components";
import * as Colors from "../constants/colors";

interface IProps {
  link: string;
  imageName: string;
}

interface IStates {
  mouseIsOn: boolean;
}

class LinkedButton extends React.Component<IProps, IStates> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      mouseIsOn: false,
    };
  }

  public render() {
    return (
      <a href={this.props.link}>
        <LinkIcon
          name={this.props.imageName}
          onMouseEnter={() => this.setState({ mouseIsOn: true })}
          onMouseOut={() => this.setState({ mouseIsOn: false })}
        />
      </a>
    );
  }
}

const LinkIcon = styled(Icon)`
  @media (max-width: 768px) {
    font-size: 17px;
  }

  font-size: 33px;
  color: ${Colors.midGray};
  margin: 10px 10px 0 0;
  text-align: center;
`;

export default LinkedButton;
