import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import HomePage from './HomePage';
import Profile from './Profile';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/profile' element={<Profile />} />
			</Routes>
		</Layout>
	);
}

export default App;
