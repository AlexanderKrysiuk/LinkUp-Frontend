/**
 * @module ArchivedMeetingsComponent
 * @description Module containing the meetings list component with archived meetings.
 */

import { Meetings } from '@data/dataTypes';
import { getMeetings } from '@middleware/meetingsHandler';
import React, { useEffect, useState } from 'react';
import MeetingsListComponent from './MeetingsListComponent';

/**
 * ArchivedMeetingsComponent - Component for displaying archived user meetings.
 *
 * This component is responsible for fetching and displaying archived meetings
 * for a user. It utilizes component state to store the retrieved data and the
 * user's access token. The component uses side effects to initiate data retrieval
 * upon component load.
 *
 * @component
 * @returns {JSX.Element} - Returns a list of archived meetings as a React component.
 * @example
 * // Importing the component
 * import ArchivedMeetingsComponent from './ArchivedMeetingsComponent';
 *
 * // Using the component within another component or a router
 * <ArchivedMeetingsComponent />
 */

const ArchivedMeetingsComponent = (): JSX.Element => {
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
		// Fetch archived meetings after setting the access token
		if (token) {
			getMeetings(token, 'archived')
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

export default ArchivedMeetingsComponent;
