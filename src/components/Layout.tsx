import { CssBaseline } from '@mui/material';
import React, { FC } from 'react';
import NavbarComponent from './NavbarComponent';

const Layout: FC = ({ children }) => {
	return (
		<>
			<CssBaseline />
			<NavbarComponent />
			<main className='main'>{children}</main>
		</>
	);
};

export default Layout;
