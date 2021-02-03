import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Card, Col } from 'antd';
import { DetailVisibilityContext } from '../../Contexts/DetailVisibilityContext';
import { JobDetailContext } from '../../Contexts/JobDetailContext';

export const JobCard = (props) => {
	const [value, setValue] = useContext(DetailVisibilityContext);
	const [detail, setDetail] = useContext(JobDetailContext);
	const { Meta } = Card;

	const StyledImage = styled.img`
		margin-top: 1px;
		width: 12em;
		height: 10em;
		display: block;
		margin-left: auto;
		margin-right: auto;
	`;

	return (
		<Col style={{ padding: '15px' }} span={6}>
			<Link
				to={'/jobs/detail/' + props.id}
				onClick={() => (
					value === true ? setValue(false) : setValue(true),
					setDetail(props)
				)}
			>
				<Card
					headStyle={{ textAlign: 'center' }}
					hoverable
					style={{ width: 280, height: 300 }}
					cover={<StyledImage alt='example' src={props.logo} />}
					title={props.location}
				>
					<Meta
						style={{ textAlign: 'center' }}
						title={props.title}
						description={props.type}
					/>
				</Card>
			</Link>
		</Col>
	);
};

export default JobCard;
