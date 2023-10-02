/**
 * @module UpcomingdMeetingsComponent
 * @description Module containing the meetings list component with upcoming meetings.
 */

import { Meetings } from '@data/dataTypes';
import { getMeetings } from '@middleware/meetingsHandler';
import React, { useEffect, useState } from 'react';
import MeetingsListComponent from './MeetingsListComponent';

/**
 * UpcomingMeetingsComponent - Component for displaying upcoming user meetings.
 *
 * This component is responsible for fetching and displaying upcoming meetings
 * for a user. It utilizes component state to store the retrieved data and the
 * user's access token. The component uses side effects to initiate data retrieval
 * upon component load.
 *
 * @component
 * @returns {JSX.Element} - Returns a list of upcoming meetings as a React component.
 * @example
 * // Importing the component
 * import UpcomingMeetingsComponent from './UpcomingMeetingsComponent';
 *
 * // Using the component within another component or a router
 * <UpcomingMeetingsComponent />
 */

const UpcomingMeetingsComponent = (): JSX.Element => {
	const [userMeetings, setUserMeetings] = useState<Meetings>([]);
	const [token, setToken] = useState<string | undefined>(undefined);

	useEffect(() => {
		// Check if there is a saved access token in local storage
		const storedToken = localStorage.getItem('token');
		if (storedToken) {
			setToken(storedToken);
		}
	}, []);

	useEffect(() => {
		// Fetch upcoming meetings after setting the access token
		if (token) {
			getMeetings(token, 'upcoming')
				.then((data) => {
					setUserMeetings(data);
				})
				.catch((error) =>
					console.error("Couldn't fetch data from DB.", error),
				);
		}
	}, [token]);

	return <MeetingsListComponent meetings={userMeetings} />;
};

export default UpcomingMeetingsComponent;
