import { Fragment } from 'react';

const Search = ({ value, setValue }) => {
	return (
		<div className="input-group flex-nowrap">
			<span className="input-group-text" id="basic-addon1">
				<i className="fa fa-search" />{' '}
			</span>
			<input
				value={value}
				type="text"
				className="form-control"
				placeholder="Username"
				aria-label="Username"
				aria-describedby="basic-addon1"
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	);
};

const User = ({ data }) => {
	return (
		<div className="card mb-3 mt-2 ">
			<img src={data.avatar_url} className="rounded-circle w-50 p-3 align-self-center" alt="avatar" />
			<div className="card-body">
				<h2 className="card-title">{data.name}</h2>
				<p className="card-text">{data.bio}</p>
				<p className="card-text">
					<small className="text-muted">{data.email}</small>
				</p>
				<Button label={'repos'} />
				<Button label={'stars'} />
			</div>
		</div>
	);
};

const Button = ({ label }) => {
	return (
		<button type="button" className="btn btn-primary">
			{label}
		</button>
	);
};

const Home = ({ value, setValue, data }) => (
	<Fragment>
		<Search value={value} setValue={setValue} />
		<User data={data} />
	</Fragment>
);
export default Home;
