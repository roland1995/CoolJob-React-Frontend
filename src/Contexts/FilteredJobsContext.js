import React, { createContext, useState } from 'react';

export const FilteredJobContext = createContext();

export const FilteredJobProvider = (props) => {
	const [filteredJobs, setFilteredJobs] = useState([]);

	return (
		<FilteredJobContext.Provider value={{ filteredJobs, setFilteredJobs }}>
			{props.children}
		</FilteredJobContext.Provider>
	);
};

export default FilteredJobProvider;
