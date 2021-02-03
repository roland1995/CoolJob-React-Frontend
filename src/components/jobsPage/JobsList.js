import React, { useContext } from "react";
import { JobContext } from "../../Contexts/JobContext";
import JobCard from "./JobCard";
import { Row } from "antd";

export const JobsList = () => {
	const [jobs] = useContext(JobContext);

	return (
		<Row gutter={16}>
			{jobs.map((job) => (
				<JobCard
					type={job.type}
					title={job.title}
					location={job.location}
					logo={job.company_logo}
					company={job.company}
				/>
			))}
		</Row>
	);
};

export default JobsList;
