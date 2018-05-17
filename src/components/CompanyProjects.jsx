import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as Colors from '../constants/colors';

class CompanyProjects extends React.Component {
  render() {
    return (
      <Container>
        <ProjectDiv>
          <img
            height="42"
            src="https://d1qb2nb5cznatu.cloudfront.net/startups/i/868053-b1ef91d5b8965ecec40ba22f29ec7b4d-medium_jpg.jpg?buster=1444302565"
          />
          <Title>SourceSage</Title>
        </ProjectDiv>
        <ProjectDiv>
          <img
            height="42"
            src="https://bloximages.chicago2.vip.townnews.com/tdn.com/content/tncms/assets/v3/editorial/1/a1/1a1701a1-cd0d-5478-ad4a-bda56da09d36/57d168cc05ad9.image.jpg"
          />
          <Title>JHKelly</Title>
        </ProjectDiv>
        <ProjectDiv>
          <img
            height="42"
            src="http://st.f.360game.vn/livestream/w360live/icon/new/1024.png"
          />
          <Title>360Live</Title>
        </ProjectDiv>
        <ProjectDiv>
          <img
            height="42"
            src="http://startupjobs.asia/images/company/400/32904-RYDE-FB-logo.png"
          />
          <Title>Ryde Sharing</Title>
        </ProjectDiv>
        <ProjectDiv>
          <img
            height="42"
            src="https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/30/27/c1/3027c198-6ee8-2a0d-b02b-f476ba7d13eb/mzl.gzsjuopu.jpg/1200x630bb.jpg"
          />
          <Title>Sistic</Title>
        </ProjectDiv>
        <ProjectDiv>
          <img
            height="42"
            src="https://lh3.googleusercontent.com/82dYS_QRT7vBsSRNfQZmHYwfmfLicbZRXUhL9Qk9k_H1kPZ2cE0tyvNOi8qvAoPWT6g=w300"
          />
          <Title>Odibly</Title>
        </ProjectDiv>
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
  @media (max-width: 425px) {
    font-size: 10px;
    margin-top: 15px;
  }

  font-size: 20px;
  color: ${Colors.textTitle};
  font-weight: bold;
  text-align: left;
  margin-left: 10px;
`;

const ProjectDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export default CompanyProjects;
