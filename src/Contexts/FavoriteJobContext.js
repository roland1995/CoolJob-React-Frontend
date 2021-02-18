import React, { createContext, useState } from 'react';
import { GetApiData } from '../hook/GetApiData';

export const FavoriteJobContext = createContext();

export const FavoriteJobProvider = (props) => {
	const [favoriteJobs, setFavoriteJobs] = useState([]);

	function ReloadFavoriteJobs() {
		const [fetchData] = GetApiData('https://localhost:44318/api/Favorites');
		setFavoriteJobs(fetchData);
	}

	return (
		<FavoriteJobContext.Provider value={{ favoriteJobs, ReloadFavoriteJobs }}>
			{props.children}
		</FavoriteJobContext.Provider>
	);
};

export default FavoriteJobProvider;
