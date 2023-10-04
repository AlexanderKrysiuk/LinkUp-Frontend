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
	const calculateDuration = (meeting: Meeting) => {
		const startTimeDate = new Date(meeting.dateTime);
		const endTimeDate = new Date(
			startTimeDate.setMinutes(
				startTimeDate.getMinutes() + meeting.duration,
			),
		);
		return `${new Date(meeting.dateTime).toLocaleTimeString(
			navigator.language,
			{
				timeStyle: 'short',
			},
		)} - ${endTimeDate.toLocaleTimeString(navigator.language, {
			timeStyle: 'short',
		})}`;
	};

	return (
		<div className='calendar__meetings'>
			{meetings[0] && (
				<div className='calendar__meetings__header'>
					{new Date(meetings[0].dateTime).toLocaleDateString(
						navigator.language,
						{
							dateStyle: 'full',
						},
					)}
				</div>
			)}
			{meetings.map((meeting) => {
				return (
					<div
						key={meeting.id}
						className='calendar__meeting'>
						<p className='calendar__meeting-time'>
							<span>Time:</span>
							<span>
								{calculateDuration(meeting)} ({meeting.duration}{' '}
								min)
							</span>
						</p>
						{meeting.description && (
							<p className='calendar__meeting-description'>
								<span>Description:</span>
								<span>{meeting.description}</span>
							</p>
						)}
						<p className='calendar__meeting-max-participants'>
							<span>Participants:</span>
							<span>
								1 / {meeting.maxParticipants} (x slots left)
							</span>
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default CalendarMeetingsComponent;
