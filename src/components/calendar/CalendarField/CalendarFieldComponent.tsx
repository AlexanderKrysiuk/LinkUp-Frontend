import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useBackdrop } from '@hooks/BackdropHooks.tsx';

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
	const { toggleBackdrop } = useBackdrop();
	return (
		<div
			className={`calendar__field ${today ? 'today' : null}`}
			onClick={meetings.length > 0 ? toggleBackdrop : undefined}>
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
