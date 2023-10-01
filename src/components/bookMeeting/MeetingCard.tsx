import React from 'react';
import './MeetingCard.css';

const joinMeeting = (id: any) => {
	const token = localStorage.getItem('token');
	const apiUrl = 'https://localhost:5142/api/Meetings/' + id + '/join';

	fetch(apiUrl, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}).then((response) => {
		if (!response.ok) {
			console.log(response.json());
			throw new Error('Network response was not ok');
		}
	});
};

const MeetingCard = ({ meeting }: any) => {
	return (
		<div className='meeting-card'>
			<h3>ID: {meeting.id}</h3>
			<p>Data i Godzina: {meeting.dateTime}</p>
			<p>Opis: {meeting.description}</p>
			<button
				className='button'
				onClick={() => joinMeeting(meeting.id)}>
				Join Meeting
			</button>
		</div>
	);
};
export default MeetingCard;

