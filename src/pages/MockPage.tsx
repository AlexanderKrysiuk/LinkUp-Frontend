//import Button from '@components/utils/Button';
import NewMeetingForm from '@components/utils/NewMeetingForm';
import Button from '@components/utils/buttons/Button';
import { getRole } from '@utils/auth';
import React, { useEffect, useState } from 'react';

const MockPageComponent = (): JSX.Element => {
	const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
	const [token, setToken] = useState<string>();
	const [userRole, setUserRole] = useState<string>();

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
	return (
		<div>
			{token ? (
				<div>
					<h1> You are logged in, dawg!</h1>
					<p>Hey, {userRole}.</p>
				</div>
			) : null}
			{userRole === 'Contractor' ? (
				<Button
					text='+ Add new meeting'
					onClick={toggleForm}
				/>
			) : null}
			{isFormVisible && <NewMeetingForm />}
		</div>
	);
};

export default MockPageComponent;
