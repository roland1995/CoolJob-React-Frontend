import React, { createContext, useState } from 'react';

export const JobDetailContext = createContext();

export const JobDetailProvider = (props) => {
	const [detail, setDetail] = useState([]);
	return (
		<JobDetailContext.Provider value={{ detail, setDetail }}>
			{props.children}
		</JobDetailContext.Provider>
	);
};

export default JobDetailProvider;
