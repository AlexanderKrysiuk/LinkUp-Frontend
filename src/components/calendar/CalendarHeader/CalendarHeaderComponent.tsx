import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';

import { getLocaleMonthName } from '@utils/CalendarHelpers/calendarFunctions.ts';

import React, { Dispatch, SetStateAction } from 'react';

import { CURRENT_YEAR } from '@utils/CalendarHelpers/calendarConstants.ts';

import CalendarArrowComponent from './CalendarArrowComponent.tsx';

const ARROW = { left: faLeftLong, right: faRightLong };

type CalendarHeaderComponentProps = {
	prevDate: Date;
	setDate: Dispatch<SetStateAction<Date>>;
};

const CalendarHeaderComponent = ({
	prevDate,
	setDate,
}: CalendarHeaderComponentProps) => {
	return (
		<div className='calendar__header-month'>
			<div className='calendar__header-month__arrow-left'>
				<CalendarArrowComponent
					arrow={ARROW.left}
					direction='previous'
					setDate={setDate}
					prevDate={prevDate}
				/>
			</div>
			<div className='calendar__header-month__text'>
				{getLocaleMonthName(prevDate.getMonth())}{' '}
				{prevDate.getFullYear() === CURRENT_YEAR
					? null
					: prevDate.getFullYear()}
			</div>
			<div className='calendar__header-month__arrow-right'>
				<CalendarArrowComponent
					arrow={ARROW.right}
					direction='next'
					setDate={setDate}
					prevDate={prevDate}
				/>
			</div>
		</div>
	);
};

export default CalendarHeaderComponent;
