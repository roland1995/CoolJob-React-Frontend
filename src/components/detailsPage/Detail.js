import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { JobDetailContext } from '../../Contexts/JobDetailContext';
import { FavoriteJobContext } from '../../Contexts/FavoriteJobContext';
import 'antd/dist/antd.css';
import { Layout, Image, Button, Alert } from 'antd';
import { DetailVisibilityContext } from '../../Contexts/DetailVisibilityContext';
import { OnJobContext } from '../../Contexts/OnJobContext';

export const Detail = () => {
	const { visible } = useContext(DetailVisibilityContext);
	const { setVisible } = useContext(DetailVisibilityContext);
	const { Header, Footer, Content } = Layout;
	const { detail } = useContext(JobDetailContext);
	const [favoriteJobs, setFavoriteJobs] = useContext(FavoriteJobContext);
	const [onJob] = useContext(OnJobContext);
	const [successDisplay, setSuccessDisplay] = useState(false);

	const StyleImage = {
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '8px',
		width: '500px',
	};

	const DeleteJobFromFavoriteList = () => {
		setFavoriteJobs([...favoriteJobs.filter((job) => job.id !== detail.id)]);
	};

	const AddJobToFavoriteList = () => {
		setFavoriteJobs([...favoriteJobs.filter((job) => job.id !== detail.id), detail]);
	};

	const ALertTimeout = () => {
		setTimeout(() => {
			setSuccessDisplay(false);
		}, 2000);
	};

	const SuccessAlertStyle = {
		position: 'fixed',
		display: `${successDisplay === true ? 'block' : 'none'}`,
		zIndex: '2',
		right: '8%',
		bottom: '2%',
		width: '300px',
		textAlign: 'center',
	};

	return (
		<Layout>
			<Header style={{ color: '#F5FFFA', backgroundColor: '#000080' }}>
				<Link to={onJob === true ? '/jobs' : '/favorite'}>
					<Button
						style={{
							color: 'white',
							backgroundColor: '#2F4F4F',
							marginTop: '15px',
							float: 'right',
						}}
						onClick={() => (visible === true ? setVisible(false) : setVisible(true))}
					>
						Back to jobs
					</Button>
				</Link>
				<h1 style={{ color: '#F5FFFA' }}>{detail.title}</h1>
			</Header>
			<Content>
				<div style={{ paddingRight: '400px', paddingLeft: '400px' }}>
					<Image style={StyleImage} src={detail.company_logo} />
				</div>
				<div style={{ margin: '20px' }}>
					<h2>Company name: {detail.company}</h2>
					<h3>Job title: {detail.type}</h3>
					<h3>Job location: {detail.location}</h3>
					<h4>
						= company page: <a href={detail.company_url}>{detail.company_url}</a>
					</h4>
					<p dangerouslySetInnerHTML={{ __html: detail.apply }} />
					<h4>descritpiton:</h4>
					<p dangerouslySetInnerHTML={{ __html: detail.description }} />
				</div>
				<Alert
					style={SuccessAlertStyle}
					message='Added to favorite jobs'
					type='success'
					showIcon
				/>
			</Content>
			<Footer>
				Added at : {detail.created_at} {onJob === true}
				<Button
					style={{
						color: 'white',
						backgroundColor: '#2F4F4F',
						marginRight: '140px',
						float: 'right',
						display: `${onJob === true && successDisplay === false ? 'block' : 'none'}`,
					}}
					onClick={() => (
						ALertTimeout(), setSuccessDisplay(true), AddJobToFavoriteList()
					)}
				>
					Add to favorites
				</Button>
				<Link
					onClick={() => (visible === true ? setVisible(false) : setVisible(true))}
					to={'/favorite'}
					style={{ display: `${onJob === true ? 'none' : 'block'}` }}
				>
					<Button
						style={{
							color: 'white',
							backgroundColor: '#2F4F4F',
							marginRight: '140px',
							float: 'right',
							display: `${onJob === true ? 'none' : 'block'}`,
						}}
						onClick={() => DeleteJobFromFavoriteList()}
					>
						Delete from favorites
					</Button>
				</Link>
			</Footer>
		</Layout>
	);
};

export default Detail;
