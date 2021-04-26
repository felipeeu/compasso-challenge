const Repos = ({ data }) => {
	return (
		<div className="card mb-3 mt-2 bg-secondary">
			<div className="card-body">
				{data &&
					data.map((repo, idx) => {
						return (
							<div className="card mb-3 mt-2 bg-light" key={idx}>
								<div className="card-body ">
									<h3>{repo.name}</h3>
								</div>
								<div className="card-body ">
									<span className="badge bg-success mx-1">
										<i className="fa fa-star" />
										<span className="px-1">star: {repo.stargazers_count}</span>
									</span>
									<span className="badge bg-warning text-dark mx-1 ">
										<i className="fa fa-eye" />
										<span className="px-1">watch: {repo.watchers_count}</span>
									</span>
									<span className="badge bg-info text-dark mx-1">
										<i className="fa fa-code-fork" />
										<span className="px-1">fork: {repo.forks_count}</span>
									</span>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Repos;
