import { getLocaleDayNames } from '@utils/CalendarHelpers/calendarFunctions.ts';
import React from 'react';

const CalendarDayNamesComponent = () => {
	return (
		<>
			{getLocaleDayNames().map((dayName, index) => (
				<div
					className='calendar__header-day'
					key={index}>
					{dayName}
				</div>
			))}
		</>
	);
};

export default CalendarDayNamesComponent;
