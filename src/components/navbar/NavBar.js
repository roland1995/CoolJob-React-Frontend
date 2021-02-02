import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
	text-align: center;
	background: orange;
`;

const StyledLink = styled(NavLink)`
	text-decoration: none;
	font-size: 26px;
	margin: 20px;
	font-weight: bold;
	color: yellow;
	&.selected {
		color: red;
	}
`;

const Div = styled.div`
	margin: 20px;
	display: inline-block;
	background: blue;
	padding: 8px;
	border-radius: 25px;
	&:hover {
		background: lightslategray;
	}
`;

export const NavBar = () => {
	return (
		<Header>
			<StyledLink to="/main" activeClassName="selected">
				<Div className="navBarDivStyle">Main</Div>
			</StyledLink>
			<StyledLink to="/jobs" activeClassName="selected">
				<Div className="navBarDivStyle">Jobs</Div>
			</StyledLink>
			<StyledLink to="/fav" activeClassName="selected">
				<Div className="navBarDivStyle">Favorites</Div>
			</StyledLink>
		</Header>
	);
};

export default NavBar;

// import React from "react";
// import { PageHeader } from "antd";

// export const Navbar = () => {
// 	const routes = [
// 		{
// 			path: "index",
// 			breadcrumbName: "First-level Menu",
// 		},
// 		{
// 			path: "first",
// 			breadcrumbName: "Second-level Menu",
// 		},
// 		{
// 			path: "second",
// 			breadcrumbName: "Third-level Menu",
// 		},
// 	];

// 	return (
// 		<div>
// 			<PageHeader className="site-page-header" title="Title" breadcrumb={{ routes }} subTitle="This is a subtitle" />,
// 			mountNode
// 		</div>
// 	);
// };

// export default Navbar;
