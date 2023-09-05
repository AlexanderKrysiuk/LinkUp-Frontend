//import Button from '@components/utils/Button';
import NewMeetingForm from '@components/utils/NewMeetingForm';
import Button from '@components/utils/buttons/Button';
import React, { useEffect, useState } from 'react';

const MockPageComponent = () => {
	const [isFormVisible, setIsFormVisible] = useState(false);

	//const [isLogged, setIsLogged] = useState(false);
	const [token, setToken] = useState('');

	useEffect(() => {
		const storedToken = localStorage.getItem('token');
		if (storedToken) {
			setToken(storedToken);
			//setIsLogged(true);
		}
	}, [token]);

	const toggleForm = () => {
		setIsFormVisible(!isFormVisible);
	};
	return (
		<div>
			{token ? <h1> You are logged in, dawg!</h1> : null}
			<Button
				text='+ Add new meeting'
				onClick={toggleForm}
			/>
			{isFormVisible && <NewMeetingForm />}
		</div>
	);
};

export default MockPageComponent;
