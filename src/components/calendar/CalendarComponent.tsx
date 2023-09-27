import React, { useEffect, useState } from 'react';

import './CalendarComponent.css';

import {
	CURRENT_DAY,
	CURRENT_MONTH,
	CURRENT_YEAR,
} from '@utils/CalendarHelpers/calendarConstants';

import { calculateDaysToFill } from '@utils/calendarUtils';

import CalendarFieldComponent from './CalendarField/CalendarFieldComponent';

import CalendarDayNamesComponent from './CalendarHeader/CalendarDayNamesComponent.tsx';
import CalendarHeaderComponent from './CalendarHeader/CalendarHeaderComponent.tsx';

const CalendarComponent = () => {
	const [selectedDate, setSelectedDate] = useState<Date>(
		new Date(CURRENT_YEAR, CURRENT_MONTH, CURRENT_DAY),
	);

	const [dayNumbers, setDayNumbers] = useState<number[]>([]);

	const selectedYear = selectedDate.getFullYear();
	const selectedMonth = selectedDate.getMonth();

	const updateDayNumbers = () => {
		const days = calculateDaysToFill(selectedYear, selectedMonth);
		setDayNumbers(days);
	};

	const isCurrentDay = (dayNumber: number) =>
		dayNumber === CURRENT_DAY &&
		selectedMonth === CURRENT_MONTH &&
		selectedYear === CURRENT_YEAR;

	useEffect(() => {
		updateDayNumbers();
	}, [selectedDate]);

	return (
		<div className='calendar'>
			<div className='calendar__header'>
				<CalendarHeaderComponent
					prevDate={selectedDate}
					setDate={setSelectedDate}
				/>
				<div className='calendar__header-days'>
					<CalendarDayNamesComponent />
				</div>
			</div>
			<div className='calendar__body'>
				{dayNumbers.map((dayNumber, index) => (
					<CalendarFieldComponent
						today={isCurrentDay(dayNumber)}
						dayNumber={dayNumber}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default CalendarComponent;
