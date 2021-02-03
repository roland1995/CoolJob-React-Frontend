import React, { createContext } from "react";
import { GetApiData } from "../hook/GetApiData";

export const JobContext = createContext();

export const JobProvider = (props) => {
	const [isLoading, fetchData] = GetApiData("https://api.mocki.io/v1/ab87285f");

	const jobs = fetchData;

	return <JobContext.Provider value={[isLoading, jobs]}>{props.children}</JobContext.Provider>;
};

export default JobProvider;
