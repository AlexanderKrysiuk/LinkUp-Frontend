import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';

type Meeting = {
	id: string;
	dateTime: string;
	maxParticipants: number;
	duration: number;
	description: string;
};

type CalendarFieldComponentProps = {
	dayNumber: number;
	today: boolean;
	meetings: Meeting[];
};

const CalendarFieldComponent = ({
	dayNumber,
	today,
	meetings,
}: CalendarFieldComponentProps) => {
	return (
		<div className={`calendar__field ${today ? 'today' : null}`}>
			<p className='calendar__field_day-number'>{dayNumber}</p>
			<p className='calendar__field_meetings'>
				{meetings.length! > 0 && (
					<span className='calendar__field_meetings_icon'>
						<FontAwesomeIcon icon={faCalendarAlt} />
					</span>
				)}
				{meetings.length! > 0 && (
					<span className='calendar__field_meetings_count'>
						{meetings.length}
					</span>
				)}
			</p>
		</div>
	);
};

export default CalendarFieldComponent;
