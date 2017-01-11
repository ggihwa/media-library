import React from 'react'
import { Link, IndexLink } from 'react-router'

const Header = () => (
	<div className="test-center">
		<nav className="navbar navbar-defalt">
			<IndexLink to="/" activeClassName="active">Home</IndexLink>
			{" | "}
			<Link to="library" activeClassName="active">Library</Link>
		</nav>
	</div>
)

export default Header;
