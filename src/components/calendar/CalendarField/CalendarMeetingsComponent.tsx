import React from 'react';

type Meeting = {
	id: string;
	dateTime: string;
	maxParticipants: number;
	duration: number;
	description: string;
};

type CalendarMeetingsComponentProps = {
	meetings: Meeting[];
};

const CalendarMeetingsComponent = ({
	meetings,
}: CalendarMeetingsComponentProps): JSX.Element => {
	return (
		<>
			{meetings.map((meeting) => {
				return (
					<div className='calendar__meetings'>
						<p className='calendar__meetings_dateTime'>
							{meeting.dateTime}
						</p>
						<p className='calendar__meetings_maxParticipants'>
							{meeting.maxParticipants}
						</p>
						<p className='calendar__meetings_duration'>
							{meeting.duration}
						</p>
						<p className='calendar__meetings_description'>
							{meeting.description}
						</p>
					</div>
				);
			})}
		</>
	);
};

export default CalendarMeetingsComponent;
