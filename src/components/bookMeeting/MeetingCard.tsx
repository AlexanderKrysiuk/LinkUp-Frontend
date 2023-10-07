import { API_MEETINGS_URL } from '@data/links';
import React, { useState } from 'react';
import './MeetingCard.css';

const joinMeeting = async (id: string) => {
	const token = localStorage.getItem('token');
	const apiUrl = API_MEETINGS_URL + '/' + id + '/join';
	console.log(apiUrl);

	fetch(apiUrl, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}).then((response) => {
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
	});
	showAlert();
};

const showAlert = () => {
	alert('You joined the meeting :)');
};

const MeetingCard = ({ meeting }: any) => {
	const dateObject = new Date(meeting.dateTime);
	const year = dateObject.getUTCFullYear();
	const month = (dateObject.getUTCMonth() + 1).toString().padStart(2, '0');
	const day = dateObject.getUTCDate().toString().padStart(2, '0');
	const hours = dateObject.getUTCHours().toString().padStart(2, '0');
	const minutes = dateObject.getUTCMinutes().toString().padStart(2, '0');

	const formattedDate = `${year}-${month}-${day}`;
	const formattedTime = `${hours}:${minutes}`;

	return (
		<div className='meeting-card'>
			<p>Date: {formattedDate}</p>
			<p>Time: {formattedTime}</p>
			<p>Duration: {meeting.duration}</p>
			<button
				className='button'
				onClick={() => joinMeeting(meeting.id)}>
				Join Meeting
			</button>
		</div>
	);
};
export default MeetingCard;

