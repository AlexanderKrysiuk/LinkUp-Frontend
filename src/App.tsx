import React, { useState } from 'react';

import './App.css';

import imageIcon from './assets/image-regular.svg';

import reactLogo from './assets/react.svg';

import BadgeComponent from '@components/navbar/badge/Badge.tsx';

import viteLogo from '/vite.svg';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<BadgeComponent
				text='sample'
				source={imageIcon}
			/>
			<div>
				<a
					href='https://vitejs.dev'
					target='_blank'>
					<img
						src={viteLogo}
						className='logo'
						alt='Vite logo'
					/>
				</a>
				<a
					href='https://react.dev'
					target='_blank'>
					<img
						src={reactLogo}
						className='logo react'
						alt='React logo'
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
