//import Button from '@components/utils/Button';
import NewMeetingForm from '@components/utils/NewMeetingForm';
import Button from '@components/utils/buttons/Button';
import React, { useState } from 'react';

const MockPageComponent = () => {
	const [isFormVisible, setIsFormVisible] = useState(false);

	const toggleForm = () => {
		setIsFormVisible(!isFormVisible);
	};
	return (
		<div>
			<Button
				text='+ Add new meeting'
				onClick={toggleForm}
			/>
			{isFormVisible && <NewMeetingForm />}
		</div>
	);
};

export default MockPageComponent;
