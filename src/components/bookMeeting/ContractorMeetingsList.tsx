import { API_MEETINGS_FROM_ORGANIZATOR } from '@data/links';
import React, { useEffect, useState } from 'react';
import './ContractorMeetingsList.css';
import MeetingCard from './MeetingCard';
const ContractorMeetingsList = ({ contractorEmail }: any) => {
	const [meetings, setMeetings] = useState([]);

	useEffect(() => {
		fetch(`${API_MEETINGS_FROM_ORGANIZATOR}${contractorEmail}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not OK');
				}
				return response.json();
			})
			.then((data) => {
				setMeetings(data);
			})
			.catch((error) => {
				console.error('Error retrieving meeting data: ', error);
			});
	}, [contractorEmail]);
	return (
		<div>
			<div className='contractor-meetings-list'>
				<h2>Spotkania dla {contractorEmail}</h2>
				{meetings.map((meeting: any) => (
					<MeetingCard
						key={meeting.id}
						meeting={meeting}
					/>
				))}
			</div>
		</div>
	);
};
export default ContractorMeetingsList;

