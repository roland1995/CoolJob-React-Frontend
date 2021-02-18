import axios from 'axios';

export const DeleteApiData = (url) => {
	axios.delete(url);
};

export default DeleteApiData;
