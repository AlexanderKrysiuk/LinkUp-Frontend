import { API_MEETINGS_URL } from '@data/links';
import React, { useState } from 'react';
import './MeetingCard.css';

const joinMeeting = async (id: string) => {
	const token = localStorage.getItem('token');
	const apiUrl = API_MEETINGS_URL + '/' + id + '/join';

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

