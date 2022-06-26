export interface IPost {
	userId?: number;
	id?: number;
	title: string;
	body: string;
}

export interface IProfile {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}

export interface InitialState {
	posts: IPost[];
	profile: IProfile | null;
}
