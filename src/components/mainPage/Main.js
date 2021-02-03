import React, { useContext } from "react";
import { JobContext } from "../../Contexts/JobContext";

export const Main = () => {
	const [jobs] = useContext(JobContext);

	return <div>{jobs.map((job) => job.company)}</div>;
};

export default Main;
