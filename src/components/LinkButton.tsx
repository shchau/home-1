import * as React from "react";
import { Icon } from "react-fa";
import styled from "styled-components";
import * as Colors from "../constants/colors";

interface IProps {
	link: string;
	imageName: string;
}

const LinkedButton: React.SFC<IProps> = props => (
	<a href={props.link}>
		<LinkIcon size="2x" name={props.imageName} />
	</a>
);

const LinkIcon = styled(Icon)`
	color: ${Colors.midGray};
	margin: 10px 10px 0 0;
	text-align: center;
	:hover {
		color: ${Colors.base};
	}
`;

export default LinkedButton;
