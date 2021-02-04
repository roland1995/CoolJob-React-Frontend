import React from 'react';
import styled from 'styled-components';
import logo from '../../resources/logo.jpg';

const LogoDiv = styled.div`
	background: url(${logo});
	height: 100vh;
`;

const P = styled.p`
	font-size: 30px;
	color: orange;
	padding: 20px;
	text-align: center;
	&.justify {
		text-align: justify;
		padding-top: 0px;
		padding-bottom: 0px;
	}
`;

export const Main = () => {
	return (
		<div>
			<LogoDiv>
				<P>Welcome to the Cool Job website! </P>
			</LogoDiv>
		</div>
	);
};

export default Main;
