import axios from 'axios';

const endPointBaseUrl = `https://api.github.com`;

const header = {
	Accept: 'application/json',
	'Content-Type': 'application/json'
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
			return response;
		}
	} catch (exception) {
		throw exception;
	}
};

export const getStarredRepos = async (name) => {
	const axiosInstance = endpoint();

	try {
		const response = await axiosInstance.get(`/users/${name}/starred`);
		if (response) {
			return response;
		}
	} catch (exception) {
		throw exception;
	}
};
