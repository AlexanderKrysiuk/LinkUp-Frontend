import { Meetings } from '@data/dataTypes';
import { getMeetings } from '@middleware/meetingsHandler';
import React, { useEffect, useState } from 'react';
import MeetingsListComponent from './MeetingsListComponent';

const UpcomingMeetingsComponent = (): JSX.Element => {
	const [userMeetings, setUserMeetings] = useState<Meetings>([]);
	const [token, setToken] = useState<string | undefined>(undefined);

	useEffect(() => {
		const storedToken = localStorage.getItem('token');
		if (storedToken) {
			setToken(storedToken);
		}
	}, []);

	useEffect(() => {
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
