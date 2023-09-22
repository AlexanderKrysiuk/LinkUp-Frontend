import Meeting from 'components/utils/Meeting';
import React, { useEffect, useState } from 'react';
const ContractorMeetingsList = ({ contractorEmail }: any) => {
	const [meetings, setMeetings] = useState([]);

	useEffect(() => {
		fetch(
			`https://localhost:5142/api/Meetings/organizator/${contractorEmail}`,
		)
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
			<h2>Spotkania dla {contractorEmail}</h2>
			<ul>
				{meetings.map((meeting: any) => (
					<li key={meeting.id}>
						ID: {meeting.id}, Data i Godzina: {meeting.dateTime},
						Opis: {meeting.description}
					</li>
				))}
			</ul>
		</div>
	);
};
export default ContractorMeetingsList;

