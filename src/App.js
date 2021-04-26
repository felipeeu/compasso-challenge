import { useState } from 'react';
import './App.css';
import { getUserData, getUserRepos, getStarredRepos } from './api';
import { Route, Switch, useHistory } from 'react-router-dom';
import Search from './components/Search';
import Button from './components/Button';
import User from './User';
import Repos from './Repos';
import NoUser from './NoUser';

function App() {
	const [ value, setValue ] = useState('');
	const [ userData, setUserData ] = useState({});
	const [ repoData, setRepoData ] = useState([]);
	const [ starredData, setStarredData ] = useState([]);

	const history = useHistory();

	const fetchUser = (name) => {
		if (name) {
			getUserData(name)
				.then((response) => {
					if (Object.keys(response).length > 0) setUserData(response.data);
				})
				.catch((err) => setUserData({}));
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
		<div className="container p-3 ">
			<nav class="navbar navbar-light bg-secondary">
				<div clasName="container">
					<Search value={value} setValue={setValue} onClick={() => fetchUser(value)} />
				</div>
			</nav>

			<Switch>
				<Route path="/:user/starred">
					<Button
						label={'Back'}
						onClick={() => history.push(`/${value}`)}
						icon={'fa-chevron-left'}
						bootstrap={'mt-2'}
					/>
					<Repos data={starredData} />
				</Route>
				<Route path="/:user/repos">
					<Button
						label={'Back'}
						onClick={() => history.push(`/${value}`)}
						icon={'fa-chevron-left'}
						bootstrap={'mt-2'}
					/>
					<Repos data={repoData} />
				</Route>
				<Route path="/:user">
					{Object.keys(userData).length > 0 ? (
						<User data={userData} fetchRepos={fetchRepos} fetchStarred={fetchStarred} />
					) : (
						<NoUser />
					)}
				</Route>
				<Route exact path="/">
					<NoUser />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
