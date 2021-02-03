import React from "react";
import styled from "styled-components";
import logo from "../../resources/logo.jpg";

const LogoDiv = styled.div`
	background: url(${logo});
	height: 100vh;
`;

const DivText = styled.div`
	width: 700px;
	&.right {
		margin-left: auto;
		margin-right: 0;
	}
`;

const DivContainer = styled.div`
	display: grid;
	margin: 50px auto;
	grid-template-columns: repeat(2, 1fr);
	grid-row-gap: 10px;
	grid-column-gap: 10px;
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
				<div>
					<P>Welcome to the Cool Job website! </P>
					<DivContainer>
						<DivText>
							<P className="justify">
								Do you near to finish your studies, and you want to find a cool job?
								<br /> <br />
								This is the place what have you looking for!
							</P>
						</DivText>
						<DivText className="right">
							<P className="justify">
								You can easily start your career with us, all you need to do is start to use our great jobs page.
								<br />
								<br />
								You can filter the jobs by type, date, company, title and location!
							</P>
						</DivText>
					</DivContainer>
				</div>
			</LogoDiv>
		</div>
	);
};

export default Main;
