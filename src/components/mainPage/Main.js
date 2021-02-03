import React, { useContext } from "react";
import { JobContext } from "../../Contexts/JobContext";

export const Main = () => {
	const [isLoading, jobs] = useContext(JobContext);

	return <div>{jobs.map((job) => job.company)}</div>;
};

export default Main;
