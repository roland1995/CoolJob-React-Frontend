
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
					key={job.id}
					id={job.id}
					type={job.type}
					date={job.created_at}
					title={job.title}
					location={job.location}
					logo={job.company_logo}
					company={job.company}

					apply={job.how_to_apply}
					companyUrl={job.company_url}
					description={job.description}
				/>
			))}
		</Row>
	);
};

export default JobsList;
