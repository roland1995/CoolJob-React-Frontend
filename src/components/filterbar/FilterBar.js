import React, { useContext, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Menu, Input, AutoComplete } from 'antd';
import styled from 'styled-components';
import { FilteredJobContext } from '../../Contexts/FilteredJobsContext';
import { JobContext } from '../../Contexts/JobContext';

export const FilterBar = React.memo(() => {
	const [jobs] = useContext(JobContext);
	const [filteredJobs, setFilteredJobs] = useContext(FilteredJobContext);

	useEffect(() => {
		setFilteredJobs(jobs);
	}, []);

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

	const changeCardListByType = (e) => {
		const filteredJobs = jobs.filter((job) => job.type.includes(e));
		setFilteredJobs(filteredJobs);
	};

	const changeCardListByLocation = (e) => {
		const filteredJobs = jobs.filter((job) => job.location.includes(e));
		setFilteredJobs(filteredJobs);
	};

	const changeCardListByCompany = (e) => {
		const filteredJobs = jobs.filter((job) => job.company.includes(e));
		setFilteredJobs(filteredJobs);
	};

	const changeCardListByPositions = (e) => {
		const filteredJobs = jobs.filter((job) => job.title.includes(e));
		setFilteredJobs(filteredJobs);
	};

	return (
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
					onChange={changeCardListByType}
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
					onChange={changeCardListByLocation}
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
					onChange={changeCardListByCompany}
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
					onChange={changeCardListByPositions}
				>
					<Input.Search size='large' placeholder='Position' />
				</AutoComplete>
			</Div>
		</StyledMenu>
	);
});

export default FilterBar;
