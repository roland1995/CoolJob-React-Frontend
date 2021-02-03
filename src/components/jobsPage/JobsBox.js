import React from 'react';
import JobsList from "./JobsList";
import styled from 'styled-components';
import { BackTop } from 'antd';

export const JobsBox = () => {

	const StyledDiv = styled.div`
        padding: 30px;
        width: 85%;
        float:right;
	`;

    const MainDiv = styled.div`
        background: black;
	`;

	return (
        <MainDiv>
            <StyledDiv>
                <JobsList />		
            </StyledDiv>
            <BackTop />
        </MainDiv>
	);
}
export default JobsBox
