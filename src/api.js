import axios from 'axios';

const gitHubToken = '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';

const endPointBaseUrl = `https://api.github.com`;

const header = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
	Authorization: `token ${gitHubToken}`
};

const endpoint = () => {
	const instance = axios.create({
		baseURL: endPointBaseUrl,
		headers: header
	});

	return instance;
};

export const getUserData = async (name) => {
	const axiosInstance = endpoint();

	try {
		const response = await axiosInstance.get(`/users/${name}`);
		if (response) return response;
	} catch (exception) {
		throw exception;
	}
};

export const getUserRepos = async (name) => {
	const axiosInstance = endpoint();

	try {
		const response = await axiosInstance.get(`/users/${name}/repos`);
		if (response) {
			console.log('REPOS :', response);
			return response;
		}
	} catch (exception) {
		throw exception;
	}
};
