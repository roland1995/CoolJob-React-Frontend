import { useEffect, useState } from "react";
import axios from "axios";

export const GetApiData = (url) => {
	const [isLoading, setIsLoading] = useState(false);
	const [fetchData, setFetchData] = useState([]);

	useEffect(() => {
		axios.get(url).then((resp) => setFetchData(resp.data));
	}, [url]);

	return [isLoading, fetchData];
};

export default GetApiData;
