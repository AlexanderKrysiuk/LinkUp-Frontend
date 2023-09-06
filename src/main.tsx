/**
 * Entry point of the application.
 *
 * This script initializes the React application and renders the root component.
 * It wraps the root component with various context providers for state management.
 *
 * @packageDocumentation
 * @module Main
 */

import { BackdropProvider } from '@contexts/BackdropContext.tsx';
import * as React from 'react';

import * as ReactDOM from 'react-dom/client';

import router from '@router/Router.tsx';
import { RouterProvider } from 'react-router-dom';
import './App.css';

import './index.css';

/**
 * Initialize and render the React application.
 *
 * This function initializes the application by rendering the root component within
 * the specified container. It leverages StrictMode to highlight potential issues
 * during development, uses BrowserRouter for routing, and wraps the App component
 * with the BackdropProvider for context-based state management.
 *
 * @param {HTMLElement} rootContainer - The DOM element where the application will be rendered.
 * @remarks
 * This function sets up the main entry point of the application. It creates a React root
 * instance and renders the application within it. The root component is wrapped with
 * StrictMode for enhanced development warnings. The BrowserRouter is used to enable
 * routing capabilities, and the BackdropProvider ensures proper context-based state management.
 * @example
 * // Get the root container element by its ID ('root') and call initializeApp function
 * const rootContainer = document.getElementById('root')!;
 * initializeApp(rootContainer);
 */
export function initializeApp(rootContainer: HTMLElement): void {
	// Create a React root instance and render the application within it
	ReactDOM.createRoot(rootContainer).render(
		<React.StrictMode>
			{/* Enable routing and context management */}
			<BackdropProvider>
				{/* Render the root component */}
				<RouterProvider router={router} />
			</BackdropProvider>
		</React.StrictMode>,
	);
}

// Get the root container element by its ID ('root') and call initializeApp function
const rootContainer = document.getElementById('root')!;
initializeApp(rootContainer);
