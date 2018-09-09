import * as React from "react";
import styled from "styled-components";
import * as Colors from "../constants/colors";

class Libraries extends React.Component {
  public render() {
    return (
      <Container>
        <ul style={{ textAlign: "left" }}>
          <li>
            <LibraryLink href="https://github.com/khuong291/react-notification">
              React Notification (ReactJS)
            </LibraryLink>
          </li>
          <li>
            <LibraryLink href="https://github.com/khuong291/MagicPresent">
              Magic Present (iOS)
            </LibraryLink>
          </li>
          <li>
            <LibraryLink href="https://github.com/khuong291/KPActionSheet">
              KPActionSheet (iOS)
            </LibraryLink>
          </li>
          <li>
            <LibraryLink href="https://github.com/khuong291/KPImageView">
              KPImageView (iOS)
            </LibraryLink>
          </li>
          <li>
            <LibraryLink href="https://github.com/khuong291/Binder">
              Binder (iOS)
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
  @media (max-width: 425px) {
    font-size: 10px;
  }

  font-size: 20px;
  color: ${Colors.textTitle};
  font-weight: bold;
  text-align: left;
  margin-left: 10px;
  justify-content: center;
`;

export default Libraries;
