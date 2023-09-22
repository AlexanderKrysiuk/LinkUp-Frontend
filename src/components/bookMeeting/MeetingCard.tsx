import React from 'react';
import './MeetingCard.css';
const MeetingCard = ({ meeting }: any) => {
	return (
		<div className='meeting-card'>
			<h3>ID: {meeting.id}</h3>
			<p>Data i Godzina: {meeting.dateTime}</p>
			<p>Opis: {meeting.description}</p>
		</div>
	);
};
export default MeetingCard;

