import { Container } from '@mui/material';
import React, { FC, useCallback, useEffect } from 'react';
import FormComponent from '../components/FormComponent';
import ListComponent from '../components/ListComponent';
import { useGlobalState } from '../state';

const HomePage: FC = () => {
	const [value, update] = useGlobalState('posts');

	const fetchPosts = useCallback(async () => {
		try {
			const url = 'https://jsonplaceholder.typicode.com/posts';
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
		fetchPosts();
	}, []);

	return (
		<Container>
			<FormComponent />
			<ListComponent posts={value} />
		</Container>
	);
};

export default HomePage;
