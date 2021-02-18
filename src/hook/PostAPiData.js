import { useEffect } from 'react';
import axios from 'axios';

export const PostApiData = (job, url) => {
	useEffect(() => {
		// POST request using axios inside useEffect React hook
		const article = JSON.stringify(job);
		axios.post(url, article).then((response) => setArticleId(response.data.id));

		// empty dependency array means this effect will only run once (like componentDidMount in classes)
	}, [job, url]);
};

export default PostApiData;
