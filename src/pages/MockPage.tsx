//import Button from '@components/utils/Button';
import MockMeetings from '@components/mock/mockMeetingsAll';
import NewMeetingForm from '@components/utils/NewMeetingForm';
import Button from '@components/utils/buttons/Button';
import { getRole } from '@middleware/authHandler';
import { getMeetings } from '@middleware/meetingsHandler';
import { Meetings } from 'data/dataTypes';
import React, { useEffect, useState } from 'react';

const MockPageComponent = (): JSX.Element => {
	const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
	const [token, setToken] = useState<string>();
	const [userRole, setUserRole] = useState<string>();

	//state to see meetings
	const [userMeetings, setUserMeetings] = useState<Meetings>([]);

	useEffect(() => {
		const storedToken = localStorage.getItem('token');
		if (storedToken) {
			setToken(storedToken);
		}
	}, [token]);

	useEffect(() => {
		const fetchUserRole = async () => {
			const roleToSet: any = await getRole();
			setUserRole(roleToSet);
		};

		fetchUserRole();
	}, [userRole]);

	const toggleForm = () => {
		setIsFormVisible(!isFormVisible);
	};

	//get meetings from DB and save as state prop => so far all, no filter
	useEffect(() => {
		getMeetings()
			.then((data) => {
				setUserMeetings(data);
			})
			.catch((error) =>
				console.error("Couldn't fetch data from DB.", error),
			);
	}, []);

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
