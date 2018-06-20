import * as React from "react";
import styled from "styled-components";
import * as Colors from "../constants/colors";
import LinkButton from "./LinkButton";

class Header extends React.Component {
	public render() {
		return (
			<Container>
				<Avatar src="https://avatars2.githubusercontent.com/u/11523438?s=460&v=4" />
				<InfoBox>
					<NameLabel>Khuong Pham</NameLabel>
					<JobLabel>iOS and ReactJS Developer</JobLabel>
					<div style={{ display: "flex", flexDirection: "row" }}>
						<LinkButton
							link="https://github.com/khuong291"
							imageName="fab fa-github"
						/>
						<LinkButton
							link="https://twitter.com/khuong291"
							imageName="fab fa-twitter"
						/>
						<LinkButton
							link="https://medium.com/@dkhuong291"
							imageName="fab fa-medium"
						/>
						<LinkButton
							link="https://stackoverflow.com/users/4742830/khuong"
							imageName="fab fa-stack-overflow"
						/>
						<LinkButton
							link="https://www.facebook.com/profile.php?id=100003211267207"
							imageName="fab fa-facebook"
						/>
						<LinkButton
							link="https://www.linkedin.com/in/khuong-pham-7b1635108"
							imageName="fab fa-linkedin"
						/>
					</div>
				</InfoBox>
			</Container>
		);
	}
}

const Container = styled.div`
	@media (max-width: 768px) {
		height: auto;
	}

	height: 200px;
	display: flex;
	justify-content: left;
	padding: 20px 0 20px 0;
	background-color: white;
`;

const Avatar = styled.img`
	@media (max-width: 768px) {
		width: 80px;
		height: 80px;
		margin-left: 20px;
	}

	width: 160px;
	height: 160px;
	border-radius: 50%;
	margin-left: 60px;
`;

const InfoBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: left;
	margin: 0 0 0 30px;
`;

const NameLabel = styled.h1`
	@media (max-width: 768px) {
		font-size: 17px;
	}

	font-size: 40px;
	color: ${Colors.darkGray};
	font-weight: bold;
	text-align: left;
`;

const JobLabel = styled.h2`
	@media (max-width: 768px) {
		font-size: 12px;
		margin: 2px 0 0 0;
	}

	font-size: 20px;
	color: ${Colors.midGray};
	text-align: left;
	margin: -10px 0 0 0;
`;

export default Header;
