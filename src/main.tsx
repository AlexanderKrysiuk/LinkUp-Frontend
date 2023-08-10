import * as React from 'react';

import * as ReactDOM from 'react-dom/client';

import { App, ModalProvider } from './App.tsx';

import { BrowserRouter } from 'react-router-dom';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ModalProvider>
				<App />
			</ModalProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
