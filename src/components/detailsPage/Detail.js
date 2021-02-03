import React, { useContext } from 'react';
import { JobDetailContext } from '../../Contexts/JobDetailContext';
import 'antd/dist/antd.css';
import { Layout, Image, Button } from 'antd';
import { DetailVisibilityContext } from '../../Contexts/DetailVisibilityContext';

export const Detail = () => {
	const [value, setValue] = useContext(DetailVisibilityContext);
	const { Header, Footer, Content } = Layout;
	const [detail] = useContext(JobDetailContext);

	const StyleImage = {
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '8px',
		width: '40%',
	};

	return (
		<Layout>
			<Header style={{ color: '#F5FFFA', backgroundColor: '#000080' }}>
				<Button
					style={{
						color: 'white',
						backgroundColor: '#2F4F4F',
						marginTop: '15px',
						float: 'right',
					}}
					onClick={() =>
						value === true ? setValue(false) : setValue(true)
					}
				>
					Back to jobs
				</Button>
				<h1 style={{ color: '#F5FFFA' }}>{detail.title}</h1>
			</Header>
			<Content>
				<Image style={StyleImage} src={detail.logo} />
				<div style={{ margin: '20px' }}>
					<h2>Company name: {detail.company}</h2>
					<h3>Job title: {detail.type}</h3>
					<h3>Job location: {detail.location}</h3>
					<h4>company page: {detail.companyUrl}</h4>
					<td dangerouslySetInnerHTML={{ __html: detail.apply }} />
					<h4>descritpiton:</h4>
					<td
						dangerouslySetInnerHTML={{ __html: detail.description }}
					/>
				</div>
			</Content>
			<Footer>Added at : {detail.date}</Footer>
		</Layout>
	);
};

export default Detail;
