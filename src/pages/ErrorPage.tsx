import React from 'react';
import { Route, useRouteError } from 'react-router-dom';

/**
 * Page component for displaying error messages.
 *
 * This component is responsible for rendering error messages when unexpected errors occur
 * during routing. It utilizes the `useRouteError` hook from React Router DOM to retrieve
 * error information and displays a user-friendly error message.
 *
 * @component
 * @returns {JSX.Element} - The rendered error page with an error message.
 * @example
 * ```tsx
 * <ErrorPage />
 * ```
 */
const ErrorPage = (): JSX.Element => {
	const error: any = useRouteError();
	console.error(error);
	return (
		<div id='error-page'>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
};

export default ErrorPage;
