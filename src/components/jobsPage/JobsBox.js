import React from "react";
import JobsList from "./JobsList";
import styled from "styled-components";
import FilterBar from "../filterbar/FilterBar";
import { BackTop } from "antd";

export const JobsBox = () => {
	const DivContainer = styled.div`
		display: grid;
		margin: 50px auto;
		grid-template-columns: 1fr 5fr;
		grid-row-gap: 10px;
		grid-column-gap: 10px;
	`;

	const Div = styled.div`
		position: fixed;
	`;

	return (
		<DivContainer>
			<div>
				<Div>
					<FilterBar />
				</Div>
			</div>
			<div>
				<JobsList />
				<BackTop />
			</div>
		</DivContainer>
	);
};
export default JobsBox;
