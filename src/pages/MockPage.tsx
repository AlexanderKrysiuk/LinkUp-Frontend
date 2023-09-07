/**
 * @module MockPageComponent
 * @description MockPageComponent is a React component representing a mock page in your web application.
 */
import React, { useEffect, useState } from 'react';

import Button from '@components/utils/buttons/Button';

import NewMeetingForm from '@components/utils/NewMeetingForm';

/**
 * This component manages the visibility of a new meeting form based on the user's authentication state.
 * If the user is authenticated, it displays a welcome message and a button to add a new meeting.
 * Clicking the button toggles the visibility of the new meeting form.
 *
 * @returns {JSX.Element} - The rendered MockPageComponent.
 * @example
 * // Import and use MockPageComponent in your application
 * import MockPageComponent from '@components/pages/MockPageComponent';
 *
 * const App = () => {
 *   return (
 *     <div>
 *       <MockPageComponent />
 *     </div>
 *   );
 * };
 *
 * export default App;
 */
const MockPageComponent = (): JSX.Element => {
	const [isFormVisible, setIsFormVisible] = useState(false);
	const [token, setToken] = useState('');

	/**
	 * useEffect hook to check if a user is authenticated.
	 *
	 * This hook retrieves the user's authentication token from local storage.
	 * If a token is found, it sets the `token` state to indicate that the user is authenticated.
	 *
	 * @listens token
	 */
	useEffect(() => {
		const storedToken = localStorage.getItem('token');
		if (storedToken) {
			setToken(storedToken);
		}
	}, [token]);

	/**
	 * Toggles the visibility of the new meeting form.
	 */
	const toggleForm = () => {
		setIsFormVisible(!isFormVisible);
	};

	return (
		<div>
			{token ? <h1>You are logged in, dawg!</h1> : null}
			<Button
				text='+ Add new meeting'
				onClick={toggleForm}
			/>
			{isFormVisible && <NewMeetingForm />}
		</div>
	);
};

export default MockPageComponent;
