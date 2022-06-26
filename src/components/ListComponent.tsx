import React, { FC } from 'react';
import CardComponent from './CardComponent';
import { IPost } from '../types';

interface ListProps {
	posts: IPost[];
}

const ListComponent: FC<ListProps> = ({ posts }) => {
	return (
		<>
			{posts &&
				posts.map(post => (
					<CardComponent key={post.id} title={post.title} body={post.body} />
				))}
		</>
	);
};

export default ListComponent;
