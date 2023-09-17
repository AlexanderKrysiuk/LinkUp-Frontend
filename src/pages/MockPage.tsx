//import Button from '@components/utils/Button';
import NewMeetingForm from '@components/meetingForm/NewMeetingForm';
import MockMeetings from '@components/mock/mockMeetingsAll';
import Button from '@components/utils/buttons/Button';
import { getMeetings } from '@middleware/meetingsHandler';
import { getRole } from '@middleware/userHandler';
import { Meetings } from 'data/dataTypes';
import React, { useEffect, useState } from 'react';

const MockPageComponent = (): JSX.Element => {
	const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
	const [token, setToken] = useState<string | undefined>(undefined);
	const [userRole, setUserRole] = useState<string | undefined>(undefined);

	//state to see meetings
	const [userMeetings, setUserMeetings] = useState<Meetings>([]);

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
	}, []);

	useEffect(() => {
		const fetchUserRole = async () => {
			const roleToSet: any = await getRole();
			setUserRole(roleToSet);
		};

		if (token) {
			fetchUserRole();
		}
	}, [token]);

	/**
	 * Toggles the visibility of the new meeting form.
	 */
	const toggleForm = () => {
		setIsFormVisible(!isFormVisible);
	};

	//get meetings from DB and save as state prop => so far all, no filter
	useEffect(() => {
		if (token) {
			getMeetings(token)
				.then((data) => {
					setUserMeetings(data);
				})
				.catch((error) =>
					console.error("Couldn't fetch data from DB.", error),
				);
		}
	}, [token]);

	return (
		<div>
			{/* if logged : display his role and button to add meetings */}
			{token ? (
				<div>
					{/* <h1> You are logged in, dawg!</h1> */}
					Hey, {userRole}.
				</div>
			) : null}
			{/* end if logged */}

			{/* if authorized : allow to add meeting */}
			{userRole === 'Contractor' || userRole === 'Admin' ? (
				<Button
					text='+ Add new meeting'
					onClick={toggleForm}
				/>
			) : null}
			{isFormVisible && <NewMeetingForm />}
			{/* end if authorized */}

			{/* if created/booked meetings : get and see meetings */}
			{token && userMeetings ? (
				<MockMeetings meetings={userMeetings} />
			) : null}
			{/* end if created/booked meetings */}
		</div>
	);
};

export default MockPageComponent;
