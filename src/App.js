import { useEffect, useState } from 'react';
import './App.css';
import Home from './Home';
import { getUserData, getUserRepos } from './api';

const mockData = {
	login: 'felipeeu',
	id: 22958295,
	node_id: 'MDQ6VXNlcjIyOTU4Mjk1',
	avatar_url: 'https://avatars.githubusercontent.com/u/22958295?v=4',
	gravatar_id: '',
	url: 'https://api.github.com/users/felipeeu',
	html_url: 'https://github.com/felipeeu',
	followers_url: 'https://api.github.com/users/felipeeu/followers',
	following_url: 'https://api.github.com/users/felipeeu/following{/other_user}',
	gists_url: 'https://api.github.com/users/felipeeu/gists{/gist_id}',
	starred_url: 'https://api.github.com/users/felipeeu/starred{/owner}{/repo}',
	subscriptions_url: 'https://api.github.com/users/felipeeu/subscriptions',
	organizations_url: 'https://api.github.com/users/felipeeu/orgs',
	repos_url: 'https://api.github.com/users/felipeeu/repos',
	events_url: 'https://api.github.com/users/felipeeu/events{/privacy}',
	received_events_url: 'https://api.github.com/users/felipeeu/received_events',
	type: 'User',
	site_admin: false,
	name: 'Felipe Domingues ',
	company: null,
	blog: '',
	location: null,
	email: 'felipeeu@yahoo.com.br',
	hireable: null,
	bio: 'React JS freelance developer , chemistry teacher and science/technology enthusiast',
	twitter_username: null,
	public_repos: 30,
	public_gists: 0,
	followers: 10,
	following: 4,
	created_at: '2016-10-20T11:59:38Z',
	updated_at: '2021-04-21T08:53:53Z'
};

function App() {
	const [ value, setValue ] = useState('');

	useEffect(() => {
		getUserRepos('felipeeu');
	}, []);

	return (
		<div className="container-sm p-3">
			<Home value={value} setValue={setValue} data={mockData} />
		</div>
	);
}

export default App;
