import React, { useEffect, useState } from 'react';

import './CalendarComponent.css';

import CalendarFieldComponent from './CalendarField/CalendarFieldComponent.tsx';

const CalendarComponent = () => {
	const [dayNumbers, setDayNumbers] = useState<number[]>([]);

	useEffect(() => {
		setDayNumbers(Array.from({ length: 28 }, (_, i) => i + 1));
	}, []);

	const monthName = 'January';
	const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

	return (
		<div className='calendar'>
			<div className='calendar__header'>
				<div className='calendar__header-month'>{monthName}</div>
				<div className='calendar__header-days'>
					{dayNames.map((dayName) => (
						<div className='calendar__header-day'>{dayName}</div>
					))}
				</div>
			</div>
			<div className='calendar__body'>
				{dayNumbers.map((dayNumber) => (
					<CalendarFieldComponent dayNumber={dayNumber} />
				))}
			</div>
		</div>
	);
};

export default CalendarComponent;
