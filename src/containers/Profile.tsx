import React, { useCallback, useEffect } from 'react';
import { Container, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../state';

const Profile = () => {
	const [value, update] = useGlobalState('profile');

	const fetchProfile = useCallback(async () => {
		try {
			const url = 'https://jsonplaceholder.typicode.com/users/1';
			const response = await fetch(url);
			const data = await response.json();

			update(data);
		} catch (error) {
			if (error) {
				throw new Error();
			}
		}
	}, []);

	useEffect(() => {
		fetchProfile();
	}, []);

	return (
		value && (
			<Container>
				<Typography variant='h2' component='h1'>
					{value.name}
				</Typography>

				<Typography variant='h5' component='h2'>
					Username: @{value.username} | Email: {value.email}
				</Typography>

				<Typography variant='subtitle1' component='div'>
					phone: {value.phone}
				</Typography>

				<Typography
					variant='subtitle1'
					color='primary'
					component={Link}
					to={value.website}
					sx={{ textDecoration: 'none' }}
				>
					Website: {value.website}
				</Typography>

				<Divider />

				<Typography variant='h6' component='h4'>
					Address
				</Typography>

				<Typography variant='subtitle1' component='div'>
					City: {value.address.city}
				</Typography>

				<Typography variant='subtitle1' component='div'>
					Street: {value.address.street}
				</Typography>

				<Typography variant='subtitle1' component='div'>
					Suite: {value.address.suite}
				</Typography>

				<Typography variant='subtitle1' component='div'>
					Zip code: {value.address.zipcode}
				</Typography>

				<Divider />

				<Typography variant='h6' component='h4'>
					Work
				</Typography>

				<Typography variant='subtitle1' component='div'>
					Company: {value.company.name}
				</Typography>

				<Typography variant='subtitle1' component='div'>
					#{value.company.bs}
				</Typography>
			</Container>
		)
	);
};

export default Profile;
