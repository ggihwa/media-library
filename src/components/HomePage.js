import React from 'react'
import {Link} from 'react-router'

const HomePage = () => (
	<div className="jumbotron center">
		<h1 className="lead">Welcome to Media library...</h1>
		<div>
			<Link to="library">
				<button className="btn btn-lg btn-primary">visit library</button>
			</Link>
		</div>
	</div>
)

export default HomePage
