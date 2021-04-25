import { useState } from 'react';
import './App.css';
import { getUserData, getUserRepos, getStarredRepos } from './api';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Search from './components/Search';
import Button from './components/Button';
import User from './User';
import Repos from './Repos';
import Starred from './Starred';

function App() {
	const [ value, setValue ] = useState('');
	const [ userData, setUserData ] = useState([]);
	const [ repoData, setRepoData ] = useState([]);
	const [ starredData, setStarredData ] = useState([]);

	const location = useLocation();

	const history = useHistory();

	const fetchUser = (name) => {
		if (name) {
			getUserData(name)
				.then((response) => {
					if (Object.keys(response).length > 0) setUserData(response.data);
				})
				.catch((err) => err);
			history.push(`/${name}`);
		}
	};
	const fetchRepos = (name) => {
		getUserRepos(name)
			.then((response) => {
				if (Object.keys(response).length > 0) setRepoData(response.data);
			})
			.catch((err) => err);
		history.push(`/${name}/repos`);
	};

	const fetchStarred = (name) => {
		getStarredRepos(name)
			.then((response) => {
				if (Object.keys(response).length > 0) setStarredData(response.data);
			})
			.catch((err) => err);
		history.push(`/${name}/starred`);
	};

	return (
		<div className="container-sm p-3">
			<Search value={value} setValue={setValue} onClick={() => fetchUser(value)} />
			<Switch>
				<Route path="/:user/starred">
					<Button label={'Back'} onClick={() => history.push(`/${value}`)} />
					<Starred />
				</Route>
				<Route path="/:user/repos">
					<Button label={'Back'} onClick={() => history.push(`/${value}`)} />
					<Repos data={repoData} />
				</Route>
				<Route path="/:user">
					<User data={userData} fetchRepos={fetchRepos} fetchStarred={fetchStarred} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
