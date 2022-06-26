import React, { FC } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { IPost } from '../types';

const CardComponent: FC<IPost> = ({ title, body }) => {
	return (
		<Card sx={{ mb: '15px' }}>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{title}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{body}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CardComponent;
