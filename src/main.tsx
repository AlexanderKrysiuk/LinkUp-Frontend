import * as React from 'react';

import * as ReactDOM from 'react-dom/client';

import { App } from './App.tsx';

import { BackdropProvider } from '@contexts/BackdropContext.tsx';

import { BrowserRouter } from 'react-router-dom';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<BackdropProvider>
				<App />
			</BackdropProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
