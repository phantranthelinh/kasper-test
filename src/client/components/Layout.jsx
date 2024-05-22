import React from 'react';

const Layout = ({ children }) => {
	return (
		<div>
			<nav></nav>
			<main>{children}</main>
			<footer></footer>
		</div>
	);
};

export default Layout;
