import React, { useContext, useState } from 'react';
import { JobContext } from '../../Contexts/JobContext';
import 'antd/dist/antd.css';
import { Menu, Input, AutoComplete } from 'antd';
import styled from 'styled-components';
import { UserOutlined } from '@ant-design/icons';

export const FilterBar = () => {
	const [jobs] = useContext(JobContext);
	const types = jobs.map((job) => job.type);
	const positions = jobs.map((job) => job.title);
	const companies = jobs.map((job) => job.company);
	const locations = jobs.map((job) => job.location);
	const uniqueCompanies = [...new Set(companies)];
	const uniqueTypes = [...new Set(types)];
	const uniquePositions = [...new Set(positions)];
	const uniqueLocations = [...new Set(locations)];
	const optionsPositions = [];
	const optionsCompany = [];
	const optionsLocation = [];
	uniquePositions.map((position) =>
		optionsPositions.push({
			value: position,
		})
	);
	uniqueCompanies.map((company) =>
		optionsCompany.push({
			value: company,
		})
	);
	uniqueLocations.map((location) =>
		optionsLocation.push({
			value: location,
		})
	);

	const StyledMenu = styled(Menu)`
		width: 250px;
	`;

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
						{uniqueTypes.map((type) => (
							<Option value={type}>{type}</Option>
						))}
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
					<AutoComplete
						dropdownClassName='certain-category-search-dropdown'
						dropdownMatchSelectWidth={300}
						style={{
							width: 180,
						}}
						options={optionsLocation}
						filterOption={(inputValue, option) =>
							option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
						}
					>
						<Input.Search size='large' placeholder='Location' />
					</AutoComplete>
				</Div>
				<Div>
					<AutoComplete
						dropdownClassName='certain-category-search-dropdown'
						dropdownMatchSelectWidth={300}
						style={{
							width: 180,
						}}
						options={optionsCompany}
						filterOption={(inputValue, option) =>
							option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
						}
					>
						<Input.Search size='large' placeholder='Company' />
					</AutoComplete>
				</Div>
				<Div>
					<AutoComplete
						dropdownClassName='certain-category-search-dropdown'
						dropdownMatchSelectWidth={800}
						style={{
							width: 180,
						}}
						options={optionsPositions}
						filterOption={(inputValue, option) =>
							option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
						}
					>
						<Input.Search size='large' placeholder='Position' />
					</AutoComplete>
				</Div>
			</StyledMenu>
		</div>
	);
};

export default FilterBar;
