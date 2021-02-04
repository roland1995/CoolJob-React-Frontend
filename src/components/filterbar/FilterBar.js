import React, { useContext, useState } from 'react';
import { JobContext } from '../../Contexts/JobContext';
import 'antd/dist/antd.css';
import { Menu, Input, AutoComplete } from 'antd';
import styled from 'styled-components';
import { UserOutlined } from '@ant-design/icons';

export const FilterBar = () => {
	const [jobs] = useContext(JobContext);
	const uniqueCompanies = [...new Set(jobs.map((job) => job.company))];
	const uniqueTypes = [...new Set(jobs.map((job) => job.type))];
	const uniquePositions = [...new Set(jobs.map((job) => job.title))];
	const uniqueLocations = [...new Set(jobs.map((job) => job.location))];
	const optionsPositions = [];
	const optionsType = [];
	const optionsCompany = [];
	const optionsLocation = [];
	uniquePositions.map((position) =>
		optionsPositions.push({
			value: position,
		})
	);
	uniqueTypes.map((type) =>
		optionsType.push({
			value: type,
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
		width: 200px;
	`;

	const P = styled.p`
		font-size: 24px;
	`;

	const Div = styled.div`
		padding: 10px;
	`;

	return (
		<div>
			<StyledMenu>
				<Div>
					<AutoComplete
						dropdownClassName='certain-category-search-dropdown'
						dropdownMatchSelectWidth={300}
						style={{
							width: 180,
						}}
						options={optionsType}
						filterOption={(inputValue, option) =>
							option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
						}
					>
						<Input.Search size='large' placeholder='Type' />
					</AutoComplete>
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
