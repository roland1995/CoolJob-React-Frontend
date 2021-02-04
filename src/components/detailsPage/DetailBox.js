import React from 'react';
import styled from 'styled-components';
import Detail from './Detail';

export const DetailBox = () => {
	const DetailDiv = styled.div`
		background-color: black;
	`;
	return (
		<DetailDiv>
			<Detail />
		</DetailDiv>
	);
};

export default DetailBox;
