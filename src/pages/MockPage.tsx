//import Button from '@components/utils/Button';
import NewMeetingForm from '@components/utils/NewMeetingForm';
import React, { useState } from 'react';
import Button from '@components/utils/buttons/Button';

const MockPageComponent = () => {
	const [isFormVisible, setIsFormVisible] = useState(false);

  	const toggleForm = () => {
    	setIsFormVisible(!isFormVisible);
	}
	return (
		<div>
			<Button
				text='+ Add meeting slot'
				onClick={toggleForm}
			/>
			{isFormVisible && <NewMeetingForm />}
		</div>
	);
};

export default MockPageComponent;
