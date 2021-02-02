import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";

export const NavBar = () => {
	const { Header } = Layout;

	return (
		<Header className="header">
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
				<Menu.Item key="1">
					<Link to="/main">Main</Link>
				</Menu.Item>
				<Menu.Item key="2">
					<Link to="/jobs">Jobs</Link>
				</Menu.Item>
				<Menu.Item key="3">
					<Link to="/fav">Favorites</Link>
				</Menu.Item>
			</Menu>
    </Header>
	);
};
