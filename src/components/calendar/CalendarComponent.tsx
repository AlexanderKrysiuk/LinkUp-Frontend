import React, { useEffect, useState } from 'react';

import './CalendarComponent.css';

import {
	calculateDaysToFill,
	getLocaleDayNames,
	getLocaleMonthName,
} from '@utils/calendarUtils';

import { CURRENT_MONTH, CURRENT_YEAR } from '@utils/CalendarHelpers/constants';

import CalendarFieldComponent from './CalendarField/CalendarFieldComponent';
import CalendarMonthButtonComponent from './CalendarMonthButton/CalendarMonthButtonComponent';

const ARROW = { left: '<', right: '>' };

type CalendarComponentProps = {
	month?: number;
	year?: number;
};

const CalendarComponent = ({
	month = CURRENT_MONTH,
	year = CURRENT_YEAR,
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
				<div className='calendar__header-month'>
					<div className='calendar__header-month__arrow-left'>
						<CalendarMonthButtonComponent
							arrow={ARROW.left}
							direction='previous'
						/>
					</div>
					<div className='calendar__header-month__text'>
						{monthName} {year === CURRENT_YEAR ? null : year}
					</div>
					<div className='calendar__header-month__arrow-right'>
						<CalendarMonthButtonComponent
							arrow={ARROW.right}
							direction='next'
						/>
					</div>
				</div>
				<div className='calendar__header-days'>
					{dayNames.map((dayName, index) => (
						<div
							className='calendar__header-day'
							key={index}>
							{dayName}
						</div>
					))}
				</div>
			</div>
			<div className='calendar__body'>
				{dayNumbers.map((dayNumber, index) => (
					<CalendarFieldComponent
						dayNumber={dayNumber}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default CalendarComponent;
