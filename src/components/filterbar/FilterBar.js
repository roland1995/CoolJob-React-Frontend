import React from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import styled from 'styled-components';

export const FilterBar = () => {
	const StyledMenu = styled(Menu)`
	width = 250px`;

	const P = styled.p`
		font-size: 24px;
	`;

	const Div = styled.div`
		padding: 10px;
	`;

	const Label = styled.label`
		padding: 5px;
	`;

	const Option = styled.option`
		font-size: 16px;
	`;

	const Select = styled.select`
		width: 80%;
		margin: 10px;
		&:focus {
			min-width: 80%;
			width: auto;
		}
	`;

	return (
		<div>
			<StyledMenu>
				<Div>
					<P>Type</P>
					<Select>
						<Option>type</Option>
						<Option>type</Option>
					</Select>
				</Div>
				<Div>
					<P>Date</P>
					<Label for='From'>From</Label>
					<Select id='From'>
						<Option>date</Option>
						<Option>date</Option>
					</Select>
					<br />
					<Label for='To'>To</Label>
					<Select id='To'>
						<Option>date</Option>
						<Option>date</Option>
					</Select>
				</Div>
				<Div>
					<P>Location</P>
					<input type='text' />
				</Div>
				<Div>
					<P>Company</P>
					<input type='text' />
				</Div>
				<Div>
					<P>Position</P>
					<input type='text' />
				</Div>
			</StyledMenu>
		</div>
	);
};

export default FilterBar;
