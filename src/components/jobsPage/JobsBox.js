import FilterBar from '../filterbar/FilterBar';
import React, { useContext } from 'react';
import JobsList from './JobsList';
import styled from 'styled-components';
import { BackTop } from 'antd';
import DetailBox from '../detailsPage/DetailBox';
import { DetailVisibilityContext } from '../../Contexts/DetailVisibilityContext';

export const JobsBox = () => {
	const [value] = useContext(DetailVisibilityContext);

	const StyledDiv = styled.div`
		width: 85%;
		float: right;
	`;
	const DetailDiv = styled.div`
		display: ${value ? 'block' : 'none'};
	`;
	const JobsDiv = styled.div`
		padding: 15px;
		background: #ececec;

		display: ${value ? 'none' : 'block'};
	`;

	const MainDiv = styled.div`
		background-color: black;
	`;

	const Div = styled.div`
		position: fixed;
	`;

	return (
		<MainDiv>
			<div style={{ float: 'left' }}>
				<Div>
					<FilterBar />
				</Div>
			</div>
			<StyledDiv>
				<DetailDiv>
					<DetailBox />
				</DetailDiv>
				<JobsDiv>
					<JobsList />
				</JobsDiv>
			</StyledDiv>
			<BackTop />
		</MainDiv>
	);
};
export default JobsBox;