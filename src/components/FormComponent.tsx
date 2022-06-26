import React, { BaseSyntheticEvent, ChangeEvent, FC, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useGlobalState } from '../state';
import { IPost } from '../types';

const FormComponent: FC = () => {
	const [posts, update] = useGlobalState('posts');

	const [formValues, setFormValues] = useState<IPost>({
		id: 0,
		title: '',
		body: '',
		userId: 1,
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setFormValues(prevState => ({
			...prevState,
			id: posts.length + 1,
			[name]: value,
		}));
	};

	const handleSubmit = (e: BaseSyntheticEvent) => {
		e.preventDefault();

		if (formValues.title.length === 0 && formValues.body.length === 0)
			return alert('Fill empty fields!');

		update(prevState => [formValues, ...prevState]);

		setFormValues(prevState => ({
			...prevState,
			id: 0,
			title: '',
			body: '',
			userId: 1,
		}));
	};

	return (
		<Box className='form'>
			<TextField
				fullWidth
				name='title'
				label='Title'
				value={formValues.title}
				onChange={handleChange}
				sx={{ mb: '10px' }}
			/>

			<TextField
				fullWidth
				name='body'
				label='Body'
				value={formValues.body}
				onChange={handleChange}
				sx={{ mb: '10px' }}
				multiline
				rows={4}
			/>

			<Button onClick={handleSubmit} type='button' variant='contained'>
				Publish
			</Button>
		</Box>
	);
};

export default FormComponent;
