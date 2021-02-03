import React, { createContext, useState } from 'react';

export const DetailVisibilityContext = createContext();

export const DetailVisibilityProvider = (props) => {
	const [visible, setVisible] = useState(false);
	return (
		<DetailVisibilityContext.Provider value={[visible, setVisible]}>
			{props.children}
		</DetailVisibilityContext.Provider>
	);
};

export default DetailVisibilityProvider;
