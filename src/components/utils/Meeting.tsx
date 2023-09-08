import React from 'react';
import './Meeting.css';

interface MeetingProps {
	date: string;
	description: string;
}

const Meeting: React.FC<MeetingProps> = ({
	date,
	description,
}: MeetingProps) => {
	return (
		<div className='meeting'>
			<h4 className='meeting__date'>{date}</h4>
			{description.length > 0 ? (<p className='meeting__desc'>Description: {description}</p>) : null}
		</div>
	);
};

export default Meeting;
