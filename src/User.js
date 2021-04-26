import Button from './components/Button';
const User = ({ data, fetchRepos, fetchStarred }) => {
	return (
		<div className="card mb-3 mt-2 ">
			<img src={data.avatar_url} className="rounded-circle w-25 p-3 align-self-center" alt="avatar" />
			<div className="card-body">
				<h2 className="card-title">{data.name}</h2>
				<p className="card-text">
					<small className="text-muted">{data.login}</small>
				</p>
				<p className="card-text">{data.bio}</p>
				<p className="card-text">
					<small className="text-muted">{data.email}</small>
				</p>
				<div className="d-flex justify-content-evenly ">
					<Button
						label={'repos'}
						onClick={() => fetchRepos(data.login)}
						icon={'fa-book'}
						bootstrap={'btn-primary'}
					/>
					<Button
						label={'starred'}
						onClick={() => fetchStarred(data.login)}
						icon={'fa-star-o'}
						bootstrap={'btn-primary'}
					/>
				</div>
			</div>
		</div>
	);
};

export default User;
