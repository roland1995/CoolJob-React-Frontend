import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Button } from 'antd';
import styled from 'styled-components';
import { PostApiData } from '../../hook/PostApiData';

const Div = styled.div`
	margin-bottom: 20px;
`;

const Label = styled.label`
	font-size: 16px;
	font-weight: bold;
`;

const Input = styled.input`
	width: 100%;
	font-size: 14px;
`;

const Textarea = styled.textarea`
	width: 100%;
	font-size: 14px;
	height: 100px;
`;

let result = {
	company: '',
	company_url: '',
	company_logo: '',
	location: '',
	type: '',
	title: '',
	description: '',
	how_to_apply: '',
	id: '',
	url: '',
	created_at: '',
};

function handleChange(event) {
	result[event.target.id] = event.target.value;
}

function handleSubmit() {
	const newId = makeId(25);
	const url = `https://jobs.github.com/positions/${newId}`;

	var today = new Date();
	var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
	var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
	var fullTime = `${date} ${time}`;

	result['id'] = newId;
	result['url'] = url;
	result['created_at'] = fullTime;

	PostApiData(result, 'https://localhost:44318/api/Jobs');
	window.location.reload(false);
}

function makeId(length) {
	var result = '';
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

export const Add = () => {
	const { Footer, Content } = Layout;

	return (
		<Layout>
			<Content style={{ marginLeft: 250, marginRight: 250 }}>
				<form method='post'>
					<fieldset>
						<legend>
							<h3 style={{ marginTop: 25 }}>Add new advertisement</h3>
						</legend>
						<Div>
							<Label for='company'>Company name:</Label>
							<br />
							<Input type='text' id='company' onChange={handleChange} />
						</Div>

						<Div>
							<Label for='company_url'>Website URL:</Label>
							<br />
							<Input type='text' id='company_url' onChange={handleChange} />
						</Div>

						<Div>
							<Label for='company_logo'>Company logo URL:</Label>
							<br />
							<Input type='text' id='company_logo' onChange={handleChange} />
						</Div>

						<Div>
							<Label for='location'>Location:</Label>
							<br />
							<Input type='text' id='location' onChange={handleChange} />
						</Div>

						<Div>
							<Label for='type'>Employment type:</Label>
							<br />
							<Input type='text' id='type' onChange={handleChange} />
						</Div>

						<Div>
							<Label for='title'>Position:</Label>
							<br />
							<Input type='text' id='title' onChange={handleChange} />
						</Div>

						<Div>
							<Label for='description'>Description:</Label>
							<br />
							<Textarea
								type='text'
								id='description'
								onChange={handleChange}
							></Textarea>
						</Div>

						<Div>
							<Label for='how_to_apply'>How to apply</Label>
							<br />
							<Input type='text' id='how_to_apply' onChange={handleChange} />
						</Div>
					</fieldset>
				</form>
			</Content>
			<Footer style={{ alignSelf: 'center' }}>
				<Button style={{ fontSize: 18 }} onClick={handleSubmit}>
					Send advertisement
				</Button>
			</Footer>
		</Layout>
	);
};

export default Add;
