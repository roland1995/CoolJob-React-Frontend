import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { DetailVisibilityContext } from '../../Contexts/DetailVisibilityContext';
import { OnJobContext } from '../../Contexts/OnJobContext';

const StickyHeader = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1;
`;

export const NavBar = () => {
	const { Header } = Layout;
	const { setVisible } = useContext(DetailVisibilityContext);
	const [onJob, setOnJob] = useContext(OnJobContext);

	return (
		<Header className='header'>
			<StickyHeader>
				<Menu theme='dark' mode='horizontal'>
					<Menu.Item key='1'>
						<Link to='/main'>Main</Link>
					</Menu.Item>
					<Menu.Item key='2'>
						<Link to='/jobs' onClick={() => (setVisible(false), setOnJob(true))}>
							Jobs
						</Link>
					</Menu.Item>
					<Menu.Item key='3'>
						<Link to='/favorite' onClick={() => (setValue(false), setOnJob(false))}>
							Favorites
						</Link>
					</Menu.Item>
				</Menu>
			</StickyHeader>
		</Header>
	);
};

export default NavBar;
