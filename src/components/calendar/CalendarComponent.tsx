import React, { useEffect, useState } from 'react';

import './CalendarComponent.css';

import {
	calculateDaysToFill,
	getLocaleDayNames,
	getLocaleMonthName,
} from '@utils/Calendar.ts';

import CalendarFieldComponent from './CalendarField/CalendarFieldComponent.tsx';

type CalendarComponentProps = {
	month?: number;
	year?: number;
};

const CalendarComponent = ({
	month = new Date().getMonth(),
	year = new Date().getFullYear(),
}: CalendarComponentProps) => {
	const [dayNumbers, setDayNumbers] = useState<number[]>([]);

	useEffect(() => {
		const days = calculateDaysToFill(year, month);
		setDayNumbers(days);
	}, []);

	const monthName = getLocaleMonthName(month);

	const dayNames = getLocaleDayNames();

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
