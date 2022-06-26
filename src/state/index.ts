import { createGlobalState } from 'react-hooks-global-state';
import { InitialState } from '../types';

const initialState: InitialState = {
	posts: [],
	profile: null,
};

export const { setGlobalState, useGlobalState } =
	createGlobalState(initialState);
