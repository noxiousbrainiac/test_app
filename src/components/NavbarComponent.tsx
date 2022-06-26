import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent: FC = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<Typography
						variant='h6'
						component={Link}
						to='/'
						sx={{ flexGrow: 1, textDecoration: 'none', color: '#fff' }}
					>
						Posts
					</Typography>

					<Typography
						variant='h6'
						component={Link}
						to='/profile'
						sx={{ textDecoration: 'none', color: '#fff' }}
					>
						Profile
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default NavbarComponent;
