import React, { createContext, useState } from 'react';

export const OnJobContext = createContext();

export const OnJobProvider = (props) => {
	const [onJob, setOnJob] = useState(true);
	return (
		<OnJobContext.Provider value={{ onJob, setOnJob }}>{props.children}</OnJobContext.Provider>
	);
};

export default OnJobProvider;
