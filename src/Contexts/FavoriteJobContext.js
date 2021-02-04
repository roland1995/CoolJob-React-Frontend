import React, { createContext, useState } from 'react';
import { GetApiData } from '../hook/GetApiData';

export const FavoriteJobContext = createContext();

export const FavoriteJobProvider = (props) => {
	const [favoriteJob, setFavoriteJob] = useState([]);

	return (
		<FavoriteJobContext.Provider value={[favoriteJob, setFavoriteJob]}>
			{props.children}
		</FavoriteJobContext.Provider>
	);
};

export default FavoriteJobProvider;
